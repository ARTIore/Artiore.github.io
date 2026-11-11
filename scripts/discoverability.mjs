import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

/** Pages whose visible text gained an archive note in PR #57 without a hashed-source edit. */
export const ARCHIVE_NOTE_DATE = '2026-11-09'
export const ARCHIVE_NOTE_PATHS = new Set([
  '/investigations/digital-exposure/digital-security-warning-signs',
  '/investigations/digital-exposure/ar/digital-security-warning-signs',
  '/investigations/digital-exposure/source-register',
  '/investigations/digital-exposure/ar/source-register',
  '/investigations/digital-exposure/dns-hijacking-explained',
  '/investigations/digital-exposure/ar/dns-hijacking-explained',
  '/field-manual',
  '/field-manual/fr',
  '/field-manual/ar',
])

const DEFAULT_LASTMOD = '2026-10-31'

const PAGE_FILES = {
  '/': ['src/pages/HomePage.tsx', 'src/components/home/HomeSections.tsx'],
  '/contact': ['src/pages/ContactPage.tsx'],
  '/engine': ['src/pages/EnginePage.tsx'],
  '/system-documentation': ['src/pages/SystemDocsPage.tsx'],
  '/academy': ['src/pages/AcademyPage.tsx'],
  '/academy/threat-lab': ['src/pages/ThreatLabPage.tsx'],
  '/academy/recovery': ['src/pages/RecoveryCenterPage.tsx'],
  '/academy/navigator': ['src/pages/SafetyNavigatorPage.tsx', 'src/content/safety/navigator.ts'],
  '/academy/evidence': ['src/pages/EvidenceExplorerPage.tsx'],
  '/academy/research': ['src/pages/ResearchDashboardPage.tsx'],
  '/academy/research/provenance': ['src/pages/ProvenancePage.tsx'],
  '/academy/research/corrections': ['src/pages/CorrectionsCenterPage.tsx'],
  '/academy/research/contradictions': ['src/pages/ContradictionLabPage.tsx'],
  '/field-manual': ['src/content/field-manual/en.ts'],
  '/field-manual/fr': ['src/content/field-manual/fr.ts'],
  '/field-manual/ar': ['src/content/field-manual/ar.ts'],
  '/field-manual/pocket-booklet': ['src/content/field-manual/pocket-booklet.ts'],
  '/field-manual/carousels': ['src/content/field-manual/carousels.ts'],
  '/blog': ['src/pages/BlogPage.tsx', 'src/content/blog-summaries.ts'],
  '/about': ['src/content/documents.ts'],
  '/philosophy': ['src/content/documents.ts'],
  '/origin': ['src/content/documents.ts'],
  '/doctrine': ['src/content/documents.ts'],
  '/protocol': ['src/content/documents.ts'],
  '/how-it-works': ['src/content/documents.ts'],
  '/applications': ['src/content/documents.ts'],
  '/dossier': ['src/content/documents.ts'],
  '/resources': ['src/content/library.ts'],
  '/case-studies': ['src/content/library.ts'],
  '/implementation': ['src/content/library.ts'],
  '/privacy': ['src/content/legal.ts'],
  '/terms': ['src/content/legal.ts'],
  '/blog/every-tap-on-allow': ['src/content/blog.ts'],
  '/blog/artiore-ecosystem': ['src/content/blog.ts'],
  '/blog/sultan-authority-cannot-be-touched': ['src/content/blog.ts'],
  '/blog/engineers-oath-voltage-granted': ['src/content/blog.ts'],
  '/blog/exhibit-k-forensic-witnesses': ['src/content/blog.ts'],
  '/framework.html': ['public/framework.html'],
  '/investigations/digital-exposure': ['src/pages/InvestigationHubPage.tsx'],
  '/investigations/digital-exposure/ar': ['src/pages/InvestigationHubArPage.tsx'],
  '/investigations/digital-exposure/claims': ['src/pages/ClaimsPage.tsx'],
  '/investigations/digital-exposure/ar/claims': ['src/pages/ClaimsPage.tsx', 'src/content/investigations/ar/claim-copy.ts'],
  '/investigations/global-injustice': ['src/content/global-injustice/dossiers.ts', 'src/pages/GlobalInjusticeHubPage.tsx'],
  '/investigations/supply-chain-hidden-features': [
    'src/content/supply-chain/checks.ts',
    'src/content/supply-chain/register.ts',
    'src/pages/SupplyChainPage.tsx',
  ],
  '/perimeter': ['src/content/investigations/source/perimeter.md'],
}

