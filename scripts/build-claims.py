#!/usr/bin/env python3
"""Build the public claim trace from the hash-chained ledger.

Fails if the digest chain breaks, if derive_current.py's verdicts disagree
with 21_Derived_Current.csv, or if suppressed source identifiers leak into
the public JSON.
"""
import csv
import hashlib
import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'data' / 'evidence'
LEDGER = DATA / 'ledger'
PACKS = DATA / 'packs'
OUT_TS = ROOT / 'src' / 'content' / 'investigations' / 'claims-data.ts'
CHAIN_DIR = ROOT / 'public' / 'investigations' / 'digital-exposure' / 'claims'
LIVE_ROOT = ROOT / 'src'

SUPPRESSED = re.compile(r'S95\b|S107\b|S12[0-9]\b|S13[0-4]\b', re.I)
INTERNAL_EVENT = {
    'AUTHORITY_ATTEMPT',
    'PRINCIPAL_GRANT',
    'TRANSFER_STAGED',
    'TRANSFER_EXECUTED',
    'CONTRADICTION_CANDIDATE',
    'CONTRADICTION_RESOLVED',
}
REJECTED = {'C060', 'C099', 'C121', 'C165', 'C182', 'C190'}
# Claims placed on the live investigation by the published articles.
CURATED = {
    'C001', 'C007', 'C008', 'C009', 'C011', 'C013', 'C014', 'C015', 'C028', 'C040', 'C046',
    'C042', 'C055', 'C058', 'C062', 'C063', 'C064', 'C065', 'C066', 'C067', 'C068',
    'C069', 'C070', 'C072', 'C073', 'C074', 'C080', 'C083', 'C084', 'C085', 'C086',
    'C087', 'C088', 'C089', 'C091', 'C097', 'C100', 'C102', 'C106', 'C107', 'C110',
    'C115', 'C116', 'C124', 'C134', 'C145', 'C146', 'C148', 'C150', 'C154', 'C155',
    'C159', 'C167', 'C169', 'C172', 'C184', 'C185', 'C188', 'C197', 'C198', 'C199',
    'C204', 'C205', 'C206',
}
# Owner-approved public labels for the previously unstated set.
# The 19 Needs-review claims stay unlabeled.
APPROVED_LABELS = {
    'C001': 'Confirmed', 'C008': 'Confirmed', 'C009': 'Confirmed', 'C040': 'Confirmed',
    'C042': 'Confirmed', 'C047': 'Confirmed', 'C055': 'Confirmed', 'C058': 'Confirmed',
    'C063': 'Confirmed', 'C064': 'Confirmed', 'C067': 'Confirmed', 'C070': 'Confirmed',
    'C084': 'Confirmed', 'C085': 'Confirmed', 'C086': 'Confirmed', 'C087': 'Confirmed',
    'C089': 'Confirmed', 'C100': 'Confirmed', 'C102': 'Confirmed', 'C106': 'Confirmed',
    'C107': 'Confirmed', 'C110': 'Confirmed', 'C115': 'Confirmed', 'C116': 'Confirmed',
    'C134': 'Confirmed', 'C148': 'Confirmed', 'C150': 'Confirmed', 'C159': 'Confirmed',
    'C167': 'Confirmed', 'C169': 'Confirmed', 'C188': 'Confirmed', 'C197': 'Confirmed',
    'C013': 'Demonstrated', 'C014': 'Demonstrated', 'C015': 'Demonstrated',
    'C065': 'Demonstrated', 'C074': 'Demonstrated', 'C088': 'Demonstrated',
    'C091': 'Demonstrated', 'C185': 'Demonstrated', 'C198': 'Demonstrated',
}
HOLD_NOT_STATED = {
    'C007', 'C011', 'C028', 'C046', 'C062', 'C068', 'C072', 'C080', 'C083', 'C097',
    'C124', 'C145', 'C146', 'C154', 'C155', 'C172', 'C184', 'C199', 'C206',
}
SCOPE_NOTES = {
    'C055': 'Confirmed covers the mechanism only, not the dollar figures.',
    'C058': 'Confirmed covers the mechanism only, not the dollar figures.',
}
ARTICLE_LINKS = [
    ('content/investigations/source/03-dns-hijacking-explained.md', 'The 2008 class is CVE-2008-1447.', 'C065'),
    ('content/investigations/source/03-dns-hijacking-explained.md', 'an FBI-led takedown replaced rogue servers with clean ones.', 'C066'),
    ('content/investigations/source/03-dns-hijacking-explained.md', 'affecting dozens of organisations in at least 13 countries', 'C067'),
    ('content/investigations/source/03-dns-hijacking-explained.md', 'around one million vulnerable domains.', 'C068'),
    ('content/investigations/source/03-dns-hijacking-explained.md', 'Roughly US$150,000 was reported stolen.', 'C069'),
    ('content/investigations/source/03-dns-hijacking-explained.md', 'It protects the integrity of the answer, not its confidentiality.', 'C070'),
    ('content/investigations/source/03-dns-hijacking-explained.md', 'dated 22 January 2019.', 'C197'),
    ('content/investigations/source/04-bluetooth-ble-tracking.md', 'Apple and Google added cross-platform unwanted-tracking alerts in May 2024.', 'C072'),
    ('content/investigations/source/04-bluetooth-ble-tracking.md', 'in the worst case to one byte', 'C015'),
    ('content/investigations/source/04-bluetooth-ble-tracking.md', 'BlueBorne\'s Linux flaw is CVE-2017-1000251:', 'C073'),
    ('content/investigations/source/04-bluetooth-ble-tracking.md', 'BIAS is CVE-2020-10135.', 'C185'),
    ('content/investigations/source/06-iphone-zero-click-spyware.md', 'was fixed in iOS 14.8.', 'C084'),
    ('content/investigations/source/06-iphone-zero-click-spyware.md', 'CVE-2025-24200** is a USB Restricted Mode bypass that requires physical access.', 'C087'),
    ('content/investigations/source/05-android-accessibility-service-malware.md', 'more than 100,000 Google Play installs', 'C083'),
    ('content/investigations/source/08-pegasus-predator-commercial-spyware.md', 'Sara Hamou, Andrea Gambazzi, and Merom Harpaz.', 'C204'),
    ('content/investigations/source/11-sim-swap-account-takeover.md', 'It is not the only route.', 'C028'),
    ('content/investigations/source/07-whatsapp-encryption-limits.md', 'It is not the only way an account is taken over.', 'C028'),
    ('content/investigations/source/deepfake-ai-payment-fraud.md', 'approximately HK$200 million', 'C115'),
    ('content/investigations/source/deepfake-ai-payment-fraud.md', '22,364 AI-related complaints', 'C116'),
    ('content/investigations/source/regional-reporting-limits.md', 'a base of 4,875 EU incidents.', 'C169'),
    ('content/investigations/source/02-hotel-wifi-security-guide.md', 'primary verification pending.', 'C062'),
    ('content/investigations/source/perimeter.md', 'FORCEDENTRY affected iOS before 14.8 and was fixed in 14.8.', 'C084'),
]
FORBIDDEN_PUBLIC = re.compile(
    r'AUTHORITY_ATTEMPT|PRINCIPAL_GRANT|TRANSFER_STAGED|TRANSFER_EXECUTED|CONTRADICTION_|'
    r'refute_first|recomputation|asset_eligibility|suppression_status|heeded_status|batch_id',
    re.I,
)


