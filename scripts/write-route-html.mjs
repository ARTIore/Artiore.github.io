import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { loadSeoModule } from './load-seo.mjs'
import { canonicalUrl } from './public-url.mjs'

// Used only when no entry in the content model carries a publication date.
const FALLBACK_LASTMOD = '2026-10-26'

const SITE_URL = 'https://artiais.com'

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function replaceAttr(html, pattern, value) {
  if (!pattern.test(html)) return html
  return html.replace(pattern, (full, before, after) => `${before}${value}${after}`)
}

function applyMeta(html, { title, description, canonical, robots, ogType, lang, locale, alternates, image, imageWidth, imageHeight, imageAlt }) {
  const safeTitle = escapeHtml(title)
  const safeDescription = escapeHtml(description)
  const safeCanonical = escapeHtml(canonical)
  let next = html
  if (lang) next = next.replace('<html lang="en">', `<html lang="${escapeHtml(lang)}">`)
  next = next.replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`)
  next = replaceAttr(next, /(<meta\s+name="description"\s+content=")[^"]*(")/, safeDescription)
  next = replaceAttr(next, /(<link\s+rel="canonical"\s+href=")[^"]*(")/, safeCanonical)
  next = replaceAttr(next, /(<meta\s+property="og:title"\s+content=")[^"]*(")/, safeTitle)
  next = replaceAttr(next, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, safeDescription)
  next = replaceAttr(next, /(<meta\s+property="og:url"\s+content=")[^"]*(")/, safeCanonical)
  next = replaceAttr(next, /(<meta\s+property="og:type"\s+content=")[^"]*(")/, ogType)
  next = replaceAttr(next, /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, safeTitle)
  next = replaceAttr(next, /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, safeDescription)
  next = replaceAttr(next, /(<meta\s+name="robots"\s+content=")[^"]*(")/, robots)
  if (!next.includes('name="twitter:site"')) {
    next = next.replace(
      '<meta name="twitter:card" content="summary_large_image" />',
      '<meta name="twitter:card" content="summary_large_image" />\n    <meta name="twitter:site" content="@Artiore" />',
    )
  }
  if (locale) {
    const localeTag = `<meta property="og:locale" content="${escapeHtml(locale)}" />`
    if (next.includes('property="og:locale"')) {
      next = replaceAttr(next, /(<meta\s+property="og:locale"\s+content=")[^"]*(")/, escapeHtml(locale))
    } else {
      next = next.replace(
        '<meta property="og:site_name" content="ARTIore" />',
        `<meta property="og:site_name" content="ARTIore" />\n    ${localeTag}`,
      )
    }
  }
  if (alternates?.length) {
    const links = alternates
      .map(
        (alt) =>
          `<link rel="alternate" hreflang="${escapeHtml(alt.hreflang)}" href="${escapeHtml(canonicalUrl(alt.path))}" />`,
      )
      .join('\n    ')
    next = next.replace('</head>', `    ${links}\n  </head>`)
  }
  if (image) {
    next = replaceAttr(next, /(<meta\s+property="og:image"\s+content=")[^"]*(")/, escapeHtml(image))
    next = replaceAttr(next, /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/, escapeHtml(image))
  }
  if (imageWidth) next = replaceAttr(next, /(<meta\s+property="og:image:width"\s+content=")[^"]*(")/, escapeHtml(imageWidth))
  if (imageHeight) next = replaceAttr(next, /(<meta\s+property="og:image:height"\s+content=")[^"]*(")/, escapeHtml(imageHeight))
  if (imageAlt) {
    next = replaceAttr(next, /(<meta\s+property="og:image:alt"\s+content=")[^"]*(")/, escapeHtml(imageAlt))
    next = replaceAttr(next, /(<meta\s+name="twitter:image:alt"\s+content=")[^"]*(")/, escapeHtml(imageAlt))
  }
  return next
}

function inlineStyles(html, dist) {
  return html.replace(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/, (full, href) => {
    const cssPath = join(dist, href.slice(1))
    if (!existsSync(cssPath)) return full
    const css = readFileSync(cssPath, 'utf8').replaceAll('</', '<\\/')
    return `<style>${css}</style>`
  })
}

function jsonScript(data) {
  const json = JSON.stringify(data).replaceAll('<', '\\u003c')
  return `<script id="seo-jsonld" type="application/ld+json">${json}</script>`
}

function replaceJsonLd(html, data) {
  const script = jsonScript(data)
  if (html.includes('id="seo-jsonld"')) {
    return html.replace(/<script id="seo-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/, script)
  }
  return html.replace('</head>', `    ${script}\n  </head>`)
}

const routeSources = {
  '/': ['src/pages/HomePage.tsx'],
  '/contact': ['src/pages/ContactPage.tsx'],
  '/engine': ['src/pages/EnginePage.tsx'],
  '/system-documentation': ['src/pages/SystemDocsPage.tsx'],
  '/field-manual': ['src/pages/FieldManualPage.tsx', 'src/components/field-manual/FieldManualLayout.tsx'],
  '/field-manual/fr': ['src/pages/FieldManualFrPage.tsx', 'src/components/field-manual/FieldManualLayout.tsx'],
  '/field-manual/ar': ['src/pages/FieldManualArPage.tsx', 'src/components/field-manual/FieldManualLayout.tsx'],
  '/field-manual/pocket-booklet': ['src/pages/PocketBookletPage.tsx', 'src/components/field-manual/FieldManualLayout.tsx'],
  '/field-manual/carousels': ['src/pages/CarouselsPage.tsx', 'src/components/field-manual/CarouselRow.tsx'],
  '/blog': ['src/pages/BlogPage.tsx'],
  '/about': ['src/content/documents.ts', 'src/components/content/DocumentView.tsx'],
  '/philosophy': ['src/content/documents.ts', 'src/components/content/DocumentView.tsx'],
  '/origin': ['src/content/documents.ts', 'src/components/content/DocumentView.tsx'],
  '/doctrine': ['src/content/documents.ts', 'src/components/content/DocumentView.tsx'],
  '/protocol': ['src/content/documents.ts', 'src/components/content/DocumentView.tsx'],
  '/how-it-works': ['src/content/documents.ts', 'src/components/content/DocumentView.tsx'],
  '/applications': ['src/content/documents.ts', 'src/components/content/DocumentView.tsx'],
  '/dossier': ['src/content/documents.ts', 'src/components/content/DocumentView.tsx'],
  '/resources': ['src/content/library.ts', 'src/components/content/DocumentView.tsx'],
  '/case-studies': ['src/content/library.ts', 'src/components/content/DocumentView.tsx'],
  '/implementation': ['src/content/library.ts', 'src/components/content/DocumentView.tsx'],
  '/api-documentation': ['src/content/library.ts', 'src/components/content/DocumentView.tsx'],
  '/privacy': ['src/content/legal.ts', 'src/components/content/DocumentView.tsx'],
  '/terms': ['src/content/legal.ts', 'src/components/content/DocumentView.tsx'],
  '/blog/artiore-ecosystem': ['src/content/blog.ts', 'src/components/content/DocumentView.tsx'],
  '/blog/sultan-authority-cannot-be-touched': ['src/content/blog.ts', 'src/components/content/DocumentView.tsx'],
  '/blog/engineers-oath-voltage-granted': ['src/content/blog.ts', 'src/components/content/DocumentView.tsx'],
  '/blog/exhibit-k-forensic-witnesses': ['src/content/blog.ts', 'src/components/content/DocumentView.tsx'],
  '/404.html': ['src/pages/NotFoundPage.tsx'],
}

function loadManifest(dist) {
  for (const candidate of [join(dist, '.vite', 'manifest.json'), join(dist, 'manifest.json')]) {
    if (existsSync(candidate)) return JSON.parse(readFileSync(candidate, 'utf8'))
  }
  return null
}

function collectPreloads(manifest, ids, entryFile) {
  if (!manifest) return []
  const files = []
  const seen = new Set()
  function visit(id) {
    if (!id || seen.has(id)) return
    const item = manifest[id]
    if (!item) return
    seen.add(id)
    if (item.file && item.file !== entryFile) files.push(`/${item.file}`)
    for (const child of item.imports ?? []) visit(child)
  }
  for (const id of ids) visit(id)
  return [...new Set(files)]
}

function entryScript(html) {
  const match = html.match(/<script type="module"[^>]*src="(\/assets\/[^"]+)"/)
  return match ? match[1].slice(1) : ''
}

function injectPreloads(html, files) {
  if (!files.length) return html
  const links = files
    .map((href) => `<link rel="modulepreload" crossorigin href="${href}">`)
    .join('\n    ')
  return html.replace('<script type="module"', `${links}\n    <script type="module"`)
}

const dist = join(process.cwd(), 'dist')
const ssrEntry = join(process.cwd(), 'dist-ssr', 'entry-server.js')
const { render } = await import(pathToFileURL(ssrEntry).href)
const { seoEntries, buildJsonLd } = await loadSeoModule()
const manifest = loadManifest(dist)
const template = readFileSync(join(dist, 'index.html'), 'utf8')
const scriptFile = entryScript(template)

async function renderDocument(templateHtml, entry, location) {
  const kind = entry.kind ?? 'page'
  const htmlWithMeta = applyMeta(templateHtml, {
    title: entry.headTitle,
    description: entry.description,
    canonical: canonicalUrl(entry.path),
    robots: entry.noindex ? 'noindex,follow' : 'index,follow',
    ogType: kind === 'blog-post' || kind === 'article' ? 'article' : 'website',
    lang: entry.inLanguage,
    locale: entry.locale,
    alternates: entry.alternates,
    image: entry.image,
    imageWidth: entry.imageWidth,
    imageHeight: entry.imageHeight,
    imageAlt: entry.imageAlt,
  })
  const withJson = replaceJsonLd(
    htmlWithMeta,
    buildJsonLd({
      kind,
      title: entry.headTitle,
      description: entry.description,
      path: entry.path,
      crumbName: entry.crumbName || entry.headTitle,
      headline: entry.headline,
      author: entry.author,
      authorOrganization: entry.authorOrganization,
      datePublished: entry.datePublished,
      inLanguage: entry.inLanguage,
      image: entry.image,
    }),
  )
  const body = await render(location)
  const withBody = withJson.replace('<div id="root"></div>', () => `<div id="root">${body}</div>`)
  const sources = routeSources[entry.path] ?? []
  return inlineStyles(injectPreloads(withBody, collectPreloads(manifest, sources, scriptFile)), dist)
}

const rendered = []
for (const entry of seoEntries) {
  if (!entry.prerender) continue
  const location = entry.path === '/' ? '/' : canonicalUrl(entry.path).replace(SITE_URL, '')
  const html = await renderDocument(template, entry, location)
  rendered.push(html)
  if (entry.path === '/') {
    writeFileSync(join(dist, 'index.html'), html)
    continue
  }
  const directory = join(dist, entry.path.replace(/^\//, '').replace(/\/$/, ''))
  mkdirSync(directory, { recursive: true })
  writeFileSync(join(directory, 'index.html'), html)
}

const notFoundEntry = {
  path: '/404.html',
  headTitle: 'Page not found | ARTIore',
  description:
    'This address is not a page on artiais.com. Nothing was redirected. Use Home, Contact, the six-layer framework, or the Eternia Aurora engine.',
  kind: 'page',
  crumbName: 'This page is not here.',
  noindex: true,
}
writeFileSync(join(dist, '404.html'), await renderDocument(template, notFoundEntry, '/this-page-is-not-here'))

const frameworkEntry = seoEntries.find((entry) => entry.path === '/framework.html')
if (frameworkEntry) {
  const frameworkPath = join(dist, 'framework.html')
  let framework = readFileSync(frameworkPath, 'utf8')
  framework = applyMeta(framework, {
    title: frameworkEntry.headTitle,
    description: frameworkEntry.description,
    canonical: canonicalUrl(frameworkEntry.path),
    robots: 'index,follow',
    ogType: 'website',
  })
  framework = replaceJsonLd(
    framework,
    buildJsonLd({
      kind: 'page',
      title: frameworkEntry.headTitle,
      description: frameworkEntry.description,
      path: frameworkEntry.path,
      crumbName: frameworkEntry.crumbName || 'Prompt Framework V1.1',
    }),
  )
  writeFileSync(frameworkPath, framework)
  writeFileSync(join(process.cwd(), 'public', 'framework.html'), framework)
}

// The sitemap's lastmod must describe WHEN THE CONTENT CHANGED, not when the
// build ran. Stamping the wall clock made the tracked public/sitemap.xml change
// on every build - dirtying the source tree, colliding with the other live
// branches on that file, and telling crawlers every URL changed today.
// Derive it from the content model instead, so the build is reproducible and
// the committed file stays byte-identical to what the build emits.
const contentDates = seoEntries
  .map((entry) => entry.datePublished)
  .filter((value) => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value))
  .sort()
const lastmod = contentDates.at(-1) ?? FALLBACK_LASTMOD
const sitemapUrls = seoEntries.filter((entry) => entry.sitemap !== false).map((entry) => canonicalUrl(entry.path))
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), sitemap)
writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), sitemap)

console.log(`Wrote ${rendered.length} prerendered routes, dist/404.html, and sitemap.xml`)
