export type FieldManualBlock =
  | { type: 'h2'; id: string; text: string }
  | { type: 'h3'; id: string; text: string }
  | { type: 'p'; text: string; callout?: boolean }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'checklist'; items: string[] }
  | { type: 'paths'; intro: string; items: { title: string; body: string }[] }
  | { type: 'table'; caption: string; headers: string[]; rows: string[][] }
  | { type: 'region'; id: string; kicker: string; title: string; subtitle: string }
  | { type: 'quote'; paragraphs: string[] }

export type FieldManualTocItem = {
  id: string
  label: string
  children?: { id: string; label: string }[]
}

export type FieldManualContent = {
  code: string
  lang: string
  dir: 'ltr' | 'rtl'
  path: string
  headTitle: string
  description: string
  crumbName: string
  title: string
  byline: string
  dateLabel: string
  datePublished: string
  tagline: string
  disclaimers: string[]
  /** Shown on translations. Absent on the English original. */
  translationNotice?: string
  toc: FieldManualTocItem[]
  blocks: FieldManualBlock[]
}

export type FieldManualLanguage = {
  code: string
  label: string
  nativeLabel: string
  dir: 'ltr' | 'rtl'
  path: string
  available: boolean
}
