import { demoRecord } from '../safety/demo-record'

export const illustrativeLabel = 'Illustrative and unverified. Not a finding, and not approved.'

export const oppositeClaim = {
  ...demoRecord,
  claim_id: 'ART-EVD-0002',
  statement: 'An unfamiliar Bluetooth device name proves unauthorized access to a phone.',
  scope: 'Educational demonstration; no incident assessed',
  limitations: ['Fictional contradictory example'],
}

export const illustrativeClaims = [demoRecord, oppositeClaim]

export const illustrativeCorrection = {
  correction_id: 'ART-COR-0001',
  claim_id: 'ART-EVD-0001',
  original_statement: demoRecord.statement,
  proposed_statement:
    'Example correction request: clarify the conditions under which Bluetooth discovery is relevant to an investigation.',
  reason: 'Illustrative request only; no factual error established.',
  evidence_urls: [] as string[],
  status: 'SUBMITTED_DRAFT',
  submitted_at: null,
  reviewed_at: null,
  reviewer: null,
  decision_reason: null,
  publication_authorization: null,
  revision_history: [] as { timestamp: string; summary: string; previous_statement: string }[],
  public_note: 'DEMONSTRATION RECORD — not submitted, verified, approved, or published.',
}

export const illustrativeExchange = {
  schema_version: '1.1',
  label: 'DEMONSTRATION ONLY — not verified, approved or published',
  claims: [demoRecord],
  corrections: [illustrativeCorrection],
}

/** The prototype loaded this as a verified claim. The schema rejects it. */
export const rejectedVerifiedSample = {
  claim_id: 'ART-EVD-0003',
  statement: 'A suspicious login alert alone does not establish device compromise.',
  status: 'VERIFIED',
  sources: [],
  scope: 'Educational demonstration',
  limitations: ['No evidence or verification recorded'],
  verification_method: null,
  verified_at: null,
  conflicting_evidence: [],
  publication_status: 'DRAFT',
  human_approval: null,
  revision_history: [],
}

export const correctionStatusLabel: Record<string, string> = {
  SUBMITTED_DRAFT: 'Draft on this device',
  UNDER_REVIEW: 'Waiting for a person',
  NEEDS_EVIDENCE: 'Needs a source',
  ACCEPTED: 'File says accepted',
  DECLINED: 'File says declined',
  PUBLISHED: 'File says published',
  WITHDRAWN: 'Withdrawn in the file',
}

export const claimStatusLabel: Record<string, string> = {
  VERIFIED: 'Verified',
  SUPPORTED_INFERENCE: 'Supported inference',
  DISPUTED: 'Disputed',
  UNVERIFIED: 'Unverified',
  BELIEF_INTERPRETATION: 'Belief or interpretation',
  CORRECTED: 'Corrected',
}