def read_csv(path):
    with path.open(encoding='utf-8-sig', newline='') as handle:
        return list(csv.DictReader(handle))


def verify_chain(events):
    previous = '0' * 64
    keys = [
        'event_id',
        'claim_id',
        'event_type',
        'batch_id',
        'posted_at',
        'reverses_event_id',
        'related_event_id',
        'forward_pointer_event_id',
        'correction_kind',
    ]
    for event in events:
        canonical = json.dumps({key: event[key] for key in keys}, sort_keys=True, separators=(',', ':'))
        expected = hashlib.sha256((previous + canonical).encode()).hexdigest()
        if event['previous_entry_digest'] != previous:
            raise SystemExit(f'event {event["event_id"]}: previous digest mismatch')
        if event['entry_digest'] != expected:
            raise SystemExit(f'event {event["event_id"]}: digest mismatch')
        previous = expected


def verify_manifest():
    manifest = (LEDGER / 'MANIFEST_SHA256.txt').read_text(encoding='utf-8')
    expected = {}
    for line in manifest.splitlines():
        if not line.strip():
            continue
        digest, name = line.split(None, 1)
        expected[Path(name).name] = digest
    for name in ('claim_event.csv', 'verdict_leg.csv', 'derive_current.py'):
        actual = hashlib.sha256((LEDGER / name).read_bytes()).hexdigest()
        if actual != expected[name]:
            raise SystemExit(f'manifest mismatch for {name}')


