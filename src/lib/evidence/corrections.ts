import { CLAIM_ID, isDateTime, isSafeHttpUrl, type ValidationIssue, type ValidationResult } from './validate'

export const SCHEMA_VERSION = '1.1'
export const CORRECTION_ID = /^ART-COR-[0-9]{4,}$/
export const CORRECTION_STATUSES = [
  'SUBMITTED_DRAFT',
  'UNDER_REVIEW',
  'NEEDS_EVIDENCE',
  'ACCEPTED',
  'DECLINED',
  'PUBLISHED',
  'WITHDRAWN',
] as const

const CORRECTION_KEYS = [
  'correction_id',
  'claim_id',
  'original_statement',
  'proposed_statement',
  'reason',
  'evidence_urls',
  'status',
  'submitted_at',
  'reviewed_at',
  'reviewer',
  'decision_reason',
  'publication_authorization',
  'revision_history',
  'public_note',
] as const

/** A file can contain these words. They are never treated as proof of approval. */
export const FILE_STATUS_IS_NOT_APPROVAL =
  'A status or approval object in a file is not proof. This site did not check that a person approved it.'

export function fileClaimsAuthority(status: string) {
  return status === 'PUBLISHED' || status === 'APPROVED' || status === 'ACCEPTED'
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

function checkAuthorization(issues: ValidationIssue[], path: string, value: unknown, required: boolean) {
  if (value === null || value === undefined) {
    if (required) issue(issues, path, 'A published or accepted correction must name who authorized it.')
    return
  }
  if (!isObject(value)) {
    issue(issues, path, 'A published or accepted correction must name who authorized it.')
    return
  }
  for (const key of Object.keys(value)) {
    if (!['approver', 'approved_at', 'action'].includes(key)) {
      issue(issues, `${path}/${key}`, 'This approval field is not part of the record.')
    }
  }
  if (!nonEmpty(value.approver) || !nonEmpty(value.action)) {
    issue(issues, path, 'A published or accepted correction must name who authorized it.')
  }
  checkDate(issues, `${path}/approved_at`, value.approved_at)
}

export function checkCorrection(issues: ValidationIssue[], path: string, value: unknown) {
  if (!isObject(value)) {
    issue(issues, path, 'Each correction must be an object.')
    return
  }
  for (const key of Object.keys(value)) {
    if (!CORRECTION_KEYS.includes(key as (typeof CORRECTION_KEYS)[number])) {
      issue(issues, `${path}/${key}`, 'This field is not part of the correction.')
    }
  }
  for (const key of ['correction_id', 'claim_id', 'original_statement', 'proposed_statement', 'reason', 'evidence_urls', 'status', 'revision_history'] as const) {
    if (!(key in value)) issue(issues, `${path}/${key}`, 'This field is required.')
  }
  if (typeof value.correction_id !== 'string' || !CORRECTION_ID.test(value.correction_id)) {
    issue(issues, `${path}/correction_id`, 'Correction id must look like ART-COR-0001.')
  }
  if (typeof value.claim_id !== 'string' || !CLAIM_ID.test(value.claim_id)) {
    issue(issues, `${path}/claim_id`, 'Claim id must look like ART-EVD-0001.')
  }
  if (!nonEmpty(value.original_statement)) issue(issues, `${path}/original_statement`, 'The original statement cannot be empty.')
  if (!nonEmpty(value.proposed_statement)) issue(issues, `${path}/proposed_statement`, 'The proposed statement cannot be empty.')
  if (!nonEmpty(value.reason)) issue(issues, `${path}/reason`, 'The reason cannot be empty.')
  if (!Array.isArray(value.evidence_urls)) issue(issues, `${path}/evidence_urls`, 'Supporting links must be a list.')
  else value.evidence_urls.forEach((url, index) => checkUrl(issues, `${path}/evidence_urls/${index}`, url))
  if (!CORRECTION_STATUSES.includes(value.status as (typeof CORRECTION_STATUSES)[number])) {
    issue(issues, `${path}/status`, 'Correction status is not a known state.')
  }
  if ('submitted_at' in value && value.submitted_at !== null) checkDate(issues, `${path}/submitted_at`, value.submitted_at)
  if ('reviewed_at' in value && value.reviewed_at !== null) checkDate(issues, `${path}/reviewed_at`, value.reviewed_at)
  if ('reviewer' in value && value.reviewer !== null && typeof value.reviewer !== 'string') {
    issue(issues, `${path}/reviewer`, 'Reviewer must be text or null.')
  }
  if ('decision_reason' in value && value.decision_reason !== null && typeof value.decision_reason !== 'string') {
    issue(issues, `${path}/decision_reason`, 'Decision reason must be text or null.')
  }
  if ('public_note' in value && typeof value.public_note !== 'string') {
    issue(issues, `${path}/public_note`, 'The public note must be text.')
  }
  if (!Array.isArray(value.revision_history)) issue(issues, `${path}/revision_history`, 'Revision history must be a list.')
  else value.revision_history.forEach((item, index) => checkRevision(issues, `${path}/revision_history/${index}`, item))
  const needsAuthorization = value.status === 'ACCEPTED' || value.status === 'PUBLISHED'
  if ('publication_authorization' in value || needsAuthorization) {
    checkAuthorization(issues, `${path}/publication_authorization`, value.publication_authorization, needsAuthorization)
  }
}

export function validateCorrectionDocument(data: unknown): ValidationResult {
  const issues: ValidationIssue[] = []
  const list = Array.isArray(data) ? data : [data]
  if (!Array.isArray(data)) {
    checkCorrection(issues, '', data)
    return { ok: issues.length === 0, issues }
  }
  if (list.length < 1 || list.length > 2000) {
    issue(issues, '', 'Provide one correction, or a list of 1 to 2000 corrections.')
  }
  const seen = new Set<string>()
  list.forEach((record, index) => {
    checkCorrection(issues, `/${index}`, record)
    if (isObject(record) && typeof record.correction_id === 'string') {
      if (seen.has(record.correction_id)) {
        issue(issues, `/${index}/correction_id`, `Duplicate correction id ${record.correction_id}.`)
      }
      seen.add(record.correction_id)
    }
  })
  return { ok: issues.length === 0, issues }
}

export function isExchange(data: unknown): data is Record<string, unknown> {
  return isObject(data) && 'schema_version' in data && 'claims' in data && 'corrections' in data
}

export function isCorrectionDocument(data: unknown) {
  if (isObject(data)) return 'correction_id' in data
  return Array.isArray(data) && data.length > 0 && data.every((item) => isObject(item) && 'correction_id' in item)
}

export function unmatchedCorrections(claims: { claim_id?: string }[], corrections: { claim_id?: string; correction_id?: string }[]) {
  const ids = new Set(claims.map((claim) => claim.claim_id).filter((id): id is string => typeof id === 'string'))
  return corrections.filter((correction) => typeof correction.claim_id === 'string' && !ids.has(correction.claim_id))
}
