import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { demoRecord } from '../../content/safety/demo-record'
import { validateEvidence, validateEvidenceDocuments, validateEvidenceText } from './validate'

const ledger = new URL('../../../data/evidence/ledger-v1/', import.meta.url)

type CaseFile = {
  id: string
  ok: boolean
  match?: string
  file?: string
  data?: unknown
}

function loadCase(entry: CaseFile) {
  if (entry.file) return JSON.parse(readFileSync(new URL(entry.file, ledger), 'utf8')) as unknown
  return entry.data
}

describe('evidence validator', () => {
  const cases = JSON.parse(readFileSync(new URL('cases.json', ledger), 'utf8')) as CaseFile[]

  it('matches the shipped unverified example', () => {
    expect(JSON.parse(readFileSync(new URL('example-record.json', ledger), 'utf8'))).toEqual(demoRecord)
  })

  it.each(cases)('$id', (entry) => {
    const result = validateEvidence(loadCase(entry))
    if (entry.ok) {
      expect(result.issues).toEqual([])
      expect(result.ok).toBe(true)
      return
    }
    expect(result.ok).toBe(false)
    expect(result.issues.some((issue) => issue.message.includes(entry.match ?? ''))).toBe(true)
  })

  it('rejects text that is not JSON', () => {
    const result = validateEvidenceText('{')
    expect(result.ok).toBe(false)
    expect(result.issues[0]?.message).toMatch(/not valid JSON/)
  })

  it('does not carry a failure from one document into the next', () => {
    const bad = { ...demoRecord, publication_status: 'PUBLISHED', human_approval: null }
    const results = validateEvidenceDocuments([
      { name: 'bad.json', data: bad },
      { name: 'good.json', data: demoRecord },
    ])
    expect(results[0]?.result.ok).toBe(false)
    expect(results[1]?.result.ok).toBe(true)
    const reversed = validateEvidenceDocuments([
      { name: 'good.json', data: demoRecord },
      { name: 'bad.json', data: bad },
    ])
    expect(reversed[0]?.result.ok).toBe(true)
    expect(reversed[1]?.result.ok).toBe(false)
  })

  it('reads the published schema rules', () => {
    const schema = readFileSync(new URL('../../../public/schemas/evidence-ledger-v1.json', import.meta.url), 'utf8')
    expect(schema).toContain('human_approval')
    expect(schema).toContain('previous_statement')
    expect(schema).toContain('conflicting_evidence')
    expect(schema).toContain('javascript:')
  })
})