def derive_rows(events, legs_by_event):
    claims = [event['claim_id'] for event in events if event['event_type'] == 'CLAIM_LOGGED']
    reversed_ids = {
        event['reverses_event_id']
        for event in events
        if event['event_type'] == 'VERDICT_REVERSED' and event['reverses_event_id']
    }
    latest = {}
    for event in events:
        if event['event_type'] not in {'VERDICT_CONFIRMED', 'VERDICT_ADJUSTED', 'VERDICT_REJECTED'}:
            continue
        if event['event_id'] in reversed_ids:
            continue
        current = latest.get(event['claim_id'])
        if current is None or int(event['event_id']) > int(current['event_id']):
            latest[event['claim_id']] = event
    rows = []
    for claim_id in sorted(set(claims), key=lambda item: int(item[1:])):
        event = latest.get(claim_id)
        if event is None:
            rows.append({'claim_id': claim_id, 'current_verdict': 'unverified', 'active_event_id': ''})
        else:
            verdict = legs_by_event[event['event_id']].get('verdict', '')
            rows.append({'claim_id': claim_id, 'current_verdict': verdict, 'active_event_id': event['event_id']})
    return rows, reversed_ids


def load_live_pages():
    pages = []
    folder = LIVE_ROOT / 'content' / 'investigations' / 'source'
    for path in sorted(folder.glob('*.md')):
        pages.append((str(path.relative_to(LIVE_ROOT)), path.read_text(encoding='utf-8', errors='replace')))
    academy = LIVE_ROOT / 'pages' / 'AcademyPage.tsx'
    if academy.exists():
        pages.append((str(academy.relative_to(LIVE_ROOT)), academy.read_text(encoding='utf-8')))
    return pages


def norm(text):
    text = text.lower().replace('’', "'").replace('“', '"').replace('”', '"')
    return re.sub(r'\s+', ' ', text)


def parse_quotes():
    quotes = defaultdict(list)
    for path in PACKS.rglob('*'):
        if not path.name.endswith('source_quotes.md'):
            continue
        current = None
        for line in path.read_text(encoding='utf-8', errors='replace').splitlines():
            heading = re.match(r'^##\s+(C\d+)\b', line)
            bullet = re.match(r'^-\s+\*\*(C\d+)[^:]*:\*\*\s*(.*)$', line)
            if heading:
                current = heading.group(1)
                continue
            if bullet:
                current = bullet.group(1)
                text = bullet.group(2).strip(' “”"')
                if text and not SUPPRESSED.search(text):
                    quotes[current].append(text[:500])
                continue
            if current and line.startswith('>'):
                text = line.lstrip('> ').strip(' “”"')
                if text and not SUPPRESSED.search(text):
                    quotes[current].append(text[:500])
    for claim_id, items in quotes.items():
        deduped = []
        for item in items:
            if item not in deduped:
                deduped.append(item)
        quotes[claim_id] = deduped[:3]
    return quotes


