import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, posix } from 'node:path'
import { loadSeoModule } from './load-seo.mjs'
import { canonicalUrl } from './public-url.mjs'

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

function chars(value) {
  return [...value].length
}

function fileFor(entry) {
  if (entry.path === '/framework.html') return join(dist, 'framework.html')
  if (entry.path === '/') return join(dist, 'index.html')
  return join(dist, entry.path.replace(/^\//, '').replace(/\/$/, ''), 'index.html')
}

function jsonLd(html) {
  const match = html.match(/<script id="seo-jsonld" type="application\/ld\+json">([\s\S]*?)<\/script>/)
  if (!match) return null
  return JSON.parse(match[1])
}

function typesOf(data) {
  const graph = Array.isArray(data?.['@graph']) ? data['@graph'] : [data]
  return graph.map((node) => node?.['@type']).filter(Boolean)
}

const { seoEntries } = await loadSeoModule()

if (!existsSync(dist)) fail('dist/ is missing. Run the build first.')

for (const entry of seoEntries) {
  if (entry.external) continue
  const file = fileFor(entry)
  if (!existsSync(file)) {
    fail(`Missing ${entry.prerender === false ? 'published' : 'prerendered'} file for ${entry.path}`)
    continue
  }
  const html = readFileSync(file, 'utf8')
  const escapedDescription = entry.description
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
  const canonical = canonicalUrl(entry.path)
  if (!html.includes(`<title>${entry.headTitle}</title>`)) fail(`${entry.path} HTML is missing its title`)
  if (!html.includes(escapedDescription)) fail(`${entry.path} HTML is missing its description`)
  if (!html.includes(`<link rel="canonical" href="${canonical}"`)) fail(`${entry.path} HTML is missing its canonical URL`)
  if (!html.includes('property="og:image"')) fail(`${entry.path} HTML is missing og:image`)
  if (!html.includes('property="og:image:width"')) fail(`${entry.path} HTML is missing og:image:width`)
  if (!html.includes('property="og:image:height"')) fail(`${entry.path} HTML is missing og:image:height`)
  if (!html.includes('property="og:image:alt"')) fail(`${entry.path} HTML is missing og:image:alt`)
  if (!html.includes('property="og:type"')) fail(`${entry.path} HTML is missing og:type`)
  if (!html.includes('property="og:url"')) fail(`${entry.path} HTML is missing og:url`)
  if (!html.includes('property="og:site_name"')) fail(`${entry.path} HTML is missing og:site_name`)
  if (!html.includes('name="twitter:card" content="summary_large_image"')) {
    fail(`${entry.path} HTML is missing twitter:card`)
  }
  if (!html.includes('name="twitter:site" content="@Artiore"')) fail(`${entry.path} HTML is missing twitter:site`)
  if (entry.inLanguage && !html.includes(`<html lang="${entry.inLanguage}">`)) {
    fail(`${entry.path} HTML lang is not ${entry.inLanguage}`)
  }
  if (entry.locale && !html.includes(`property="og:locale" content="${entry.locale}"`)) {
    fail(`${entry.path} HTML is missing og:locale`)
  }
  if (entry.alternates) {
    for (const alt of entry.alternates) {
      const href = canonicalUrl(alt.path)
      if (!html.includes(`hreflang="${alt.hreflang}"`)) fail(`${entry.path} HTML is missing hreflang ${alt.hreflang}`)
      if (!html.includes(`href="${href}"`)) fail(`${entry.path} HTML is missing alternate ${href}`)
    }
  }
  const h1s = html.match(/<h1\b/g) ?? []
  if (h1s.length !== 1) fail(`${entry.path} has ${h1s.length} h1 elements`)
  if (entry.noindex) {
    if (!html.includes('noindex')) fail(`${entry.path} should be noindex`)
  }
  const indexable = entry.sitemap !== false && !entry.noindex
  if (indexable) {
    const titleLength = chars(entry.headTitle)
    const descriptionLength = chars(entry.description)
    if (titleLength < 50 || titleLength > 60) {
      fail(`${entry.path} title is ${titleLength} characters`)
    }
    if (descriptionLength < 140 || descriptionLength > 160) {
      fail(`${entry.path} description is ${descriptionLength} characters`)
    }
  }
  if (entry.prerender !== false) {
    if (html.includes('<div id="root"></div>')) fail(`${entry.path} has an empty #root`)
    if (!html.includes('<main')) fail(`${entry.path} is missing a main landmark`)
    if (!html.includes('<header')) fail(`${entry.path} is missing a header landmark`)
    if (!html.includes('<nav')) fail(`${entry.path} is missing a nav landmark`)
    if (!html.includes('<footer')) fail(`${entry.path} is missing a footer landmark`)
    if (!html.includes('<article')) fail(`${entry.path} is missing an article landmark`)
    if (/<link rel="stylesheet"/.test(html)) fail(`${entry.path} still has a render-blocking stylesheet`)
  } else if (entry.path === '/framework.html' && html.length < 1000) {
    fail(`${entry.path} is missing body content`)
  }
  try {
    const data = jsonLd(html)
    if (!data) fail(`${entry.path} is missing JSON-LD`)
    else {
      const types = typesOf(data)
      if (!types.includes('Organization')) fail(`${entry.path} JSON-LD is missing Organization`)
      if (entry.kind === 'home' && !types.includes('WebSite')) fail(`${entry.path} JSON-LD is missing WebSite`)
      if (entry.kind !== 'home' && !types.includes('BreadcrumbList')) {
        fail(`${entry.path} JSON-LD is missing BreadcrumbList`)
      }
      if (entry.kind === 'blog-post' && !types.includes('BlogPosting')) {
        fail(`${entry.path} JSON-LD is missing BlogPosting`)
      }
      if (entry.kind === 'article' && !types.includes('Article')) {
        fail(`${entry.path} JSON-LD is missing Article`)
      }
      if (entry.inLanguage) {
        const article = (data['@graph'] ?? []).find((node) => node['@type'] === 'Article' || node['@type'] === 'BlogPosting')
        if (!article || article.inLanguage !== entry.inLanguage) {
          fail(`${entry.path} JSON-LD inLanguage is not ${entry.inLanguage}`)
        }
      }
      if (entry.kind === 'engine' && !types.includes('SoftwareApplication')) {
        fail(`${entry.path} JSON-LD is missing SoftwareApplication`)
      }
      if (entry.path === '/') {
        const org = (data['@graph'] ?? []).find((node) => node['@type'] === 'Organization')
        const sameAs = org?.sameAs ?? []
        for (const url of [
          'https://artiore.com',
          'https://artioreconsortium.com',
          'https://x.com/Artiore',
          'https://www.linkedin.com/company/artiore/',
          'https://github.com/ARTIore',
          'https://instagram.com/ArtioreConsortium',
        ]) {
          if (!sameAs.includes(url)) fail(`Organization sameAs is missing ${url}`)
        }
      }
    }
  } catch (error) {
    fail(`${entry.path} JSON-LD is not valid JSON (${error.message})`)
  }
}

// Every specific identifier below stays banned across the whole site.
//
// The bare word "WhatsApp" is banned everywhere except the published
// investigation. That investigation is a documented study of WhatsApp's own
// security properties and names the platform in ordinary prose (the
// zero-click article, the Paragon case, the encryption-limits article); the
// specific identifiers around it — wa.me links, the two phone numbers, the
// shared-number claim — are absent from that subtree and remain banned
// there. To restore the blanket ban, drop the `investigationExempt` flag
// from that one entry.
const forbidden = [
  { pattern: /wa\.me/i, label: 'wa.me link' },
  { pattern: /whatsapp/i, label: 'WhatsApp', investigationExempt: true },
  { pattern: /16478093075/, label: 'WhatsApp number' },
  { pattern: /809-3075/, label: 'phone number shared with WhatsApp' },
  { pattern: /8093075/, label: 'phone number shared with WhatsApp' },
  { pattern: /42 days before visible disruption/, label: 'unsourced 42-day claim' },
  { pattern: /blind spots across 5 systems/, label: 'unsourced five-system claim' },
  { pattern: /Try Demo Access/, label: 'placeholder demo CTA' },
]

const textFiles = walk(dist).filter((file) => /\.(html|js|css|xml|txt|svg|webmanifest)$/.test(file))
for (const file of textFiles) {
  const relative = file.replace(root, '')
  let text = readFileSync(file, 'utf8')
  const inInvestigation = relative.includes('/investigations/')
  for (const { pattern, label, investigationExempt } of forbidden) {
    if (investigationExempt && inInvestigation) continue
    // The sitemap lists the published investigation's URLs, and one of those
    // URLs is the WhatsApp article. Strip the investigation's own URLs before
    // testing the bare word, so a mention anywhere else in the sitemap is
    // still caught.
    if (investigationExempt && relative.endsWith('sitemap.xml')) {
      text = text.replace(/https:\/\/artiais\.com\/investigations\/[^<\s]*/g, '')
    }
    if (pattern.test(text)) fail(`${relative} contains ${label}`)
  }
}

if (existsSync(join(dist, 'engine.html'))) fail('dist/engine.html conflicts with the /engine route')
if (existsSync(join(dist, 'framework', 'index.html'))) {
  fail('dist/framework/index.html conflicts with public/framework.html')
}
if (existsSync(join(dist, 'eternia-aurofa-soverign-engine'))) {
  fail('This build must not shadow /eternia-aurofa-soverign-engine/')
}
for (const required of [
  '404.html',
  'framework.html',
  'favicon.svg',
  'favicon.ico',
  'favicon-32.png',
  'apple-touch-icon.png',
  'og-image.png',
  'robots.txt',
  'sitemap.xml',
  'site.webmanifest',
  'CNAME',
]) {
  if (!existsSync(join(dist, required))) fail(`Missing dist/${required}`)
}

const robots = existsSync(join(dist, 'robots.txt')) ? readFileSync(join(dist, 'robots.txt'), 'utf8') : ''
if (!/Allow:\s*\//.test(robots)) fail('robots.txt should allow all crawlers')
if (!robots.includes('Sitemap: https://artiais.com/sitemap.xml')) fail('robots.txt should point at the sitemap')

const home = existsSync(join(dist, 'index.html')) ? readFileSync(join(dist, 'index.html'), 'utf8') : ''
if (!home.includes('rel="manifest"')) fail('home HTML is missing the web manifest link')

const notFound = existsSync(join(dist, '404.html')) ? readFileSync(join(dist, '404.html'), 'utf8') : ''
if (!/This page is not here/.test(notFound)) fail('404.html does not explain that the page is missing')
if (!/noindex/.test(notFound)) fail('404.html should be noindex')
if (/location\.replace|http-equiv="refresh"/i.test(notFound)) fail('404.html must not redirect')
if ((notFound.match(/<h1\b/g) ?? []).length !== 1) fail('404.html should have one h1')
if (notFound.includes('<div id="root"></div>')) fail('404.html has an empty #root')

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

function needsSlash(href) {
  const path = href.split('?')[0].split('#')[0]
  if (!path.startsWith('/') || path.startsWith('//') || path === '/') return false
  if (/\.[a-z0-9]+$/i.test(path)) return false
  return !path.endsWith('/')
}

for (const file of textFiles.filter((item) => item.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8')
  for (const href of internalTargets(html)) {
    if (!href.startsWith('/') || href.startsWith('//')) continue
    if (!resolves(href)) fail(`${file.replace(root, '')} links to missing ${href}`)
    if (needsSlash(href)) fail(`${file.replace(root, '')} links to ${href} without the trailing slash GitHub Pages serves`)
  }
}

const sitemap = existsSync(join(dist, 'sitemap.xml')) ? readFileSync(join(dist, 'sitemap.xml'), 'utf8') : ''
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const lastmods = [...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((match) => match[1])
if (lastmods.length !== locs.length) fail('sitemap.xml should give every URL a lastmod')
for (const value of lastmods) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) fail(`sitemap lastmod is not a date: ${value}`)
}
const expected = seoEntries
  .filter((entry) => entry.sitemap !== false)
  .map((entry) => canonicalUrl(entry.path))
for (const loc of expected) {
  if (!locs.includes(loc)) fail(`sitemap.xml is missing ${loc}`)
}
for (const loc of locs) {
  if (!expected.includes(loc)) fail(`sitemap.xml has an extra URL ${loc}`)
}
if (locs.includes('https://artiais.com/api-documentation') || locs.includes('https://artiais.com/api-documentation/')) {
  fail('API page must stay out of the sitemap')
}
if (locs.includes('https://artiais.com/framework')) fail('Bare /framework must not be a sitemap URL beside framework.html')
if (locs.some((loc) => loc.endsWith('/404.html'))) fail('404 must stay out of the sitemap')

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log(`Checked ${seoEntries.length} SEO entries and ${textFiles.length} dist files.`)
