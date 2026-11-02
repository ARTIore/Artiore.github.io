/** Unverified sample. Not a finding about a real device or incident. */
export const demoRecord = {
  claim_id: 'ART-EVD-0001',
  statement: 'An unfamiliar Bluetooth device name, by itself, does not establish unauthorized access to a phone.',
  status: 'UNVERIFIED',
  sources: [],
  scope: 'Educational example; no specific device or incident assessed',
  limitations: [
    'No source validation performed for this sample record',
    'No device forensics performed',
  ],
  verification_method: null,
  verified_at: null,
  conflicting_evidence: [],
  publication_status: 'DRAFT',
  human_approval: null,
  revision_history: [],
} as const

export const demoRecords = [demoRecord] as const
