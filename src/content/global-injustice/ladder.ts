/**
 * Evidence ladder for the Global Injustice Investigation.
 *
 * These four rungs are this investigation's own vocabulary.
 * They are not the record statuses Verified / Unverified.
 * They are not the Digital Exposure grades Confirmed / Demonstrated / Plausible / Unsupported.
 * ESTABLISHED does not mean Verified, and it does not mean Confirmed.
 */

export const ladderRungs = [
  'ESTABLISHED',
  'DOCUMENTED IN PART',
  'CONTESTED',
  'OPEN',
] as const

export type LadderRung = (typeof ladderRungs)[number]

export const ladderDefinitions: { rung: LadderRung; meaning: string }[] = [
  {
    rung: 'ESTABLISHED',
    meaning:
      'Supported, within the stated scope, by a court, admitted facts, independently checked technical evidence, or a primary finding strong enough for that scope. One authoritative record can establish what that institution found. It is not treated as independent replication.',
  },
  {
    rung: 'DOCUMENTED IN PART',
    meaning:
      'The opened evidence supports part of the claim. Material gaps remain, or the figure is an estimate, a survey, a rating, or a single program.',
  },
  {
    rung: 'CONTESTED',
    meaning:
      'Competing findings or interpretations stay visible. A conflict is not averaged, and one series is not used to cancel another.',
  },
  {
    rung: 'OPEN',
    meaning:
      'The record reviewed here does not resolve the question. That is a statement about the search, not a finding that nothing happened.',
  },
]

/** Desk confidence is a separate line from the ladder, and from both other site vocabularies. */
export const confidenceDefinitions = [
  {
    level: 'HIGH',
    meaning: 'The opened sources carry the stated finding without a missing count doing the work.',
  },
  {
    level: 'MEDIUM',
    meaning: 'The mechanism or the case is in the opened record. A generalisation or a causal step is not.',
  },
  {
    level: 'LOW',
    meaning: 'A single global total, rate, or intent reading would go beyond the sources opened here.',
  },
] as const
