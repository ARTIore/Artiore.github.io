import { isCorrectionDocument, isExchange, SCHEMA_VERSION, validateCorrectionDocument } from './corrections'
import { validateEvidence, type ValidationIssue, type ValidationResult } from './validate'

export type LedgerKind = 'evidence' | 'corrections' | 'exchange'

export type LedgerResult = ValidationResult & {
  kind: LedgerKind
  warnings: ValidationIssue[]
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function prefix(result: ValidationResult, head: string): ValidationIssue[] {
  return result.issues.map((item) => ({
    ...item,
    path: `${head}${item.path}`,
  }))
}

export function validateExchange(data: unknown): LedgerResult {
  const issues: ValidationIssue[] = []
  const warnings: ValidationIssue[] = []
  if (!isObject(data)) {
    return { ok: false, kind: 'exchange', issues: [{ path: '', message: 'An exchange file must be an object.' }], warnings }
  }
  for (const key of Object.keys(data)) {
    if (!['schema_version', 'claims', 'corrections', 'label'].includes(key)) {
      issues.push({ path: `/${key}`, message: 'This field is not part of the exchange file.' })
    }
  }
  if (data.schema_version !== SCHEMA_VERSION) {
    issues.push({
      path: '/schema_version',
      message: `This file must say schema_version ${SCHEMA_VERSION}. Version 1.0 is not checked here.`,
    })
  }
  if ('label' in data && typeof data.label !== 'string') {
    issues.push({ path: '/label', message: 'The label must be text.' })
  }
  const claims = data.claims
  const corrections = data.corrections
  if (!Array.isArray(claims) || claims.length > 2000) {
    issues.push({ path: '/claims', message: 'Claims must be a list of at most 2000 records.' })
  } else if (claims.length > 0) {
    issues.push(...prefix(validateEvidence(claims), '/claims'))
  }
  if (!Array.isArray(corrections) || corrections.length > 2000) {
    issues.push({ path: '/corrections', message: 'Corrections must be a list of at most 2000 records.' })
  } else if (corrections.length > 0) {
    const correctionResult = validateCorrectionDocument(corrections)
    issues.push(...prefix(correctionResult, '/corrections'))
  }
  if (Array.isArray(claims) && Array.isArray(corrections)) {
    const ids = new Set(
      claims
        .filter((claim) => isObject(claim) && typeof claim.claim_id === 'string')
        .map((claim) => (claim as { claim_id: string }).claim_id),
    )
    corrections.forEach((correction, index) => {
      if (!isObject(correction) || typeof correction.claim_id !== 'string') return
      if (!ids.has(correction.claim_id)) {
        warnings.push({
          path: `/corrections/${index}/claim_id`,
          message: `Correction points at ${correction.claim_id}, which is not in this file.`,
        })
      }
    })
  }
  return { ok: issues.length === 0, kind: 'exchange', issues, warnings }
}

export function validateLedgerDocument(data: unknown): LedgerResult {
  if (isExchange(data)) return validateExchange(data)
  if (isCorrectionDocument(data)) {
    const result = validateCorrectionDocument(data)
    return { ...result, kind: 'corrections', warnings: [] }
  }
  if (Array.isArray(data) && data.some((item) => isObject(item) && 'correction_id' in item)) {
    return {
      ok: false,
      kind: 'evidence',
      warnings: [],
      issues: [{ path: '', message: 'Do not mix claims and corrections in one list. Use an exchange file.' }],
    }
  }
  return { ...validateEvidence(data), kind: 'evidence', warnings: [] }
}

export function interpretLedger(data: unknown) {
  const result = validateLedgerDocument(data)
  if (!result.ok) return { ...result, claims: undefined, corrections: undefined }
  if (result.kind === 'exchange' && isExchange(data)) {
    return { ...result, claims: data.claims, corrections: data.corrections }
  }
  if (result.kind === 'corrections') {
    return { ...result, claims: undefined, corrections: Array.isArray(data) ? data : [data] }
  }
  return { ...result, claims: Array.isArray(data) ? data : [data], corrections: undefined }
}

export function validateLedgerText(text: string): LedgerResult {
  try {
    return validateLedgerDocument(JSON.parse(text) as unknown)
  } catch {
    return { ok: false, kind: 'evidence', warnings: [], issues: [{ path: '', message: 'The file is not valid JSON.' }] }
  }
}
