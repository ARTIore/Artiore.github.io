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
}: SeoHeadProps) {
  useEffect(() => {
    const canonical = canonicalUrl(path)
    document.title = title
    document.documentElement.lang = 'en'

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: openGraphType(kind) })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: OG_IMAGE_URL })
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: OG_IMAGE_WIDTH })
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: OG_IMAGE_HEIGHT })
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: OG_IMAGE_ALT })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:site"]', { name: 'twitter:site', content: '@Artiore' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: OG_IMAGE_URL })
    upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: OG_IMAGE_ALT })
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
      }),
    )
  }, [author, authorOrganization, crumbName, datePublished, description, headline, kind, noindex, path, title])

  return null
}
