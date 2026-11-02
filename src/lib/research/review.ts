export type ReviewFlag = {
  kind: string
  level: 'High' | 'Medium' | 'Review'
  ids: string[]
  why: string
  next: string
}

export type ReviewRecord = {
  claim_id: string
  statement: string
  status: string
  sources?: readonly { url?: string }[]
  scope?: string | null
  verification_method?: string | null
  verified_at?: string | null
  conflicting_evidence?: readonly unknown[]
  revision_history?: readonly unknown[]
  publication_status?: string
  human_approval?: unknown
}

const STOP = new Set(
  'the and but with this that from into about their there they have will your when what where which under over only does not for are was were been being each both some any all its our can may could would should alone itself device devices phone phones claim claims evidence example educational record records'.split(
    ' ',
  ),
)

export function statementTokens(statement: string) {
  const words = statement.toLowerCase().match(/[a-z0-9]+/g) ?? []
  return new Set(words.filter((word) => word.length >= 4 && !STOP.has(word)))
}

export function polarity(statement: string): 'negative' | 'strong-positive' | 'other' {
  const text = statement.toLowerCase()
  if (/\b(no|not|never|cannot|doesn't|isn't|without|insufficient|fails)\b/.test(text)) return 'negative'
  if (/\b(proves?|always|definitely|establishes?|confirms?|necessarily)\b/.test(text)) return 'strong-positive'
  return 'other'
}

export function overlapScore(left: string, right: string) {
  const leftTokens = statementTokens(left)
  const rightTokens = statementTokens(right)
  let shared = 0
  for (const token of leftTokens) {
    if (rightTokens.has(token)) shared += 1
  }
  return shared / Math.max(1, Math.min(leftTokens.size, rightTokens.size))
}

function sourceUrl(source: { url?: string }) {
  return typeof source.url === 'string' ? source.url : ''
}

function httpUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

/** Word-overlap flags for a person to review. Not a verdict, and not a full schema check. */
export function reviewRecords(records: readonly ReviewRecord[]): ReviewFlag[] {
  const flags: ReviewFlag[] = []
  for (const record of records) {
    const id = record.claim_id
    if (record.status === 'VERIFIED' && (!record.verification_method || !record.verified_at || !record.sources?.length)) {
      flags.push({
        kind: 'Verification gap',
        level: 'High',
        ids: [id],
        why: 'The file says verified, but it has no method, date, or source.',
        next: 'Do not treat the label as proof. Ask for a dated check and a source, or change the label.',
      })
    }
    if ((record.status === 'VERIFIED' || record.status === 'SUPPORTED_INFERENCE') && !record.sources?.length) {
      flags.push({
        kind: 'Missing sources',
        level: 'High',
        ids: [id],
        why: 'The file uses an evidence label and lists no sources.',
        next: 'Add a source a person can open, or change the label.',
      })
    }
    if (record.status === 'DISPUTED' && !record.conflicting_evidence?.length) {
      flags.push({
        kind: 'Unrecorded disagreement',
        level: 'Medium',
        ids: [id],
        why: 'The file says disputed and does not record the other evidence.',
        next: 'Write the competing evidence and what it applies to.',
      })
    }
    if (record.status === 'CORRECTED' && !record.revision_history?.length) {
      flags.push({
        kind: 'Missing revision trail',
        level: 'High',
        ids: [id],
        why: 'The file says corrected and does not keep the earlier wording.',
        next: 'Keep the old sentence, the date, and the reason for the change.',
      })
    }
    if (record.publication_status === 'PUBLISHED' && !record.human_approval) {
      flags.push({
        kind: 'Authorization gap',
        level: 'High',
        ids: [id],
        why: 'The file says published and does not name a person who approved it.',
        next: 'A word in a file is not approval. Check that outside this page.',
      })
    }
    if (!record.scope?.trim()) {
      flags.push({
        kind: 'Missing scope',
        level: 'Medium',
        ids: [id],
        why: 'The claim does not say what it covers.',
        next: 'Say who, what, and when the sentence is about.',
      })
    }
    for (const source of record.sources ?? []) {
      if (!httpUrl(sourceUrl(source))) {
        flags.push({
          kind: 'Malformed source URL',
          level: 'Medium',
          ids: [id],
          why: 'A source link is missing or is not an ordinary web address.',
          next: 'Replace it with an http or https link, or remove it.',
        })
      }
    }
  }
  for (let left = 0; left < records.length; left += 1) {
    for (let right = left + 1; right < records.length; right += 1) {
      const first = records[left]
      const second = records[right]
      if (!first || !second) continue
      const score = overlapScore(first.statement, second.statement)
      const firstPolarity = polarity(first.statement)
      const secondPolarity = polarity(second.statement)
      if (score >= 0.48 && firstPolarity !== secondPolarity && firstPolarity !== 'other' && secondPolarity !== 'other') {
        flags.push({
          kind: 'Potential statement conflict',
          level: 'Review',
          ids: [first.claim_id, second.claim_id],
          why: `These sentences share words and differ in a “not” or a “proves” cue (about ${Math.round(score * 100)}% of the shorter word list). That is not proof they contradict.`,
          next: 'Compare the scope, the date, and the sources yourself.',
        })
      }
    }
  }
  return flags
}