export function barePath(path) {
  return String(path || '/').replace(/\/$/, '') || '/'
}

export function isApiStub(entry) {
  return barePath(entry.path) === '/api-documentation'
}

export function discoverableEntries(entries) {
  return entries.filter((entry) => entry.sitemap !== false && !isApiStub(entry))
}

export function groupOf(entry) {
  const path = barePath(entry.path)
  if (path.startsWith('/investigations') || path === '/perimeter') return 'investigations'
  if (path.startsWith('/blog') || entry.kind === 'blog-post') return 'articles'
  if (path.startsWith('/field-manual')) return 'field-manual'
  if (path.startsWith('/academy')) return 'academy'
  return 'about'
}

const GROUPS = [
  ['investigations', 'Investigations'],
  ['articles', 'Articles and blog'],
  ['field-manual', 'Field manual'],
  ['academy', 'Academy'],
  ['about', 'About'],
]

export function contentFilesFor(entry) {
  const path = barePath(entry.path)
  if (PAGE_FILES[path]) return PAGE_FILES[path].filter((file) => existsSync(file))
  if (path.startsWith('/investigations/global-injustice/')) {
    return ['src/content/global-injustice/dossiers.ts', 'src/pages/GlobalInjusticeDossierPage.tsx'].filter((file) =>
      existsSync(file),
    )
  }
  if (path.startsWith('/investigations/digital-exposure/')) {
    const arabic = path.includes('/ar/')
    const slug = path.split('/').pop()
    const dir = arabic ? 'src/content/investigations/source/ar' : 'src/content/investigations/source'
    if (!existsSync(dir)) return []
    return readdirSync(dir)
      .filter((name) => name === `${slug}.md` || name.endsWith(`-${slug}.md`))
      .map((name) => join(dir, name))
  }
  return []
}

const gitDates = new Map()

export function gitLastmod(files) {
  let latest = null
  for (const file of files) {
    if (!gitDates.has(file)) {
      let date = null
      if (existsSync(file)) {
        try {
          const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], { encoding: 'utf8' }).trim()
          if (/^\d{4}-\d{2}-\d{2}$/.test(out)) date = out
        } catch {
          date = null
        }
      }
      gitDates.set(file, date)
    }
    const date = gitDates.get(file)
    if (date && (!latest || date > latest)) latest = date
  }
  return latest
}

export function lastmodFor(entry) {
  const path = barePath(entry.path)
  const fromGit = gitLastmod(contentFilesFor(entry))
  const recorded = entry.lastmod || String(entry.datePublished || '').slice(0, 10)
  let date = fromGit || ( /^\d{4}-\d{2}-\d{2}$/.test(recorded) ? recorded : DEFAULT_LASTMOD)
  if (ARCHIVE_NOTE_PATHS.has(path) && date < ARCHIVE_NOTE_DATE) date = ARCHIVE_NOTE_DATE
  return date
}

