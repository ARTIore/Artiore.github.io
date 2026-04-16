import { useEffect } from 'react'

type SeoHeadProps = {
  title: string
  description: string
  path: string
}

export function SeoHead({ title, description, path }: SeoHeadProps) {
  useEffect(() => {
    const canonicalBase = 'https://artiais.com'
    document.title = `${title} | ARTIore`

    const existingDescription = document.querySelector('meta[name="description"]')
    if (existingDescription) {
      existingDescription.setAttribute('content', description)
    } else {
      const descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      descriptionTag.setAttribute('content', description)
      document.head.appendChild(descriptionTag)
    }

    const canonicalPath = new URL(path, canonicalBase).toString()
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalPath)

    let schemaTag = document.getElementById('artiore-schema')
    if (!schemaTag) {
      schemaTag = document.createElement('script')
      schemaTag.id = 'artiore-schema'
      schemaTag.setAttribute('type', 'application/ld+json')
      document.head.appendChild(schemaTag)
    }

    schemaTag.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: canonicalPath,
        isPartOf: {
          '@type': 'WebSite',
          name: 'ARTIore',
          url: canonicalBase,
        },
      })
  }, [description, path, title])

  return null
}