def load_indexes():
    by_claim = defaultdict(list)
    for path in PACKS.rglob('*claim_index.csv'):
        for row in read_csv(path):
            claim_id = row.get('claim_id') or ''
            if not claim_id:
                continue
            by_claim[claim_id].append(row)
    return by_claim


def clean_note(value):
    value = (value or '').strip()
    if not value or value.lower() in {'none', 'n/a'}:
        return ''
    if SUPPRESSED.search(value):
        return ''
    return value


def sources_for(rows):
    sources = []
    seen = set()
    for row in rows:
        status = (row.get('suppression_status') or '').strip().lower()
        if status and status not in {'none', 'n/a'}:
            continue
        name = (row.get('sources') or row.get('source') or '').strip()
        url = (row.get('source_url') or '').strip()
        if SUPPRESSED.search(name) or SUPPRESSED.search(url):
            continue
        if not name and not url:
            continue
        key = (name, url)
        if key in seen:
            continue
        seen.add(key)
        sources.append({'name': name, 'url': url})
    return sources


def caveats_for(rows):
    notes = []
    for row in rows:
        for field in ('omission_caveats', 'conditional_labels'):
            text = clean_note(row.get(field) or '')
            if text and text not in notes:
                notes.append(text)
    return notes


def history_for(claim_id, events, legs_by_event, reversed_ids):
    changes = []
    for event in events:
        if event['claim_id'] != claim_id or event['event_id'] in reversed_ids:
            continue
        if event['event_type'] in INTERNAL_EVENT or event['event_type'] == 'VERDICT_REVERSED':
            continue
        fields = legs_by_event.get(event['event_id'], {})
        old = (fields.get('old_wording') or '').strip()
        new = (fields.get('new_wording') or '').strip()
        if not old or not new or old == new:
            continue
        if SUPPRESSED.search(old) or SUPPRESSED.search(new):
            continue
        reason = (fields.get('reason') or '').strip()
        if SUPPRESSED.search(reason):
            reason = ''
        changes.append({
            'date': event['posted_at'][:10],
            'oldWording': old,
            'newWording': new,
            'reason': reason,
        })
    return changes


def latest_wording(claim_id, events, legs_by_event, reversed_ids):
    substantive = ''
    latest = ''
    for event in events:
        if event['claim_id'] != claim_id or event['event_id'] in reversed_ids:
            continue
        if event['event_type'] in INTERNAL_EVENT:
            continue
        text = (legs_by_event.get(event['event_id'], {}).get('new_wording') or '').strip()
        if not text or SUPPRESSED.search(text):
            continue
        latest = text
        if len(text) >= 40 and text.lower() not in {'two-source', 'single-source'}:
            substantive = text
    return substantive or latest


STOPWORDS = {
    'about', 'after', 'against', 'because', 'before', 'being', 'between', 'confirmed',
    'documented', 'during', 'evidence', 'reported', 'source', 'through', 'without',
    'public', 'security', 'network', 'device', 'account', 'content', 'version',
}


def match_tokens(text):
    folded = norm(text)
    strong = set(re.findall(r'cve-\d{4}-\d+', folded))
    strong.update(re.findall(r'\b\d{1,3}(?:,\d{3})+\b', folded))
    strong.update(re.findall(r'\b\d+\.\d+\.\d+\b', folded))
    words = re.findall(r"[a-z0-9$%.'’-]+", folded)
    phrases = set()
    size = 6
    for index in range(0, max(0, len(words) - size + 1)):
        chunk = ' '.join(words[index:index + size])
        if len(chunk) >= 36:
            phrases.add(chunk)
    return strong, phrases


def pages_matching(texts, pages):
    strong, phrases = set(), set()
    for text in texts:
        part_strong, part_phrases = match_tokens(text)
        strong |= part_strong
        phrases |= part_phrases
    if not strong and not phrases:
        return []
    hits = []
    for page, body in pages:
        body_n = norm(body)
        if any(token in body_n for token in strong | phrases):
            hits.append(page)
    return hits


