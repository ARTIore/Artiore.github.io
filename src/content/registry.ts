import { blogIndexMeta, blogSummaries } from './blog-summaries'
import { blogPosts } from './blog'
import { documentPages } from './documents'
import { legalPages } from './legal'
import { libraryPages } from './library'
import { contactMeta, engineMeta, homeMeta, systemMeta } from './meta'
import { buildJsonLd } from '../seo/structuredData'
import type { PageDocument, SeoEntry } from './types'

export { buildJsonLd }

export const blogMeta = blogIndexMeta

const customMetas = [homeMeta, contactMeta, engineMeta, systemMeta, blogMeta]

export const allDocuments: PageDocument[] = [
  ...documentPages,
  ...libraryPages,
  ...legalPages,
  ...blogPosts.map((post) => post.page),
]

export const pagesByPath: Record<string, PageDocument> = Object.fromEntries(
  allDocuments.map((page) => [page.path, page]),
)

const summaryByPath = Object.fromEntries(blogSummaries.map((item) => [item.path, item]))

export const seoEntries: SeoEntry[] = [
  ...customMetas.map((meta) => ({
    ...meta,
    sitemap: true,
    prerender: true,
  })),
  ...allDocuments.map((page) => ({
    path: page.path,
    headTitle: page.headTitle,
    description: page.description,
    sitemap: page.sitemap !== false,
    prerender: true,
    noindex: page.noindex === true,
    kind: page.published ? ('blog-post' as const) : ('page' as const),
    crumbName: page.title,
    headline: summaryByPath[page.path]?.title ?? page.title,
    author: page.author,
    datePublished: page.published,
  })),
  {
    path: '/framework.html',
    headTitle: 'Grand Directional Prompt Framework, V1.1 | ARTIore',
    description:
      'Grand Directional Prompt Framework, V1.1, Zero-Drift Edition: a cognitive charter and operating protocol for an AI, by Zain Ul Abdin of the Artiore Consortium.',
    sitemap: true,
    prerender: false,
    kind: 'page',
    crumbName: 'Prompt Framework V1.1',
  },
  {
    path: '/eternia-aurofa-soverign-engine/',
    headTitle: 'Eternia Aurora Sovereign Engine',
    description: 'Local-first generative ambient instrument served from its own project.',
    sitemap: true,
    prerender: false,
    external: true,
  },
]
