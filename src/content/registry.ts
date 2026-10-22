import { blogIndexMeta, blogPosts } from './blog'
import { documentPages } from './documents'
import { legalPages } from './legal'
import { libraryPages } from './library'
import type { PageDocument, SeoEntry } from './types'

export const homeMeta = {
  path: '/',
  headTitle: 'ARTIore | Artiais, AI infrastructure platform',
  description:
    'Artiais is the AI infrastructure platform for ARTIore. Clarity-first reasoning maps evidence, assumptions, trade-offs, practical next steps, and limits. The system is a witness, not a verdict.',
}

export const contactMeta = {
  path: '/contact',
  headTitle: 'Contact | ARTIore',
  description:
    'Email artiste@artiore.com. X, LinkedIn, Discord, and Instagram, plus artiore.com, the Artiore Consortium, GitHub, and Eternia.',
}

export const engineMeta = {
  path: '/engine',
  headTitle: 'Eternia Aurora Sovereign Engine | ARTIore',
  description:
    'Eternia Aurora is a local-first generative ambient instrument in the browser. No server and no account. Play it on artiais.com or read the source on GitHub.',
}

export const systemMeta = {
  path: '/system-documentation',
  headTitle: 'System documentation | ARTIore',
  description:
    'Reasoning architecture, the five-line doctrine, four engine layers, the five-part response, and the hosted Acore systems document set.',
}

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

export const seoEntries: SeoEntry[] = [
  ...customMetas.map((meta) => ({ ...meta, sitemap: true, prerender: true })),
  ...allDocuments.map((page) => ({
    path: page.path,
    headTitle: page.headTitle,
    description: page.description,
    sitemap: page.sitemap !== false,
    prerender: true,
  })),
  {
    path: '/framework.html',
    headTitle: 'Grand Directional Prompt Framework V1.1 | ARTIore',
    description:
      'The Grand Directional Prompt Framework, V1.1, Zero-Drift Edition. A cognitive charter and operating protocol by Zain Ul Abdin.',
    sitemap: true,
    prerender: false,
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
