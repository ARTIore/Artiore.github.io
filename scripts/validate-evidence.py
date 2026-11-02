#!/usr/bin/env python3
"""Check Evidence Ledger v1 files. Mirrors src/lib/evidence/validate.ts.

Each file is judged on its own. A failure does not stick to the next file.
"""

from __future__ import annotations

import json
import re
import sys
from calendar import monthrange
from pathlib import Path
from urllib.parse import urlparse

CLAIM_ID = re.compile(r"^ART-EVD-[0-9]{4,}$")
DATE_TIME = re.compile(
    r"^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(Z|[+-]\d{2}:\d{2})$"
)
STATUSES = {
    "VERIFIED",
    "SUPPORTED_INFERENCE",
    "DISPUTED",
    "UNVERIFIED",
    "BELIEF_INTERPRETATION",
    "CORRECTED",
}
PUBLICATION = {"DRAFT", "REVIEW", "APPROVED", "PUBLISHED", "RETRACTED"}
SOURCE_TYPES = {"PRIMARY", "SECONDARY", "USER_REPORT", "OTHER"}
RECORD_KEYS = {
    "claim_id",
    "statement",
    "status",
    "sources",
    "scope",
    "limitations",
    "verification_method",
    "verified_at",
    "conflicting_evidence",
    "publication_status",
    "human_approval",
    "revision_history",
}
REQUIRED = (
    "claim_id",
    "statement",
    "status",
    "sources",
    "scope",
    "limitations",
    "publication_status",
    "revision_history",
)


def is_date_time(value: object) -> bool:
    if not isinstance(value, str):
        return False
    match = DATE_TIME.fullmatch(value)
    if not match:
        return False
    year, month, day = int(match.group(1)), int(match.group(2)), int(match.group(3))
    hour, minute, second = int(match.group(4)), int(match.group(5)), int(match.group(6))
    if not 1 <= month <= 12 or hour > 23 or minute > 59 or second > 60:
        return False
    if day < 1 or day > monthrange(year, month)[1]:
        return False
    zone = match.group(8)
    if zone != "Z":
        offset_hour, offset_minute = int(zone[1:3]), int(zone[4:6])
        if offset_hour > 23 or offset_minute > 59:
            return False
    return True


def is_safe_http_url(value: object) -> bool:
    if not isinstance(value, str) or value != value.strip():
        return False
    if any(ord(char) < 32 or ord(char) == 127 for char in value):
        return False
    parsed = urlparse(value)
    if parsed.scheme.lower() not in {"http", "https"}:
        return False
    if parsed.username or parsed.password:
        return False
    return bool(parsed.hostname)


def non_empty(value: object) -> bool:
    return isinstance(value, str) and value.strip() != ""


class Issues(list):
    def add(self, path: str, message: str) -> None:
        self.append(f"{path}: {message}" if path else message)


def check_date(issues: Issues, path: str, value: object) -> None:
    if not is_date_time(value):
        issues.add(path, "Enter a real date and time with a timezone, such as 2026-11-02T16:00:00Z.")


def check_url(issues: Issues, path: str, value: object) -> None:
    if not is_safe_http_url(value):
        issues.add(path, "Only ordinary web links (http or https) are allowed.")


def reject_unknown(issues: Issues, path: str, value: dict, allowed: set[str]) -> None:
    for key in value:
        if key not in allowed:
            issues.add(f"{path}/{key}", "This field is not part of the record.")


def check_source(issues: Issues, path: str, value: object) -> None:
    if not isinstance(value, dict):
        issues.add(path, "Each source must be an object.")
        return
    reject_unknown(issues, path, value, {"url", "source_type", "accessed_at", "archived_url", "note"})
    check_url(issues, f"{path}/url", value.get("url"))
    if value.get("source_type") not in SOURCE_TYPES:
        issues.add(f"{path}/source_type", "Source type must be PRIMARY, SECONDARY, USER_REPORT, or OTHER.")
    check_date(issues, f"{path}/accessed_at", value.get("accessed_at"))
    if "archived_url" in value and value["archived_url"] is not None:
        check_url(issues, f"{path}/archived_url", value["archived_url"])
    if "note" in value and not isinstance(value["note"], str):
        issues.add(f"{path}/note", "A source note must be text.")


def check_conflict(issues: Issues, path: str, value: object) -> None:
    if not isinstance(value, dict):
        issues.add(path, "Each conflicting item must be an object with a statement.")
        return
    reject_unknown(issues, path, value, {"statement", "source_url"})
    if not non_empty(value.get("statement")):
        issues.add(f"{path}/statement", "Conflicting evidence needs a statement.")
    if "source_url" in value and value["source_url"] is not None:
        check_url(issues, f"{path}/source_url", value["source_url"])


def check_revision(issues: Issues, path: str, value: object) -> None:
    if not isinstance(value, dict):
        issues.add(path, "Each revision must be an object.")
        return
    reject_unknown(issues, path, value, {"timestamp", "summary", "previous_statement", "previous_claim_id"})
    check_date(issues, f"{path}/timestamp", value.get("timestamp"))
    if not non_empty(value.get("summary")):
        issues.add(f"{path}/summary", "Each revision needs a short summary.")
    if not non_empty(value.get("previous_statement")):
        issues.add(f"{path}/previous_statement", "Each revision must keep the previous wording.")
    if "previous_claim_id" in value and not (isinstance(value["previous_claim_id"], str) and CLAIM_ID.fullmatch(value["previous_claim_id"])):
        issues.add(f"{path}/previous_claim_id", "A previous claim id must look like ART-EVD-0001.")


