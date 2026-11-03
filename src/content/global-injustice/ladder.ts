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
      'The public sources opened for this edition agree on the point: a statute, a judgment, a regulator’s report, an official statistical release, or a forensic report named on the page.',
  },
  {
    rung: 'DOCUMENTED IN PART',
    meaning:
      'A real record exists, and this edition says which piece of it was opened. Named pieces are still missing, or the figure is an estimate, a survey, or a single source.',
  },
  {
    rung: 'CONTESTED',
    meaning:
      'Credible sources disagree, or one series moves one way while another series was not opened. Both readings that were checked are stated. A conflict is not averaged.',
  },
  {
    rung: 'OPEN',
    meaning:
      'This edition did not locate public evidence it could open. That is a statement about the search, not about whether an event happened. Each OPEN item says what would have to surface.',
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
