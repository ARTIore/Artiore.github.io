import { useEffect } from 'react'
import { OG_IMAGE_URL, SITE_NAME, SITE_URL } from '../../config/site'

type SeoHeadProps = {
  title: string
  description: string
  path: string
  noindex?: boolean
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

export function SeoHead({ title, description, path, noindex = false }: SeoHeadProps) {
  useEffect(() => {
    const canonical = new URL(path, SITE_URL).toString()
    document.title = title
    document.documentElement.lang = 'en'

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: OG_IMAGE_URL })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: OG_IMAGE_URL })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: noindex ? 'noindex' : 'index,follow',
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
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: canonical,
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
      },
      image: OG_IMAGE_URL,
    })
  }, [description, noindex, path, title])

  return null
}
