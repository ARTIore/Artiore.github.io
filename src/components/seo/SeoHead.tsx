import { useEffect } from 'react'
import {
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  SITE_NAME,
} from '../../config/site'
import { canonicalUrl } from '../../content/urls'
import { buildJsonLd, openGraphType, type SeoKind } from '../../seo/structuredData'

type SeoHeadProps = {
  title: string
  description: string
  path: string
  noindex?: boolean
  kind?: SeoKind
  crumbName?: string
  headline?: string
  author?: string
  authorOrganization?: string
  datePublished?: string
  dateModified?: string
  faqs?: { question: string; answer: string }[]
  inLanguage?: string
  locale?: string
  alternates?: { hreflang: string; path: string }[]
  image?: string
  imageWidth?: string
  imageHeight?: string
  imageAlt?: string
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value)
  }
}

export function SeoHead({
  title,
  description,
  path,
  noindex = false,
  kind = 'page',
  crumbName,
  headline,
  author,
  authorOrganization,
  datePublished,
  dateModified,
  faqs,
  inLanguage,
  locale,
  alternates,
  image,
  imageWidth,
  imageHeight,
  imageAlt,
}: SeoHeadProps) {
  useEffect(() => {
    const canonical = canonicalUrl(path)
    const ogUrl = image ?? OG_IMAGE_URL
    const ogWidth = imageWidth ?? OG_IMAGE_WIDTH
    const ogHeight = imageHeight ?? OG_IMAGE_HEIGHT
    const ogAlt = imageAlt ?? OG_IMAGE_ALT
    document.title = title
    document.documentElement.lang = inLanguage ?? 'en'

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME })
    if (locale) upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: locale })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: openGraphType(kind) })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogUrl })
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: ogWidth })
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: ogHeight })
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: ogAlt })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:site"]', { name: 'twitter:site', content: '@Artiore' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: ogUrl })
    upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: ogAlt })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: noindex ? 'noindex,follow' : 'index,follow',
    })

    let canonicalLink = document.head.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonical)

    document.head.querySelectorAll('link[data-seo-alternate]').forEach((node) => node.remove())
    for (const alternate of alternates ?? []) {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = alternate.hreflang
      link.href = canonicalUrl(alternate.path)
      link.dataset.seoAlternate = 'true'
      document.head.appendChild(link)
    }

    let schema = document.getElementById('seo-jsonld')
    if (!schema) {
      schema = document.createElement('script')
      schema.id = 'seo-jsonld'
      schema.setAttribute('type', 'application/ld+json')
      document.head.appendChild(schema)
    }
    schema.textContent = JSON.stringify(
      buildJsonLd({
        kind,
        title,
        description,
        path,
        crumbName: crumbName ?? title,
        headline,
        author,
        authorOrganization,
        datePublished,
        dateModified,
        inLanguage,
        image: ogUrl,
        faqs,
      }),
    )
  }, [alternates, author, authorOrganization, crumbName, dateModified, datePublished, description, faqs, headline, image, imageAlt, imageHeight, imageWidth, inLanguage, kind, locale, noindex, path, title])

  return null
}
