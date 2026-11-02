import { describe, expect, it } from 'vitest'
import { demoRecord } from '../../content/safety/demo-record'
import { buildProvenance } from './provenance'
import { reviewRecords } from './review'

const opposite = {
  ...demoRecord,
  claim_id: 'ART-EVD-0002',
  statement: 'An unfamiliar Bluetooth device name proves unauthorized access to a phone.',
}

describe('research review helpers', () => {
  it('flags the illustrative pair as a possible wording conflict', () => {
    const flags = reviewRecords([demoRecord, opposite])
    const conflict = flags.find((flag) => flag.kind === 'Potential statement conflict')
    expect(conflict?.ids).toEqual(['ART-EVD-0001', 'ART-EVD-0002'])
    expect(conflict?.why.toLowerCase()).toContain('not proof')
  })

  it('does not call two similar sentences a conflict when neither is a not or a proves', () => {
    const flags = reviewRecords([
      { ...demoRecord, statement: 'A login alert can have more than one cause.' },
      { ...opposite, statement: 'A login alert can come from the account holder.' },
    ])
    expect(flags.some((flag) => flag.kind === 'Potential statement conflict')).toBe(false)
  })

  it('draws a correction as a request, and reports a missing claim', () => {
    const graph = buildProvenance([demoRecord], [
      { correction_id: 'ART-COR-0001', claim_id: 'ART-EVD-0001' },
      { correction_id: 'ART-COR-0002', claim_id: 'ART-EVD-4040' },
    ])
    expect(graph.edges).toContainEqual({
      from: 'ART-COR-0001',
      to: 'ART-EVD-0001',
      type: 'PROPOSED_CORRECTION_FOR',
    })
    expect(graph.unmatchedCorrectionIds).toEqual(['ART-COR-0002'])
    expect(graph.missingSourceClaimIds).toEqual(['ART-EVD-0001'])
  })
})