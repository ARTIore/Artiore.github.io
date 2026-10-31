import { blogIndexMeta, blogSummaries } from './blog-summaries'
import { blogPosts } from './blog'
import { documentPages } from './documents'
import { legalPages } from './legal'
import { libraryPages } from './library'
import { carouselDecks, carouselOgImage } from './field-manual/carousels'
import { carouselSeriesMeta, fieldManualMetas, pocketBookletMeta } from './field-manual/meta'
import { contactMeta, engineMeta, homeMeta, systemMeta } from './meta'
import { investigationMeta } from './investigation'
import { buildJsonLd } from '../seo/structuredData'
import type { PageDocument, SeoEntry } from './types'

export { buildJsonLd }

export const blogMeta = blogIndexMeta

const customMetas = [homeMeta, contactMeta, engineMeta, systemMeta, blogMeta]

const fieldManualAlternates = [
  ...fieldManualMetas.map((meta) => ({ hreflang: meta.inLanguage, path: meta.path })),
  { hreflang: 'x-default', path: '/field-manual' },
]

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
  ...fieldManualMetas.map((meta) => ({
    ...meta,
    alternates: fieldManualAlternates,
    sitemap: true,
    prerender: true,
  })),
  {
    ...pocketBookletMeta,
    sitemap: true,
    prerender: true,
  },
  {
    ...carouselSeriesMeta,
    image: carouselOgImage.src,
    imageWidth: carouselOgImage.width,
    imageHeight: carouselOgImage.height,
    imageAlt: carouselDecks[0].slides[0].alt,
    sitemap: true,
    prerender: true,
  },
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
  ...investigationMeta.map((page) => ({
    path: page.path,
    headTitle: page.headTitle,
    description: page.description,
    sitemap: true,
    prerender: true,
    kind: 'article' as const,
    crumbName: page.crumbName,
    headline: page.headline,
    author: 'ARTIore Research Desk',
    authorOrganization: 'ARTIore',
    datePublished: page.datePublished,
    dateModified: 'dateModified' in page ? page.dateModified : undefined,
    inLanguage: page.inLanguage,
    locale: page.locale,
    image: page.image,
    imageWidth: page.imageWidth,
    imageHeight: page.imageHeight,
    imageAlt: page.imageAlt,
    faqs: 'faqs' in page ? page.faqs : undefined,
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