def label_near(texts, pages):
    tokens = set()
    for text in texts:
        strong, phrases = match_tokens(text)
        tokens |= strong | phrases
    for _page, body in pages:
        body_n = norm(body)
        for token in tokens:
            index = body_n.find(token)
            if index < 0:
                continue
            window = body_n[max(0, index - 220): index + len(token) + 260]
            if 'demonstrated in research' in window or re.search(r'\[demonstrated', window):
                return 'Demonstrated'
            if 'unsupported' in window:
                return 'Unsupported'
            if 'plausible' in window:
                return 'Plausible'
            if re.search(r'\[confirmed|\bconfirmed\b', window):
                return 'Confirmed'
    return ''


def in_the_wild(wording, sources):
    blob = ' '.join([wording] + [item['name'] for item in sources]).lower()
    markers = ('citizen lab', 'fbi', 'court', 'jury', 'ofac', 'takedown', 'ic3', 'infected', 'in the wild', 'exploited', 'incident')
    return any(marker in blob for marker in markers)


def apply_article_links():
    linked = []
    missed = []
    for rel, needle, claim_id in ARTICLE_LINKS:
        path = ROOT / 'src' / rel
        text = path.read_text(encoding='utf-8')
        if f'claims/#{claim_id}' in text:
            linked.append(claim_id)
            continue
        count = text.count(needle)
        if count < 1:
            missed.append((claim_id, rel, count))
            continue
        link = f' → [{claim_id}](/investigations/digital-exposure/claims/#{claim_id})'
        path.write_text(text.replace(needle, needle + link), encoding='utf-8')
        linked.append(claim_id)
    return linked, missed


