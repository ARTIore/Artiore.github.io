#!/usr/bin/env python3
"""Derive current verdicts from append-only claim_event + verdict_leg.
No stored totals. Latest non-reversed verdict event wins; no verdict event = unverified.
"""
import csv, json, hashlib
from collections import Counter, defaultdict
from pathlib import Path

BASE = Path(__file__).resolve().parent
events = list(csv.DictReader((BASE / 'claim_event.csv').open(encoding='utf-8-sig')))
legs = list(csv.DictReader((BASE / 'verdict_leg.csv').open(encoding='utf-8-sig')))

# All claims come from CLAIM_LOGGED events.
claims = [e['claim_id'] for e in events if e['event_type'] == 'CLAIM_LOGGED']
reversed_ids = {e['reverses_event_id'] for e in events if e['event_type'] == 'VERDICT_REVERSED' and e['reverses_event_id']}

def is_active_verdict(e):
    return (e['event_type'] in {'VERDICT_CONFIRMED', 'VERDICT_ADJUSTED', 'VERDICT_REJECTED'}
            and e['event_id'] not in reversed_ids)

# Latest active verdict event per claim; event_id is monotonic.
latest = {}
for e in events:
    if is_active_verdict(e):
        cur = latest.get(e['claim_id'])
        if cur is None or int(e['event_id']) > int(cur['event_id']):
            latest[e['claim_id']] = e

# Every event must carry exactly the seven fields.
legs_by_event = defaultdict(dict)
for l in legs:
    legs_by_event[l['event_id']][l['field_name']] = l['field_value']
required = {'verdict', 'source', 'refute_first', 'old_wording', 'new_wording', 'reason', 'recomputation', 'heeded', 'searched_sources', 'corroboration'}

rows = []
for cid in sorted(claims, key=lambda x: int(x[1:])):
    e = latest.get(cid)
    if e is None:
        rows.append({'claim_id': cid, 'current_verdict': 'unverified', 'active_event_id': ''})
    else:
        missing = required - set(legs_by_event[e['event_id']])
        if missing:
            raise SystemExit(f'{cid}: active event {e["event_id"]} missing fields {sorted(missing)}')
        rows.append({'claim_id': cid, 'current_verdict': legs_by_event[e['event_id']]['verdict'], 'active_event_id': e['event_id']})

with (BASE / '21_Derived_Current.csv').open('w', newline='', encoding='utf-8-sig') as f:
    w = csv.DictWriter(f, fieldnames=['claim_id', 'current_verdict', 'active_event_id'])
    w.writeheader(); w.writerows(rows)

counts = Counter(r['current_verdict'] for r in rows)
print('DERIVED COUNTS')
for k in ['confirmed', 'adjusted', 'rejected', 'unverified']:
    print(f'{k}: {counts.get(k, 0)}')
print('checked:', sum(1 for r in rows if r['current_verdict'] != 'unverified'))
print('total:', len(rows))
# Invariant: exactly one active verdict per claim; 125 unique claims.
assert len(claims) == len(set(claims)) == 204
assert len(latest) <= 204
for e in events:
    assert required == set(legs_by_event[e['event_id']]), f'event {e["event_id"]} lacks full field set'

# Hash-chain verification: each event's digest = SHA256(previous digest + canonical row).
prev = '0' * 64
for e in events:
    canonical = json.dumps({k: e[k] for k in ['event_id','claim_id','event_type','batch_id','posted_at','reverses_event_id','related_event_id','forward_pointer_event_id','correction_kind']}, sort_keys=True, separators=(',',':'))
    expected = hashlib.sha256((prev + canonical).encode()).hexdigest()
    assert e['previous_entry_digest'] == prev, f'event {e["event_id"]}: previous digest mismatch'
    assert e['entry_digest'] == expected, f'event {e["event_id"]}: digest mismatch'
    prev = expected
print('chain: OK')
print('invariant: one active verdict per checked claim; unverified = no verdict event')
