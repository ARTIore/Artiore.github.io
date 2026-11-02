/** Evidence Ledger v1 checks. Keep scripts/validate-evidence.py in step with this file. */

export const CLAIM_ID = /^ART-EVD-[0-9]{4,}$/
export const STATUSES = [
  'VERIFIED',
  'SUPPORTED_INFERENCE',
  'DISPUTED',
  'UNVERIFIED',
  'BELIEF_INTERPRETATION',
  'CORRECTED',
] as const
export const PUBLICATION_STATUSES = ['DRAFT', 'REVIEW', 'APPROVED', 'PUBLISHED', 'RETRACTED'] as const
export const SOURCE_TYPES = ['PRIMARY', 'SECONDARY', 'USER_REPORT', 'OTHER'] as const

const DATE_TIME =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(Z|[+-]\d{2}:\d{2})$/
const RECORD_KEYS = [
  'claim_id',
  'statement',
  'status',
  'sources',
  'scope',
  'limitations',
  'verification_method',
  'verified_at',
  'conflicting_evidence',
  'publication_status',
  'human_approval',
  'revision_history',
] as const
const REQUIRED_KEYS = [
  'claim_id',
  'statement',
  'status',
  'sources',
  'scope',
  'limitations',
  'publication_status',
  'revision_history',
] as const

export type EvidenceStatus = (typeof STATUSES)[number]
export type PublicationStatus = (typeof PUBLICATION_STATUSES)[number]

export type ValidationIssue = {
  path: string
  message: string
}

export type ValidationResult = {
  ok: boolean
  issues: ValidationIssue[]
}

export function isDateTime(value: string) {
  const match = DATE_TIME.exec(value)
  if (!match) return false
  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  const hour = Number(match[4])
  const minute = Number(match[5])
  const second = Number(match[6])
  if (month < 1 || month > 12 || hour > 23 || minute > 59 || second > 60) return false
  const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate()
  if (day < 1 || day > lastDay) return false
  if (match[8] !== 'Z') {
    const offsetHour = Number(match[8].slice(1, 3))
    const offsetMinute = Number(match[8].slice(4, 6))
    if (offsetHour > 23 || offsetMinute > 59) return false
  }
  return true
}

function hasControlCharacter(value: string) {
  for (let index = 0; index < value.length; index += 1) {
    const code = value.charCodeAt(index)
    if (code <= 31 || code === 127) return true
  }
  return false
}

export function isSafeHttpUrl(value: string) {
  if (value !== value.trim() || hasControlCharacter(value)) return false
  try {
    const url = new URL(value)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false
    if (url.username || url.password) return false
    return url.hostname.length > 0
  } catch {
    return false
  }
}

