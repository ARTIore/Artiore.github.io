#!/usr/bin/env python3
"""Parity checks for scripts/validate-evidence.py. Uses the shared cases file."""

from __future__ import annotations

import importlib.util
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LEDGER = ROOT / "data" / "evidence" / "ledger-v1"
SCRIPT = ROOT / "scripts" / "validate-evidence.py"

spec = importlib.util.spec_from_file_location("validate_evidence", SCRIPT)
if spec is None or spec.loader is None:
    raise RuntimeError("Could not load validate-evidence.py")
validate_evidence = importlib.util.module_from_spec(spec)
spec.loader.exec_module(validate_evidence)


def load_case(case: dict) -> object:
    if "file" in case:
        return json.loads((LEDGER / case["file"]).read_text(encoding="utf-8"))
    return case["data"]


class EvidenceValidatorTest(unittest.TestCase):
    def test_shared_cases(self) -> None:
        cases = json.loads((LEDGER / "cases.json").read_text(encoding="utf-8"))
        for case in cases:
            issues = validate_evidence.validate_data(load_case(case))
            if case["ok"]:
                self.assertEqual(issues, [], case["id"])
            else:
                self.assertTrue(any(case["match"] in item for item in issues), f"{case['id']}: {issues}")

    def test_corrections_and_exchange(self) -> None:
        draft = {
            "correction_id": "ART-COR-0001",
            "claim_id": "ART-EVD-0001",
            "original_statement": "An unfamiliar name is not proof.",
            "proposed_statement": "Say when the name would matter.",
            "reason": "Illustrative only.",
            "evidence_urls": [],
            "status": "SUBMITTED_DRAFT",
            "publication_authorization": None,
            "revision_history": [],
        }
        self.assertEqual(validate_evidence.validate_data(draft), [])
        unsafe = dict(draft)
        unsafe["evidence_urls"] = ["javascript:alert(1)"]
        self.assertTrue(any("ordinary web links" in item for item in validate_evidence.validate_data(unsafe)))
        published = dict(draft)
        published["status"] = "PUBLISHED"
        self.assertTrue(any("who authorized" in item for item in validate_evidence.validate_data(published)))
        old = {"schema_version": "1.0", "claims": [], "corrections": []}
        self.assertTrue(any("1.1" in item for item in validate_evidence.validate_data(old)))

    def test_schema_documents_the_rules(self) -> None:
        schema = (ROOT / "public" / "schemas" / "evidence-ledger-v1.json").read_text(encoding="utf-8")
        for phrase in ("human_approval", "previous_statement", "conflicting_evidence", "javascript:"):
            self.assertIn(phrase, schema)

    def test_cli_does_not_leak_failures_between_files(self) -> None:
        published = json.loads((LEDGER / "example-record.json").read_text(encoding="utf-8"))
        published["publication_status"] = "PUBLISHED"
        published["human_approval"] = None
        with tempfile.TemporaryDirectory() as tmp:
            bad = Path(tmp) / "bad.json"
            good = Path(tmp) / "good.json"
            bad.write_text(json.dumps(published), encoding="utf-8")
            good.write_text((LEDGER / "example-record.json").read_text(encoding="utf-8"), encoding="utf-8")
            first = subprocess.run(
                [sys.executable, str(SCRIPT), str(bad), str(good)],
                check=False,
                capture_output=True,
                text=True,
            )
            self.assertIn(f"{bad}: FAIL", first.stdout)
            self.assertIn(f"{good}: PASS", first.stdout)
            self.assertEqual(first.returncode, 1)
            second = subprocess.run(
                [sys.executable, str(SCRIPT), str(good), str(bad)],
                check=False,
                capture_output=True,
                text=True,
            )
            self.assertIn(f"{good}: PASS", second.stdout)
            self.assertIn(f"{bad}: FAIL", second.stdout)
            self.assertNotIn(f"{good}: FAIL", second.stdout)


if __name__ == "__main__":
    unittest.main()
