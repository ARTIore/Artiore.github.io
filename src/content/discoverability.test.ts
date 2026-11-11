import { describe, expect, it } from 'vitest'
import {
  ARCHIVE_NOTE_DATE,
  barePath,
  discoverableEntries,
  groupOf,
  htmlToPlainText,
  isFeedEntry,
  omitReaderComments,
  lastmodFor,
  renderLlmsTxt,
  renderRss,
  renderSitemap,
} from '../../scripts/discoverability.mjs'

const entries = [
  { path: '/', description: 'Home description.', headTitle: 'Home', kind: 'home', inLanguage: 'en', sitemap: true },
  {
    path: '/api-documentation',
    description: 'There is no public API.',
    headTitle: 'API',
    kind: 'page',
    sitemap: false,
  },
  {
    path: '/blog/every-tap-on-allow',
    description: 'A permissions note.',
    headline: 'Every tap',
    headTitle: 'Every tap | ARTIore',
    kind: 'blog-post',
    datePublished: '2026-11-08',
    sitemap: true,
  },
  {
    path: '/investigations/digital-exposure/dns-hijacking-explained',
    description: 'How DNS can be changed.',
    headline: 'DNS',
    headTitle: 'DNS | ARTIore',
    kind: 'article',
    datePublished: '2026-10-26',
    inLanguage: 'en',
    sitemap: true,
    alternates: [
      { hreflang: 'en', path: '/investigations/digital-exposure/dns-hijacking-explained' },
      { hreflang: 'ar', path: '/investigations/digital-exposure/ar/dns-hijacking-explained' },
      { hreflang: 'x-default', path: '/investigations/digital-exposure/dns-hijacking-explained' },
    ],
  },
  {
    path: '/academy',
    description: 'Lessons.',
    headTitle: 'Academy',
    kind: 'page',
    sitemap: true,
  },
]

const url = (path: string) => `https://artiore.com${path === '/' ? '/' : `${barePath(path)}/`}`

describe('discoverability files', () => {
  it('groups pages and leaves the API stub out of llms.txt', () => {
    const text = renderLlmsTxt(entries, url)
    expect(text).toContain('## Investigations')
    expect(text).toContain('## Articles and blog')
    expect(text).toContain('## Academy')
    expect(text).toContain('## About')
    expect(text).not.toContain('/api-documentation')
    expect(discoverableEntries(entries).some((entry) => entry.path === '/api-documentation')).toBe(false)
    expect(groupOf(entries[2])).toBe('articles')
  })

  it('turns built HTML into plain text without tags', () => {
    const text = htmlToPlainText('<main><h1>Title</h1><p>Hello <strong>there</strong></p><script>secret()</script></main>')
    expect(text).toContain('Title')
    expect(text).toContain('Hello there')
    expect(text).not.toContain('secret')
    expect(text).not.toContain('<p>')
  })

  it('lists blog posts and investigations newest first, with hreflang alternates', () => {
    expect(isFeedEntry(entries[1])).toBe(false)
    expect(isFeedEntry(entries[2])).toBe(true)
    expect(isFeedEntry(entries[3])).toBe(true)
    const rss = renderRss(entries, url, () => '2026-10-31')
    expect(rss.indexOf('Every tap')).toBeLessThan(rss.indexOf('<title>DNS</title>'))
    const sitemap = renderSitemap(entries, url, () => '2026-11-09')
    expect(sitemap).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"')
    expect(sitemap).toContain('hreflang="x-default"')
    expect(sitemap).toContain('hreflang="ar"')
  })

  it('ignores reader comments when checking site text, and leaves them out of the full dump', () => {
    const html = `<head>
      <meta name="robots" content="index,follow">
      <script id="seo-jsonld" type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Site headline","comment":[{"@type":"Comment","text":"noindex artiais artioreconsortium","author":{"@type":"Person","name":"Ada"}}],"commentCount":1}]}</script>
    </head>
    <main>
      <p>The published page stays visible.</p>
      <section id="reader-comments"><h2>Comments</h2><p>noindex artiais artioreconsortium</p>
        <script id="reader-comments-snapshot" type="application/json">{"comments":[{"body":"noindex artiais artioreconsortium"}]}</script>
      </section>
    </main>`
    const scanned = omitReaderComments(html)
    expect(scanned).toContain('content="index,follow"')
    expect(scanned).toContain('The published page stays visible.')
    expect(scanned).toContain('Site headline')
    expect(scanned.toLowerCase()).not.toContain('noindex')
    expect(scanned.toLowerCase()).not.toContain('artiais')
    expect(scanned.toLowerCase()).not.toContain('artioreconsortium')
    const plain = htmlToPlainText(html)
    expect(plain).toContain('The published page stays visible.')
    expect(plain.toLowerCase()).not.toContain('noindex')
    expect(plain.toLowerCase()).not.toContain('artiais')
    const withRealNoindex = omitReaderComments(html.replace('index,follow', 'noindex,follow'))
    expect(withRealNoindex).toMatch(/noindex/i)
    const withSiteBan = omitReaderComments(html.replace('The published page stays visible.', 'The published page mentions artiais.'))
    expect(withSiteBan.toLowerCase()).toContain('artiais')
  })

  it('bumps archive-note pages to the PR #57 date when the source file is older', () => {
    expect(lastmodFor(entries[3]) >= ARCHIVE_NOTE_DATE).toBe(true)
  })
})