function issue(issues: ValidationIssue[], path: string, message: string) {
  issues.push({ path, message })
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function nonEmpty(value: unknown) {
  return typeof value === 'string' && value.trim().length > 0
}

function checkDate(issues: ValidationIssue[], path: string, value: unknown) {
  if (typeof value !== 'string' || !isDateTime(value)) {
    issue(issues, path, 'Enter a real date and time with a timezone, such as 2026-11-02T16:00:00Z.')
  }
}

function checkUrl(issues: ValidationIssue[], path: string, value: unknown) {
  if (typeof value !== 'string' || !isSafeHttpUrl(value)) {
    issue(issues, path, 'Only ordinary web links (http or https) are allowed.')
  }
}

function checkSource(issues: ValidationIssue[], path: string, value: unknown) {
  if (!isObject(value)) {
    issue(issues, path, 'Each source must be an object.')
    return
  }
  for (const key of Object.keys(value)) {
    if (!['url', 'source_type', 'accessed_at', 'archived_url', 'note'].includes(key)) {
      issue(issues, `${path}/${key}`, 'This source field is not part of the record.')
    }
  }
  checkUrl(issues, `${path}/url`, value.url)
  if (!SOURCE_TYPES.includes(value.source_type as (typeof SOURCE_TYPES)[number])) {
    issue(issues, `${path}/source_type`, 'Source type must be PRIMARY, SECONDARY, USER_REPORT, or OTHER.')
  }
  checkDate(issues, `${path}/accessed_at`, value.accessed_at)
  if ('archived_url' in value && value.archived_url !== null) checkUrl(issues, `${path}/archived_url`, value.archived_url)
  if ('note' in value && typeof value.note !== 'string') issue(issues, `${path}/note`, 'A source note must be text.')
}

function checkConflict(issues: ValidationIssue[], path: string, value: unknown) {
  if (!isObject(value)) {
    issue(issues, path, 'Each conflicting item must be an object with a statement.')
    return
  }
  for (const key of Object.keys(value)) {
    if (key !== 'statement' && key !== 'source_url') issue(issues, `${path}/${key}`, 'This conflict field is not part of the record.')
  }
  if (!nonEmpty(value.statement)) issue(issues, `${path}/statement`, 'Conflicting evidence needs a statement.')
  if ('source_url' in value && value.source_url !== null) checkUrl(issues, `${path}/source_url`, value.source_url)
}

function checkRevision(issues: ValidationIssue[], path: string, value: unknown) {
  if (!isObject(value)) {
    issue(issues, path, 'Each revision must be an object.')
    return
  }
  for (const key of Object.keys(value)) {
    if (!['timestamp', 'summary', 'previous_statement', 'previous_claim_id'].includes(key)) {
      issue(issues, `${path}/${key}`, 'This revision field is not part of the record.')
    }
  }
  checkDate(issues, `${path}/timestamp`, value.timestamp)
  if (!nonEmpty(value.summary)) issue(issues, `${path}/summary`, 'Each revision needs a short summary.')
  if (!nonEmpty(value.previous_statement)) {
    issue(issues, `${path}/previous_statement`, 'Each revision must keep the previous wording.')
  }
  if ('previous_claim_id' in value && (typeof value.previous_claim_id !== 'string' || !CLAIM_ID.test(value.previous_claim_id))) {
    issue(issues, `${path}/previous_claim_id`, 'A previous claim id must look like ART-EVD-0001.')
  }
}

function checkApproval(issues: ValidationIssue[], path: string, value: unknown, required: boolean) {
  if (value === null || value === undefined) {
    if (required) issue(issues, path, 'Human approval is required before a record is approved or published.')
    return
  }
  if (!isObject(value)) {
    issue(issues, path, 'Human approval must name a person, a time, and the action they took.')
    return
  }
  for (const key of Object.keys(value)) {
    if (!['approver', 'approved_at', 'action'].includes(key)) {
      issue(issues, `${path}/${key}`, 'This approval field is not part of the record.')
    }
  }
  if (!nonEmpty(value.approver) || !nonEmpty(value.action)) {
    issue(issues, path, 'Human approval must name a person, a time, and the action they took.')
  }
  checkDate(issues, `${path}/approved_at`, value.approved_at)
}

function checkRecord(issues: ValidationIssue[], path: string, value: unknown) {
  if (!isObject(value)) {
    issue(issues, path, 'Each record must be an object.')
    return
  }
  for (const key of Object.keys(value)) {
    if (!RECORD_KEYS.includes(key as (typeof RECORD_KEYS)[number])) {
      issue(issues, `${path}/${key}`, 'This field is not part of the record.')
    }
  }
  for (const key of REQUIRED_KEYS) {
    if (!(key in value)) issue(issues, `${path}/${key}`, 'This field is required.')
  }
  if (typeof value.claim_id !== 'string' || !CLAIM_ID.test(value.claim_id)) {
    issue(issues, `${path}/claim_id`, 'Claim id must look like ART-EVD-0001.')
  }
  if (!nonEmpty(value.statement)) issue(issues, `${path}/statement`, 'The statement cannot be empty.')
  if (!STATUSES.includes(value.status as EvidenceStatus)) {
    issue(issues, `${path}/status`, 'Status is not one of the evidence labels.')
  }
  if (!nonEmpty(value.scope)) issue(issues, `${path}/scope`, 'Scope cannot be empty.')
  if (!PUBLICATION_STATUSES.includes(value.publication_status as PublicationStatus)) {
    issue(issues, `${path}/publication_status`, 'Publication status is not a known state.')
  }
  if (!Array.isArray(value.sources)) issue(issues, `${path}/sources`, 'Sources must be a list.')
  else value.sources.forEach((source, index) => checkSource(issues, `${path}/sources/${index}`, source))
  if (!Array.isArray(value.limitations)) issue(issues, `${path}/limitations`, 'Limitations must be a list.')
  else {
    value.limitations.forEach((item, index) => {
      if (!nonEmpty(item)) issue(issues, `${path}/limitations/${index}`, 'A limitation cannot be empty.')
    })
  }
  if ('verification_method' in value && value.verification_method !== null && typeof value.verification_method !== 'string') {
    issue(issues, `${path}/verification_method`, 'Verification method must be text or null.')
  }
  if ('verified_at' in value && value.verified_at !== null) checkDate(issues, `${path}/verified_at`, value.verified_at)
  if ('conflicting_evidence' in value) {
    if (!Array.isArray(value.conflicting_evidence)) issue(issues, `${path}/conflicting_evidence`, 'Conflicting evidence must be a list.')
    else value.conflicting_evidence.forEach((item, index) => checkConflict(issues, `${path}/conflicting_evidence/${index}`, item))
  }
  if (!Array.isArray(value.revision_history)) issue(issues, `${path}/revision_history`, 'Revision history must be a list.')
  else value.revision_history.forEach((item, index) => checkRevision(issues, `${path}/revision_history/${index}`, item))

  const published = value.publication_status === 'APPROVED' || value.publication_status === 'PUBLISHED'
  if ('human_approval' in value || published) checkApproval(issues, `${path}/human_approval`, value.human_approval, published)

  if (value.status === 'VERIFIED') {
    if (!nonEmpty(value.verification_method)) {
      issue(issues, `${path}/verification_method`, 'A verified record needs a verification method.')
    }
    if (typeof value.verified_at !== 'string') {
      issue(issues, `${path}/verified_at`, 'A verified record needs a verified_at date.')
    }
    if (!Array.isArray(value.sources) || value.sources.length < 1) {
      issue(issues, `${path}/sources`, 'A verified record needs at least one source.')
    }
  }
  if (value.status === 'CORRECTED' && (!Array.isArray(value.revision_history) || value.revision_history.length < 1)) {
    issue(issues, `${path}/revision_history`, 'A corrected record needs revision history.')
  }
  if (
    value.status === 'DISPUTED' &&
    (!Array.isArray(value.conflicting_evidence) || value.conflicting_evidence.length < 1)
  ) {
    issue(issues, `${path}/conflicting_evidence`, 'A disputed record needs conflicting evidence.')
  }
}

export function validateEvidence(data: unknown): ValidationResult {
  const issues: ValidationIssue[] = []
  if (Array.isArray(data)) {
    if (data.length < 1 || data.length > 2000) {
      issue(issues, '', 'Provide one record, or a list of 1 to 2000 records.')
    }
    const seen = new Set<string>()
    data.forEach((record, index) => {
      checkRecord(issues, `/${index}`, record)
      if (isObject(record) && typeof record.claim_id === 'string') {
        if (seen.has(record.claim_id)) issue(issues, `/${index}/claim_id`, `Duplicate claim id ${record.claim_id}.`)
        seen.add(record.claim_id)
      }
    })
  } else {
    checkRecord(issues, '', data)
  }
  return { ok: issues.length === 0, issues }
}

export function validateEvidenceText(text: string): ValidationResult {
  try {
    return validateEvidence(JSON.parse(text) as unknown)
  } catch {
    return { ok: false, issues: [{ path: '', message: 'The file is not valid JSON.' }] }
  }
}

/** Each document is checked on its own. A failure in one does not change the next result. */
export function validateEvidenceDocuments(documents: { name: string; data: unknown }[]) {
  return documents.map((document) => ({
    name: document.name,
    result: validateEvidence(document.data),
  }))
}
