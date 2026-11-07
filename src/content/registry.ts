import { blogIndexMeta, blogSummaries } from './blog-summaries'
import { blogPosts } from './blog'
import { documentPages } from './documents'
import { legalPages } from './legal'
import { libraryPages } from './library'
import { carouselDecks, carouselOgImage } from './field-manual/carousels'
import { carouselSeriesMeta, fieldManualMetas, pocketBookletMeta } from './field-manual/meta'
import {
  academyMeta,
  claimsMeta,
  contactMeta,
  engineMeta,
  contradictionMeta,
  correctionsMeta,
  evidenceMeta,
  homeMeta,
  navigatorMeta,
  provenanceMeta,
  recoveryMeta,
  researchMeta,
  systemMeta,
  threatLabMeta,
} from './meta'
import { investigationLicenseUrl, investigationMeta } from './investigation'
import { globalInjusticeAlternatesFor, globalInjusticeMeta } from './global-injustice/catalog'
import { arabicClaimsMeta, arabicInvestigationMeta } from './investigations/ar/meta'
import { englishPathFor, investigationAlternates } from './investigations/locale'
import { buildJsonLd } from '../seo/structuredData'
import type { PageDocument, SeoEntry } from './types'

export { buildJsonLd }

export const blogMeta = blogIndexMeta

const customMetas = [
  homeMeta,
  contactMeta,
  engineMeta,
  systemMeta,
  academyMeta,
  threatLabMeta,
  recoveryMeta,
  navigatorMeta,
  evidenceMeta,
  researchMeta,
  provenanceMeta,
  correctionsMeta,
  contradictionMeta,
  blogMeta,
]

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
  {
    ...claimsMeta,
    alternates: investigationAlternates(claimsMeta.path),
    sitemap: true,
    prerender: true,
  },
  {
    path: arabicClaimsMeta.path,
    headTitle: arabicClaimsMeta.headTitle,
    description: arabicClaimsMeta.description,
    crumbName: arabicClaimsMeta.crumbName,
    headline: arabicClaimsMeta.headline,
    kind: 'article',
    author: 'ARTIore Research Desk',
    authorOrganization: 'ARTIore',
    datePublished: '2026-10-26',
    dateModified: '2026-11-03',
    sitemap: true,
    prerender: true,
    inLanguage: 'ar',
    locale: 'ar_AR',
    dir: 'rtl',
    lastmod: arabicClaimsMeta.lastmod,
    alternates: investigationAlternates(claimsMeta.path),
  },
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
    lastmod: 'lastmod' in page ? page.lastmod : undefined,
    inLanguage: page.inLanguage,
    locale: page.locale,
    image: page.image,
    imageWidth: page.imageWidth,
    imageHeight: page.imageHeight,
    imageAlt: page.imageAlt,
    faqs: 'faqs' in page ? page.faqs : undefined,
    license: investigationLicenseUrl,
    alternates:
      page.path === '/investigations/digital-exposure/mobile-os-exposure'
        ? [
            { hreflang: 'en', path: page.path },
            { hreflang: 'x-default', path: page.path },
          ]
        : investigationAlternates(page.path),
  })),
  ...arabicInvestigationMeta.map((page) => ({
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
    lastmod: 'lastmod' in page ? page.lastmod : undefined,
    inLanguage: page.inLanguage,
    locale: page.locale,
    dir: page.dir,
    image: page.image,
    imageWidth: page.imageWidth,
    imageHeight: page.imageHeight,
    imageAlt: page.imageAlt,
    faqs: 'faqs' in page ? page.faqs : undefined,
    license: investigationLicenseUrl,
    alternates: investigationAlternates(englishPathFor(page.path)),
  })),
  ...globalInjusticeMeta.map((page) => ({
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
    dateModified: page.dateModified,
    lastmod: page.lastmod,
    inLanguage: page.inLanguage,
    locale: page.locale,
    alternates: globalInjusticeAlternatesFor(page.path),
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
