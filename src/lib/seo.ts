export const SITE_NAME = 'ARTIore'
export const SITE_URL = 'https://artiore.github.io'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

type Metadata = {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
}

function upsertMeta(key: string, content: string, attr: 'name' | 'property' = 'name') {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.content = content
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }
  link.href = href
}

export function applyMetadata({ title, description, path = '/', type = 'website' }: Metadata) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = `${SITE_URL}${path}`

  document.title = fullTitle
  upsertMeta('description', description)
  upsertMeta('og:type', type, 'property')
  upsertMeta('og:title', fullTitle, 'property')
  upsertMeta('og:description', description, 'property')
  upsertMeta('og:url', url, 'property')
  upsertMeta('og:image', DEFAULT_OG_IMAGE, 'property')
  upsertMeta('twitter:card', 'summary_large_image')
  upsertMeta('twitter:title', fullTitle)
  upsertMeta('twitter:description', description)
  upsertMeta('twitter:image', DEFAULT_OG_IMAGE)
  upsertCanonical(url)
}