def main():
    events = read_csv(LEDGER / 'claim_event.csv')
    legs = read_csv(LEDGER / 'verdict_leg.csv')
    stored = read_csv(LEDGER / '21_Derived_Current.csv')
    verify_chain(events)
    verify_manifest()
    legs_by_event = defaultdict(dict)
    for leg in legs:
        legs_by_event[leg['event_id']][leg['field_name']] = leg['field_value']
    derived, reversed_ids = derive_rows(events, legs_by_event)
    stored_map = {row['claim_id']: row['current_verdict'] for row in stored}
    for row in derived:
        if stored_map.get(row['claim_id']) != row['current_verdict']:
            raise SystemExit(f'verdict mismatch for {row["claim_id"]}')
    if {row['claim_id'] for row in derived if row['current_verdict'] == 'rejected'} != REJECTED:
        raise SystemExit('rejected set does not match the six excluded claims')

    linked, missed = apply_article_links()
    print(f'article links {len(linked)} missed {missed}')
    pages = load_live_pages()
    quotes = parse_quotes()
    indexes = load_indexes()
    published = []
    unmapped = []
    for row in derived:
        claim_id = row['claim_id']
        verdict = row['current_verdict']
        if verdict == 'rejected' or claim_id == 'C130':
            continue
        wording = latest_wording(claim_id, events, legs_by_event, reversed_ids)
        claim_quotes = [quote for quote in quotes.get(claim_id, []) if not SUPPRESSED.search(quote)]
        claim_sources = sources_for(indexes.get(claim_id, []))
        if not claim_sources:
            source_name = ''
            if row['active_event_id']:
                source_name = legs_by_event[row['active_event_id']].get('source', '')
            if source_name and not SUPPRESSED.search(source_name) and 'R36' not in source_name:
                claim_sources = [{'name': source_name, 'url': ''}]
        matched = pages_matching([wording, *claim_quotes], pages)
        if verdict == 'unverified':
            published.append({
                'id': claim_id,
                'wording': '',
                'label': 'Unsupported',
                'narrowed': False,
                'sources': [],
                'quotes': [],
                'caveats': ['The ledger stores no checked sentence for this claim.'],
                'history': [],
                'pages': [],
            })
            continue
        if not matched and claim_id not in CURATED:
            continue
        label = label_near([wording, *claim_quotes], pages)
        if not label:
            if verdict == 'confirmed' and in_the_wild(wording, claim_sources):
                label = 'Confirmed'
            else:
                label = ''
        if claim_id in HOLD_NOT_STATED:
            label = ''
        elif claim_id in APPROVED_LABELS:
            label = APPROVED_LABELS[claim_id]
        if not label and verdict != 'unverified':
            unmapped.append(claim_id)
        caveats = caveats_for(indexes.get(claim_id, []))
        if claim_id in APPROVED_LABELS and 'Single-source.' not in caveats:
            caveats.append('Single-source.')
        if claim_id in SCOPE_NOTES and SCOPE_NOTES[claim_id] not in caveats:
            caveats.append(SCOPE_NOTES[claim_id])
        published.append({
            'id': claim_id,
            'wording': wording,
            'label': label,
            'narrowed': verdict == 'adjusted',
            'sources': claim_sources,
            'quotes': claim_quotes,
            'caveats': caveats,
            'history': history_for(claim_id, events, legs_by_event, reversed_ids),
            'pages': matched,
        })

    published.sort(key=lambda item: int(item['id'][1:]))
    chain = []
    published_ids = {item['id'] for item in published}
    for event in events:
        if event['claim_id'] not in published_ids or event['event_type'] in INTERNAL_EVENT:
            continue
        chain.append({
            'event_id': event['event_id'],
            'entry_digest': event['entry_digest'],
            'previous_entry_digest': event['previous_entry_digest'],
        })

    payload = {
        'rejectedCount': 6,
        'ledgerTotal': len(derived),
        'publishedCount': len(published),
        'unmapped': unmapped,
        'claims': published,
        'chain': chain,
    }
    blob = json.dumps(payload, ensure_ascii=False)
    if SUPPRESSED.search(blob) or FORBIDDEN_PUBLIC.search(blob):
        raise SystemExit('public claim JSON contains a suppressed source or an internal field')
    for claim_id in REJECTED:
        if re.search(rf'\b{claim_id}\b', blob):
            raise SystemExit(f'rejected id {claim_id} leaked into public JSON')

    OUT_TS.write_text(
        '/* Generated by scripts/build-claims.py. Do not edit by hand. */\n'
        'export const claimsPageData: {\n'
        '  rejectedCount: number\n'
        '  ledgerTotal: number\n'
        '  publishedCount: number\n'
        '  unmapped: string[]\n'
        '  claims: Array<{\n'
        '    id: string\n'
        '    wording: string\n'
        '    label: string\n'
        '    narrowed: boolean\n'
        '    sources: Array<{ name: string; url: string }>\n'
        '    quotes: string[]\n'
        '    caveats: string[]\n'
        '    history: Array<{ date: string; oldWording: string; newWording: string; reason: string }>\n'
        '    pages: string[]\n'
        '  }>\n'
        '  chain: Array<{ event_id: string; entry_digest: string; previous_entry_digest: string }>\n'
        '} = ' + blob + '\n',
        encoding='utf-8',
    )
    CHAIN_DIR.mkdir(parents=True, exist_ok=True)
    (CHAIN_DIR / 'chain.json').write_text(json.dumps(chain, indent=2) + '\n', encoding='utf-8')
    with (CHAIN_DIR / 'chain.csv').open('w', encoding='utf-8', newline='') as handle:
        writer = csv.DictWriter(handle, fieldnames=['event_id', 'entry_digest', 'previous_entry_digest'])
        writer.writeheader()
        writer.writerows(chain)
    print(f'published {len(published)} claims; unmapped labels {len(unmapped)}')
    print('unmapped', ', '.join(unmapped))
    print('chain entries', len(chain))


if __name__ == '__main__':
    main()
