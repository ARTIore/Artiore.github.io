import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, posix } from 'node:path'
import { loadSeoModule } from './load-seo.mjs'

const root = process.cwd()
const dist = join(root, 'dist')
const failures = []

function fail(message) {
  failures.push(message)
}

function walk(directory) {
  const files = []
  for (const name of readdirSync(directory)) {
    const full = join(directory, name)
    if (statSync(full).isDirectory()) files.push(...walk(full))
    else files.push(full)
  }
  return files
}

const { seoEntries } = await loadSeoModule()

if (!existsSync(dist)) fail('dist/ is missing. Run the build first.')

for (const entry of seoEntries) {
  if (entry.external) continue
  if (entry.prerender === false) {
    const file = join(dist, entry.path.replace(/^\//, ''))
    if (!existsSync(file)) fail(`Missing published file for ${entry.path}`)
    continue
  }
  const file = entry.path === '/' ? join(dist, 'index.html') : join(dist, entry.path.slice(1), 'index.html')
  if (!existsSync(file)) {
    fail(`Missing prerendered file for ${entry.path}`)
    continue
  }
  const html = readFileSync(file, 'utf8')
  const escapedDescription = entry.description
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
  if (!html.includes(entry.headTitle)) fail(`${entry.path} HTML is missing its title`)
  if (!html.includes(escapedDescription)) fail(`${entry.path} HTML is missing its description`)
  if (!html.includes('property="og:image"')) fail(`${entry.path} HTML is missing og:image`)
  if (!html.includes('name="twitter:card" content="summary_large_image"')) {
    fail(`${entry.path} HTML is missing twitter:card`)
  }
  if (!html.includes(`<link rel="canonical" href="https://artiais.com${entry.path === '/' ? '/' : entry.path}"`)) {
    fail(`${entry.path} HTML is missing its canonical URL`)
  }
}

const forbidden = [
  [/wa\.me/i, 'wa.me link'],
  [/whatsapp/i, 'WhatsApp'],
  [/16478093075/, 'WhatsApp number'],
  [/809-3075/, 'phone number shared with WhatsApp'],
  [/8093075/, 'phone number shared with WhatsApp'],
  [/42 days before visible disruption/, 'unsourced 42-day claim'],
  [/blind spots across 5 systems/, 'unsourced five-system claim'],
  [/Try Demo Access/, 'placeholder demo CTA'],
]

const textFiles = walk(dist).filter((file) => /\.(html|js|css|xml|txt|svg)$/.test(file))
for (const file of textFiles) {
  const text = readFileSync(file, 'utf8')
  for (const [pattern, label] of forbidden) {
    if (pattern.test(text)) fail(`${file.replace(root, '')} contains ${label}`)
  }
}

if (existsSync(join(dist, 'engine.html'))) fail('dist/engine.html conflicts with the /engine route')
if (existsSync(join(dist, 'framework', 'index.html'))) {
  fail('dist/framework/index.html conflicts with public/framework.html')
}
if (existsSync(join(dist, 'eternia-aurofa-soverign-engine'))) {
  fail('This build must not shadow /eternia-aurofa-soverign-engine/')
}
for (const required of ['404.html', 'framework.html', 'favicon.svg', 'favicon.ico', 'favicon-32.png', 'apple-touch-icon.png', 'og-image.png', 'robots.txt', 'sitemap.xml', 'CNAME']) {
  if (!existsSync(join(dist, required))) fail(`Missing dist/${required}`)
}

const notFound = existsSync(join(dist, '404.html')) ? readFileSync(join(dist, '404.html'), 'utf8') : ''
if (!/This page is not here/.test(notFound)) fail('404.html does not explain that the page is missing')
if (!/noindex/.test(notFound)) fail('404.html should be noindex')
if (/location\.replace|http-equiv="refresh"/i.test(notFound)) fail('404.html must not redirect')

function internalTargets(html) {
  const hrefs = []
  for (const match of html.matchAll(/href="([^"]+)"/g)) hrefs.push(match[1])
  return hrefs
}

function resolves(pathname) {
  const rel = decodeURIComponent(pathname.split('?')[0].split('#')[0])
  if (rel === '/eternia-aurofa-soverign-engine' || rel === '/eternia-aurofa-soverign-engine/') return true
  const clean = rel.replace(/^\//, '')
  if (clean === '') return existsSync(join(dist, 'index.html'))
  const candidates = [clean]
  if (!posix.extname(clean)) {
    candidates.push(`${clean}.html`, posix.join(clean, 'index.html'))
  }
  return candidates.some((candidate) => {
    const full = join(dist, candidate)
    return existsSync(full) && statSync(full).isFile()
  })
}

for (const file of textFiles.filter((item) => item.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8')
  for (const href of internalTargets(html)) {
    if (!href.startsWith('/') || href.startsWith('//')) continue
    if (!resolves(href)) fail(`${file.replace(root, '')} links to missing ${href}`)
  }
}

const sitemap = existsSync(join(dist, 'sitemap.xml')) ? readFileSync(join(dist, 'sitemap.xml'), 'utf8') : ''
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const expected = seoEntries.filter((entry) => entry.sitemap !== false).map((entry) =>
  entry.path === '/' ? 'https://artiais.com/' : `https://artiais.com${entry.path}`,
)
for (const loc of expected) {
  if (!locs.includes(loc)) fail(`sitemap.xml is missing ${loc}`)
}
for (const loc of locs) {
  if (!expected.includes(loc)) fail(`sitemap.xml has an extra URL ${loc}`)
}
if (locs.includes('https://artiais.com/api-documentation')) fail('API page must stay out of the sitemap')
if (locs.includes('https://artiais.com/framework')) fail('Bare /framework must not be a sitemap URL beside framework.html')

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log(`Checked ${seoEntries.length} SEO entries and ${textFiles.length} dist files.`)
