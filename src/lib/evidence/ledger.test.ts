import { describe, expect, it } from 'vitest'
import { demoRecord } from '../../content/safety/demo-record'
import { FILE_STATUS_IS_NOT_APPROVAL, fileClaimsAuthority } from './corrections'
import { validateLedgerDocument } from './ledger'

const correction = {
  correction_id: 'ART-COR-0001',
  claim_id: 'ART-EVD-0001',
  original_statement: demoRecord.statement,
  proposed_statement: 'Example correction request: clarify when a Bluetooth name matters.',
  reason: 'Illustrative request only; no factual error established.',
  evidence_urls: [],
  status: 'SUBMITTED_DRAFT',
  submitted_at: null,
  reviewed_at: null,
  reviewer: null,
  decision_reason: null,
  publication_authorization: null,
  revision_history: [],
  public_note: 'DEMONSTRATION RECORD — not submitted, verified, approved, or published.',
}

describe('ledger documents', () => {
  it('accepts a draft correction and rejects a javascript link', () => {
    expect(validateLedgerDocument(correction).ok).toBe(true)
    const bad = validateLedgerDocument({
      ...correction,
      evidence_urls: ['javascript:alert(1)'],
    })
    expect(bad.ok).toBe(false)
    expect(bad.issues.some((item) => item.message.includes('ordinary web links'))).toBe(true)
  })

  it('rejects a published correction that does not name an authorizer', () => {
    const result = validateLedgerDocument({ ...correction, status: 'PUBLISHED' })
    expect(result.ok).toBe(false)
    expect(result.issues.some((item) => item.message.includes('who authorized'))).toBe(true)
  })

  it('checks exchange version 1.1 and warns when a correction has no claim', () => {
    const result = validateLedgerDocument({
      schema_version: '1.1',
      label: 'DEMONSTRATION ONLY — not verified, approved or published',
      claims: [demoRecord],
      corrections: [{ ...correction, claim_id: 'ART-EVD-9999' }],
    })
    expect(result.ok).toBe(true)
    expect(result.warnings.some((item) => item.message.includes('ART-EVD-9999'))).toBe(true)
    const old = validateLedgerDocument({ schema_version: '1.0', claims: [], corrections: [] })
    expect(old.ok).toBe(false)
    expect(old.issues.some((item) => item.message.includes('1.1'))).toBe(true)
  })

  it('does not treat a file status as approval', () => {
    expect(fileClaimsAuthority('PUBLISHED')).toBe(true)
    expect(FILE_STATUS_IS_NOT_APPROVAL.toLowerCase()).toContain('not proof')
  })
})
