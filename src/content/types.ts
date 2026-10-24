export type ActionLink = {
  label: string
  href: string
}

export type Card = {
  eyebrow?: string
  title: string
  body: string
}

export type Block =
  | { kind: 'paragraphs'; text: string[] }
  | { kind: 'heading'; text: string; level?: 2 | 3 }
  | { kind: 'cards'; items: Card[] }
  | { kind: 'list'; title?: string; items: string[] }
  | { kind: 'quote'; text: string; cite?: string }
  | { kind: 'actions'; items: ActionLink[] }
  | { kind: 'note'; text: string }
  | { kind: 'numbered'; items: { label: string; title: string; body: string }[] }
  | { kind: 'split'; leftTitle: string; left: string[]; rightTitle: string; right: string[] }

export type PageMeta = {
  path: string
  headTitle: string
  description: string
  sitemap?: boolean
}

export type PageDocument = PageMeta & {
  eyebrow: string
  title: string
  lead: string
  blocks: Block[]
  noindex?: boolean
  /** Set only when the page names an author. */
  author?: string
  /** ISO date, set only when the page states a publication date. */
  published?: string
}

export type SeoKind = 'home' | 'page' | 'blog-post' | 'engine' | 'article'

export type SeoEntry = PageMeta & {
  prerender?: boolean
  /** Present on the live domain, not emitted by this build. */
  external?: boolean
  noindex?: boolean
  kind?: SeoKind
  crumbName?: string
  headline?: string
  author?: string
  /** Named with the person when the byline is a person and an organization. */
  authorOrganization?: string
  datePublished?: string
}
