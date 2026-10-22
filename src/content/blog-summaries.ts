export type BlogSummary = {
  slug: string
  path: string
  title: string
  category: string
  date: string
  minutes: string
  author: string
  summary: string
  tags: string[]
}

const author = 'Zain Ul Abdin'
const date = 'April 16, 2026'

export const blogSummaries: BlogSummary[] = [
  {
    slug: 'artiore-ecosystem',
    path: '/blog/artiore-ecosystem',
    title: 'The Artiore ecosystem: connected platforms for clarity',
    category: 'Framework',
    date,
    minutes: '6 min read',
    author,
    summary:
      'How Artiore, Artiais, and the Artiore Consortium are described as one ecosystem for clarity-first reasoning, infrastructure, and ethical development.',
    tags: ['ecosystem', 'infrastructure', 'collaboration'],
  },
  {
    slug: 'sultan-authority-cannot-be-touched',
    path: '/blog/sultan-authority-cannot-be-touched',
    title: 'Sultān: the authority that cannot be touched',
    category: 'Doctrine',
    date,
    minutes: '5 min read',
    author,
    summary: 'Evidence before dominion. Alignment before force. An essay on Sultān as proof, not seized power.',
    tags: ['sultān', 'authority', 'revelation'],
  },
  {
    slug: 'engineers-oath-voltage-granted',
    path: '/blog/engineers-oath-voltage-granted',
    title: 'The engineer’s oath: voltage is granted, not taken',
    category: 'Protocol',
    date,
    minutes: '6 min read',
    author,
    summary: 'Before power flows, consent has to be established. The essay uses USB-C Power Delivery as the picture.',
    tags: ['engineering', 'consent', 'protocol'],
  },
  {
    slug: 'exhibit-k-forensic-witnesses',
    path: '/blog/exhibit-k-forensic-witnesses',
    title: 'Exhibit K: the forensic witnesses',
    category: 'Framework',
    date,
    minutes: '6 min read',
    author,
    summary:
      'Four witnesses that cannot be bribed. The essay’s architecture of evidence: galaxy, network node, damaged board, and Constitutional Orchard.',
    tags: ['Exhibit K', 'witnesses', 'forensic'],
  },
]

export const alsoOnArtioreBlog: Array<{ title: string; date: string; minutes: string; summary: string }> = [
  {
    title: 'Remote work security: protecting distributed teams',
    date: 'Apr 20, 2026',
    minutes: '10 min read',
    summary: 'The index describes zero-trust principles, endpoint protection, and a security-aware culture for distributed teams.',
  },
  {
    title: 'Data backup strategy: the 3-2-1 rule and beyond',
    date: 'Apr 19, 2026',
    minutes: '9 min read',
    summary: 'The index describes the 3-2-1 backup rule, implementation, and how to verify that backups work.',
  },
  {
    title: 'Strategic thinking vs. tactical execution',
    date: 'Apr 18, 2026',
    minutes: '8 min read',
    summary: 'The index describes the difference between high-level strategy and ground-level tactics.',
  },
  {
    title: 'Email security: recognizing sophisticated phishing attacks',
    date: 'Apr 17, 2026',
    minutes: '7 min read',
    summary: 'The index describes advanced social engineering that bypasses traditional email filters.',
  },
  {
    title: 'Breaking decision paralysis: a structured framework',
    date: 'Apr 16, 2026',
    minutes: '4 min read',
    summary: 'The index describes using the four-pillar framework when too many options cause a freeze.',
  },
]

export const blogIndexMeta = {
  path: '/blog',
  headTitle: 'ARTIore blog | Four essays by Zain Ul Abdin (2026)',
  description:
    'Four essays by Zain Ul Abdin from April 16, 2026: the ecosystem, Sultān, the engineer’s oath, and Exhibit K. More titles are listed from artiore.com/blog.',
  kind: 'page' as const,
  crumbName: 'Four essays',
}