def check_approval(issues: Issues, path: str, value: object, required: bool) -> None:
    if value is None:
        if required:
            issues.add(path, "Human approval is required before a record is approved or published.")
        return
    if not isinstance(value, dict):
        issues.add(path, "Human approval must name a person, a time, and the action they took.")
        return
    reject_unknown(issues, path, value, {"approver", "approved_at", "action"})
    if not non_empty(value.get("approver")) or not non_empty(value.get("action")):
        issues.add(path, "Human approval must name a person, a time, and the action they took.")
    check_date(issues, f"{path}/approved_at", value.get("approved_at"))


def check_record(issues: Issues, path: str, value: object) -> None:
    if not isinstance(value, dict):
        issues.add(path, "Each record must be an object.")
        return
    reject_unknown(issues, path, value, RECORD_KEYS)
    for key in REQUIRED:
        if key not in value:
            issues.add(f"{path}/{key}", "This field is required.")
    if not (isinstance(value.get("claim_id"), str) and CLAIM_ID.fullmatch(value["claim_id"])):
        issues.add(f"{path}/claim_id", "Claim id must look like ART-EVD-0001.")
    if not non_empty(value.get("statement")):
        issues.add(f"{path}/statement", "The statement cannot be empty.")
    if value.get("status") not in STATUSES:
        issues.add(f"{path}/status", "Status is not one of the evidence labels.")
    if not non_empty(value.get("scope")):
        issues.add(f"{path}/scope", "Scope cannot be empty.")
    if value.get("publication_status") not in PUBLICATION:
        issues.add(f"{path}/publication_status", "Publication status is not a known state.")
    sources = value.get("sources")
    if not isinstance(sources, list):
        issues.add(f"{path}/sources", "Sources must be a list.")
    else:
        for index, source in enumerate(sources):
            check_source(issues, f"{path}/sources/{index}", source)
    limitations = value.get("limitations")
    if not isinstance(limitations, list):
        issues.add(f"{path}/limitations", "Limitations must be a list.")
    else:
        for index, item in enumerate(limitations):
            if not non_empty(item):
                issues.add(f"{path}/limitations/{index}", "A limitation cannot be empty.")
    if "verification_method" in value and value["verification_method"] is not None and not isinstance(value["verification_method"], str):
        issues.add(f"{path}/verification_method", "Verification method must be text or null.")
    if "verified_at" in value and value["verified_at"] is not None:
        check_date(issues, f"{path}/verified_at", value["verified_at"])
    if "conflicting_evidence" in value:
        conflicts = value["conflicting_evidence"]
        if not isinstance(conflicts, list):
            issues.add(f"{path}/conflicting_evidence", "Conflicting evidence must be a list.")
        else:
            for index, item in enumerate(conflicts):
                check_conflict(issues, f"{path}/conflicting_evidence/{index}", item)
    history = value.get("revision_history")
    if not isinstance(history, list):
        issues.add(f"{path}/revision_history", "Revision history must be a list.")
    else:
        for index, item in enumerate(history):
            check_revision(issues, f"{path}/revision_history/{index}", item)
    published = value.get("publication_status") in {"APPROVED", "PUBLISHED"}
    if "human_approval" in value or published:
        check_approval(issues, f"{path}/human_approval", value.get("human_approval"), published)
    if value.get("status") == "VERIFIED":
        if not non_empty(value.get("verification_method")):
            issues.add(f"{path}/verification_method", "A verified record needs a verification method.")
        if not isinstance(value.get("verified_at"), str):
            issues.add(f"{path}/verified_at", "A verified record needs a verified_at date.")
        if not isinstance(sources, list) or len(sources) < 1:
            issues.add(f"{path}/sources", "A verified record needs at least one source.")
    if value.get("status") == "CORRECTED" and (not isinstance(history, list) or len(history) < 1):
        issues.add(f"{path}/revision_history", "A corrected record needs revision history.")
    if value.get("status") == "DISPUTED":
        conflicts = value.get("conflicting_evidence")
        if not isinstance(conflicts, list) or len(conflicts) < 1:
            issues.add(f"{path}/conflicting_evidence", "A disputed record needs conflicting evidence.")


def validate_data(data: object) -> list[str]:
    issues = Issues()
    if isinstance(data, list):
        if not 1 <= len(data) <= 2000:
            issues.add("", "Provide one record, or a list of 1 to 2000 records.")
        seen: set[str] = set()
        for index, record in enumerate(data):
            check_record(issues, f"/{index}", record)
            if isinstance(record, dict) and isinstance(record.get("claim_id"), str):
                claim_id = record["claim_id"]
                if claim_id in seen:
                    issues.add(f"/{index}/claim_id", f"Duplicate claim id {claim_id}.")
                seen.add(claim_id)
    else:
        check_record(issues, "", data)
    return list(issues)


def validate_text(text: str) -> list[str]:
    try:
        data = json.loads(text)
    except json.JSONDecodeError:
        return ["The file is not valid JSON."]
    return validate_data(data)


def validate_file(path: Path) -> list[str]:
    try:
        text = path.read_text(encoding="utf-8")
    except OSError as error:
        return [f"Could not read file: {error.strerror or error}"]
    return validate_text(text)


def main(argv: list[str]) -> int:
    if not argv:
        print("Usage: python3 scripts/validate-evidence.py <file.json> [more.json]", file=sys.stderr)
        return 2
    failed = False
    for name in argv:
        issues = validate_file(Path(name))
        if issues:
            failed = True
            print(f"{name}: FAIL")
            for item in issues:
                print(item, file=sys.stderr)
        else:
            print(f"{name}: PASS")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
