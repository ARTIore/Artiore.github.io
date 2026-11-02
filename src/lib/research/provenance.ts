export type ProvenanceNode = {
  id: string
  type: 'claim' | 'correction' | 'source'
  label: string
}

export type ProvenanceEdge = {
  from: string
  to: string
  type: 'PROPOSED_CORRECTION_FOR' | 'CITES'
}

export type ProvenanceGraph = {
  nodes: ProvenanceNode[]
  edges: ProvenanceEdge[]
  missingSourceClaimIds: string[]
  unmatchedCorrectionIds: string[]
}

export function buildProvenance(
  claims: readonly { claim_id: string; sources?: readonly { url: string }[] }[],
  corrections: readonly { correction_id: string; claim_id: string }[],
): ProvenanceGraph {
  const nodes: ProvenanceNode[] = []
  const edges: ProvenanceEdge[] = []
  const sourceIds = new Map<string, string>()
  const claimIds = new Set(claims.map((claim) => claim.claim_id))
  for (const claim of claims) {
    nodes.push({ id: claim.claim_id, type: 'claim', label: claim.claim_id })
    for (const source of claim.sources ?? []) {
      let sourceId = sourceIds.get(source.url)
      if (!sourceId) {
        sourceId = `SRC-${String(sourceIds.size + 1).padStart(4, '0')}`
        sourceIds.set(source.url, sourceId)
        nodes.push({ id: sourceId, type: 'source', label: sourceId })
      }
      edges.push({ from: claim.claim_id, to: sourceId, type: 'CITES' })
    }
  }
  for (const correction of corrections) {
    nodes.push({ id: correction.correction_id, type: 'correction', label: correction.correction_id })
    edges.push({ from: correction.correction_id, to: correction.claim_id, type: 'PROPOSED_CORRECTION_FOR' })
  }
  return {
    nodes,
    edges,
    missingSourceClaimIds: claims.filter((claim) => (claim.sources ?? []).length === 0).map((claim) => claim.claim_id),
    unmatchedCorrectionIds: corrections.filter((correction) => !claimIds.has(correction.claim_id)).map((correction) => correction.correction_id),
  }
}
