import { describe, expect, it } from 'vitest'
import { validateLedgerDocument } from './ledger'

/**
 * The QA package's exchange.schema.json (schema_version 1.0) only required a
 * claim id, statement, status, an untyped sources array, and any publication
 * string, plus a correction id, claim id, reason, and any status string.
 * Those records are not accepted here.
 */
describe('exchange contract versus the QA 1.0 proposal', () => {
  const qaClaim = {
    claim_id: 'ART-EVD-0001',
    statement: 'A sentence with no scope.',
    status: 'VERIFIED',
    sources: [],
    publication_status: 'PUBLISHED',
  }
  const qaCorrection = {
    correction_id: 'ART-COR-0001',
    claim_id: 'ART-EVD-0001',
    reason: 'because',
    status: 'PUBLISHED',
  }

  it('rejects schema_version 1.0', () => {
    const result = validateLedgerDocument({
      schema_version: '1.0',
      claims: [],
      corrections: [],
    })
    expect(result.ok).toBe(false)
    expect(result.issues.some((item) => item.message.includes('1.1'))).toBe(true)
  })

  it('rejects a claim that would pass the QA minimum', () => {
    const result = validateLedgerDocument(qaClaim)
    expect(result.ok).toBe(false)
    expect(result.issues.some((item) => item.path.includes('scope') || item.message.toLowerCase().includes('scope'))).toBe(true)
    expect(result.issues.some((item) => item.message.includes('Human approval'))).toBe(true)
    expect(result.issues.some((item) => item.message.includes('verification method'))).toBe(true)
  })

  it('rejects a correction that would pass the QA minimum', () => {
    const result = validateLedgerDocument(qaCorrection)
    expect(result.ok).toBe(false)
    expect(result.issues.some((item) => item.message.includes('original statement'))).toBe(true)
    expect(result.issues.some((item) => item.message.includes('who authorized'))).toBe(true)
  })

  it('rejects a javascript source inside an otherwise ordinary claim', () => {
    const result = validateLedgerDocument({
      claim_id: 'ART-EVD-0001',
      statement: 'An illustrative sentence.',
      status: 'UNVERIFIED',
      sources: [
        {
          url: 'javascript:alert(1)',
          source_type: 'OTHER',
          accessed_at: '2026-11-02T16:00:00Z',
        },
      ],
      scope: 'Example only',
      limitations: ['Not a finding'],
      verification_method: null,
      verified_at: null,
      conflicting_evidence: [],
      publication_status: 'DRAFT',
      human_approval: null,
      revision_history: [],
    })
    expect(result.ok).toBe(false)
    expect(result.issues.some((item) => item.message.includes('ordinary web links'))).toBe(true)
  })
})
