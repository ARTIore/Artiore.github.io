import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { loadSeoModule } from './load-seo.mjs'

const SITE_URL = 'https://artiais.com'

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function applyMeta(html, { title, description, canonical, robots }) {
  const safeTitle = escapeHtml(title)
  const safeDescription = escapeHtml(description)
  const safeCanonical = escapeHtml(canonical)
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${safeDescription}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${safeCanonical}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${safeTitle}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${safeDescription}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${safeCanonical}$2`)
    .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${safeTitle}$2`)
    .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${safeDescription}$2`)
    .replace(/(<meta\s+name="robots"\s+content=")[^"]*(")/, `$1${robots}$2`)
}

function pageUrl(path) {
  if (path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path}`
}

const notFoundFallback = `
      <main style="max-width:40rem;margin:4rem auto;padding:0 1.25rem;font-family:Georgia,serif;color:#f4efe6;background:#12100e">
        <p style="letter-spacing:.2em;text-transform:uppercase;color:#d4b36a">404</p>
        <h1>This page is not here.</h1>
        <p>The address does not match a page on artiais.com.</p>
        <p><a href="/" style="color:#f0d9a0">Home</a> · <a href="/contact" style="color:#f0d9a0">Contact</a> · <a href="/how-it-works" style="color:#f0d9a0">Framework</a> · <a href="/engine" style="color:#f0d9a0">Engine</a></p>
      </main>`

const dist = join(process.cwd(), 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')
const { seoEntries } = await loadSeoModule()

for (const entry of seoEntries) {
  if (!entry.prerender) continue
  const html = applyMeta(template, {
    title: entry.headTitle,
    description: entry.description,
    canonical: pageUrl(entry.path),
    robots: 'index,follow',
  })
  if (entry.path === '/') {
    writeFileSync(join(dist, 'index.html'), html)
    continue
  }
  const directory = join(dist, entry.path.slice(1))
  mkdirSync(directory, { recursive: true })
  writeFileSync(join(directory, 'index.html'), html)
}

const notFound = applyMeta(template, {
  title: 'Page not found | ARTIore',
  description: 'This address is not a page on artiais.com.',
  canonical: `${SITE_URL}/404.html`,
  robots: 'noindex',
}).replace('<div id="root"></div>', `<div id="root">${notFoundFallback}</div>`)
writeFileSync(join(dist, '404.html'), notFound)

const sitemapUrls = seoEntries.filter((entry) => entry.sitemap !== false).map((entry) => pageUrl(entry.path))
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), sitemap)
writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), sitemap)

console.log(`Wrote ${seoEntries.filter((entry) => entry.prerender).length} route files, dist/404.html, and sitemap.xml`)
