export const ARCHIVE_NOTE_DATE: string

export function barePath(path: string): string
export function discoverableEntries<T extends { path: string; sitemap?: boolean }>(entries: T[]): T[]
export function groupOf(entry: { path: string; kind?: string }): string
export function htmlToPlainText(html: string): string
export function isFeedEntry(entry: { path: string; kind?: string; sitemap?: boolean }): boolean
export function lastmodFor(entry: {
  path: string
  lastmod?: string
  datePublished?: string
}): string
export function renderLlmsTxt(
  entries: Array<{
    path: string
    description?: string
    headTitle?: string
    headline?: string
    crumbName?: string
    kind?: string
    inLanguage?: string
    dir?: string
    sitemap?: boolean
  }>,
  canonicalUrl: (path: string) => string,
): string
export function renderRss(
  entries: Array<{
    path: string
    description?: string
    headTitle?: string
    headline?: string
    kind?: string
    datePublished?: string
    sitemap?: boolean
  }>,
  canonicalUrl: (path: string) => string,
  lastmodOf: (entry: { path: string }) => string,
): string
export function renderSitemap(
  entries: Array<{
    path: string
    sitemap?: boolean
    alternates?: { hreflang: string; path: string }[]
  }>,
  canonicalUrl: (path: string) => string,
  lastmodOf: (entry: { path: string }) => string,
): string
