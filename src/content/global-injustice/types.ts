import type { LadderRung } from './ladder'

export type InjusticeSource = {
  id: string
  publisher: string
  title: string
  url: string
  accessed: '2026-11-03'
}

export type RecordBlock = {
  rung: LadderRung
  text: string
  sourceIds: string[]
}

export type HeldBack = {
  /** What the desk report said, kept here only as an unverified item. */
  deskClaim: string
  disposition: 'removed' | 'could not access' | 'replaced'
  detail: string
}

export type InjusticePage = {
  id: string
  slug: string
  path: string
  /** Visible h1. */
  title: string
  headTitle: string
  description: string
  crumbName: string
  kicker: string
  /** Short line for the hub table. */
  finding: string
  findingRung: LadderRung
  lead: string
  record: RecordBlock[]
  caseFor: string
  caseAgainst: string
  stillOpen: string[]
  nextSources: string[]
  falsifier: string
  confidence: string
  heldBack: HeldBack[]
  sourceIds: string[]
}
