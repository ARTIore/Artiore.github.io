import { OG_IMAGE_URL, SITE_NAME, SITE_URL } from '../config/site'
import { links } from '../content/links'
import { breadcrumbItems, canonicalUrl } from '../content/urls'

export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

export type SeoKind = 'home' | 'page' | 'blog-post' | 'engine' | 'article'

export type JsonLdInput = {
  kind: SeoKind
  title: string
  description: string
  path: string
  crumbName: string
  headline?: string
  author?: string
  authorOrganization?: string
  datePublished?: string
  dateModified?: string
  inLanguage?: string
  image?: string
  faqs?: { question: string; answer: string }[]
}

export function openGraphType(kind: SeoKind | undefined) {
  return kind === 'blog-post' || kind === 'article' ? 'article' : 'website'
}

function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'ARTIore',
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/apple-touch-icon.png`,
      width: 180,
      height: 180,
    },
    sameAs: [
      links.artiore,
      links.consortium,
      links.x,
      links.linkedinCompany,
      links.github,
      links.instagram,
    ],
  }
}

function websiteNode(description: string) {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description,
    publisher: { '@id': ORGANIZATION_ID },
  }
}

function breadcrumbNode(path: string, crumbName: string) {
  const items = breadcrumbItems(path, crumbName)
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  }
}

export function buildJsonLd(input: JsonLdInput) {
  const canonical = canonicalUrl(input.path)
  const graph: Record<string, unknown>[] = [organizationNode()]

  if (input.kind === 'home') {
    graph.push(websiteNode(input.description))
  } else {
    graph.push(breadcrumbNode(input.path, input.crumbName))
  }

  if (input.kind === 'blog-post' && input.author && input.datePublished && input.headline) {
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      headline: input.headline,
      description: input.description,
      author: { '@type': 'Person', name: input.author },
      datePublished: input.datePublished,
      dateModified: input.dateModified ?? input.datePublished,
      url: canonical,
      mainEntityOfPage: canonical,
      image: input.image ?? OG_IMAGE_URL,
      publisher: { '@id': ORGANIZATION_ID },
      ...(input.inLanguage ? { inLanguage: input.inLanguage } : {}),
    })
  } else if (input.kind === 'article' && input.author && input.datePublished && input.headline) {
    const authors: Record<string, string>[] = [{ '@type': 'Person', name: input.author }]
    if (input.authorOrganization) {
      authors.push({ '@type': 'Organization', name: input.authorOrganization })
    }
    graph.push({
      '@type': 'Article',
      '@id': `${canonical}#article`,
      headline: input.headline,
      description: input.description,
      author: authors,
      datePublished: input.datePublished,
      dateModified: input.dateModified ?? input.datePublished,
      url: canonical,
      mainEntityOfPage: canonical,
      image: input.image ?? OG_IMAGE_URL,
      publisher: { '@id': ORGANIZATION_ID },
      ...(input.inLanguage ? { inLanguage: input.inLanguage } : {}),
    })
  } else if (input.kind === 'engine') {
    graph.push({
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: input.title,
      description: input.description,
      isPartOf: { '@id': WEBSITE_ID },
    })
    graph.push({
      '@type': 'SoftwareApplication',
      '@id': `${canonical}#software`,
      name: 'Eternia Aurora Sovereign Engine',
      applicationCategory: 'Generative ambient instrument',
      operatingSystem: 'Web browser',
      description: input.description,
      url: links.eternia,
      codeRepository: links.githubEternia,
      author: { '@type': 'Organization', name: 'Artiore' },
      featureList: ['Local-first', 'Runs in the browser', 'No server', 'No account'],
    })
  }

  if (input.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: input.faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    })
  }

  if (input.kind !== 'home' && !graph.some((node) => node['@type'] === 'WebPage' || node['@type'] === 'Article' || node['@type'] === 'BlogPosting')) {
    graph.push({
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: input.title,
      description: input.description,
      isPartOf: { '@id': WEBSITE_ID },
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