export function xmlEscape(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function oneLine(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .replaceAll('[', '(')
    .replaceAll(']', ')')
    .trim()
}

export function linkTitle(entry) {
  return oneLine(entry.headline || entry.crumbName || entry.headTitle)
}

function languageLine(entries) {
  const names = { en: 'English', ar: 'Arabic', fr: 'French', ur: 'Urdu' }
  const codes = [...new Set(entries.map((entry) => entry.inLanguage || 'en'))]
  const rtl = new Set(entries.filter((entry) => entry.dir === 'rtl').map((entry) => entry.inLanguage))
  const parts = codes.map((code) => {
    const name = names[code] || code
    return rtl.has(code) ? `${name} (right to left)` : name
  })
  return `Language versions on this site: ${parts.join(', ')}.`
}

export function renderLlmsTxt(entries, canonicalUrl) {
  const pages = discoverableEntries(entries)
  const home = pages.find((entry) => barePath(entry.path) === '/')
  const lines = [
    '# ARTIore',
    '',
    `> ${oneLine(home?.description || 'ARTIore publishes investigations, a field manual, and a digital safety lab.')}`,
    '',
    languageLine(pages),
    '',
    'Canonical pages are grouped below. Each line uses the page’s existing meta description. The public-API stub page is omitted.',
    '',
  ]
  for (const [id, heading] of GROUPS) {
    const group = pages.filter((entry) => groupOf(entry) === id).sort((a, b) => barePath(a.path).localeCompare(barePath(b.path)))
    if (!group.length) continue
    lines.push(`## ${heading}`, '')
    for (const entry of group) {
      lines.push(`- [${linkTitle(entry)}](${canonicalUrl(entry.path)}): ${oneLine(entry.description)}`)
    }
    lines.push('')
  }
  return `${lines.join('\n').trim()}\n`
}

export function htmlToPlainText(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html
  const withoutCode = main.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
  const withBreaks = withoutCode
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|tr|h\d|section|article|header|footer|main|blockquote|figcaption)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
  const decoded = withBreaks
    .replaceAll('&nbsp;', ' ')
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
  return decoded
    .replace(/[ \t]+\n/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export function renderLlmsFullTxt(pages) {
  const lines = [
    '# ARTIore full text',
    '',
    'Plain text of each sitemap page, taken from the built HTML. The API stub is not included.',
    '',
  ]
  for (const page of pages) {
    lines.push(`# ${oneLine(page.title)}`, '', `URL: ${page.url}`, '', page.text || '(No body text in the built page.)', '', '---', '')
  }
  return `${lines.join('\n').trim()}\n`
}

export function rssDate(iso) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!match) return null
  return new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]))).toUTCString()
}

export function isFeedEntry(entry) {
  if (isApiStub(entry) || entry.sitemap === false) return false
  if (entry.kind === 'blog-post') return true
  const path = barePath(entry.path)
  return path.startsWith('/investigations') || path === '/perimeter'
}

export function renderRss(entries, canonicalUrl, lastmodOf) {
  const items = entries
    .filter(isFeedEntry)
    .map((entry) => {
      const published = String(entry.datePublished || '').slice(0, 10)
      const date = /^\d{4}-\d{2}-\d{2}$/.test(published) ? published : lastmodOf(entry)
      return { entry, date }
    })
    .sort((a, b) => (a.date === b.date ? barePath(a.entry.path).localeCompare(barePath(b.entry.path)) : b.date.localeCompare(a.date)))
  const newest = items[0]?.date || DEFAULT_LASTMOD
  const body = items
    .map(({ entry, date }) => {
      const url = canonicalUrl(entry.path)
      return `    <item>
      <title>${xmlEscape(linkTitle(entry))}</title>
      <link>${xmlEscape(url)}</link>
      <guid isPermaLink="true">${xmlEscape(url)}</guid>
      <pubDate>${rssDate(date)}</pubDate>
      <description>${xmlEscape(oneLine(entry.description))}</description>
    </item>`
    })
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>ARTIore</title>
    <link>https://artiore.com/</link>
    <description>${xmlEscape(oneLine(entries.find((entry) => barePath(entry.path) === '/')?.description || 'ARTIore'))}</description>
    <language>en</language>
    <lastBuildDate>${rssDate(newest)}</lastBuildDate>
${body}
  </channel>
</rss>
`
}

export function renderSitemap(entries, canonicalUrl, lastmodOf) {
  const urls = entries
    .filter((entry) => entry.sitemap !== false)
    .map((entry) => {
      const loc = canonicalUrl(entry.path)
      const alternates = (entry.alternates || [])
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${xmlEscape(alt.hreflang)}" href="${xmlEscape(canonicalUrl(alt.path))}" />`,
        )
        .join('\n')
      return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${lastmodOf(entry)}</lastmod>
${alternates}
  </url>`
    })
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
}

export function renderRobots(siteUrl) {
  return `User-agent: *
Allow: /

# llms.txt: ${siteUrl}/llms.txt

Sitemap: ${siteUrl}/sitemap.xml
`
}

export const RSS_LINK = '<link rel="alternate" type="application/rss+xml" title="ARTIore" href="https://artiore.com/rss.xml" />'

export function injectRssLink(html) {
  if (html.includes('application/rss+xml')) return html
  return html.replace('</head>', `    ${RSS_LINK}\n  </head>`)
}
