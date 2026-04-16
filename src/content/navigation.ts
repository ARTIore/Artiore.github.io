export type NavKey =
  | 'home'
  | 'about'
  | 'philosophy'
  | 'framework'
  | 'engine'
  | 'dossier'
  | 'resources'
  | 'blog'
  | 'caseStudies'
  | 'applications'
  | 'implementation'
  | 'systemDocs'
  | 'apiDocs'
  | 'contact'

export const navItems: Array<{ key: NavKey; path: string }> = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'philosophy', path: '/philosophy' },
  { key: 'framework', path: '/framework' },
  { key: 'engine', path: '/engine' },
  { key: 'dossier', path: '/dossier' },
  { key: 'resources', path: '/resources' },
  { key: 'blog', path: '/blog' },
  { key: 'caseStudies', path: '/case-studies' },
  { key: 'applications', path: '/applications' },
  { key: 'implementation', path: '/implementation' },
  { key: 'systemDocs', path: '/system-documentation' },
  { key: 'apiDocs', path: '/api-documentation' },
  { key: 'contact', path: '/contact' },
]
