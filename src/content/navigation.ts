export type NavLinkItem = {
  label: string
  href: string
}

export type NavItem =
  | NavLinkItem
  | {
      label: string
      children: NavLinkItem[]
    }

export const primaryNav: NavItem[] = [
  {
    label: 'Platform',
    children: [
      { label: 'About', href: '/about' },
      { label: 'Philosophy', href: '/philosophy' },
      { label: 'Origin', href: '/origin' },
      { label: 'Doctrine', href: '/doctrine' },
      { label: 'Protocol', href: '/protocol' },
      { label: 'Applications', href: '/applications' },
    ],
  },
  {
    label: 'Framework',
    children: [
      { label: 'Six-layer framework', href: '/how-it-works' },
      { label: 'Prompt Framework V1.1', href: '/framework.html' },
    ],
  },
  { label: 'Engine', href: '/engine' },
  {
    label: 'Docs',
    children: [
      { label: 'Resources', href: '/resources' },
      { label: 'System documentation', href: '/system-documentation' },
      { label: 'Implementation', href: '/implementation' },
      { label: 'Case studies', href: '/case-studies' },
      { label: 'UAE dossier', href: '/dossier' },
      { label: 'Field manual', href: '/field-manual' },
    ],
  },
  {
    label: 'Investigation',
    children: [
      { label: 'Global Digital Exposure Investigation', href: '/investigations/digital-exposure/' },
      { label: 'Public safety checklist', href: '/investigations/digital-exposure/public-safety-checklist/' },
      { label: 'Source register', href: '/investigations/digital-exposure/source-register/' },
      { label: 'Corrections', href: '/investigations/digital-exposure/#corrections' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const footerPages: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Origin', href: '/origin' },
  { label: 'Doctrine', href: '/doctrine' },
  { label: 'Protocol', href: '/protocol' },
  { label: 'Six-layer framework', href: '/how-it-works' },
  { label: 'Prompt Framework V1.1', href: '/framework.html' },
  { label: 'Engine', href: '/engine' },
  { label: 'Resources', href: '/resources' },
  { label: 'System documentation', href: '/system-documentation' },
  { label: 'Implementation', href: '/implementation' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Applications', href: '/applications' },
  { label: 'UAE dossier', href: '/dossier' },
  { label: 'Field manual', href: '/field-manual' },
  { label: 'Global Digital Exposure Investigation', href: '/investigations/digital-exposure/' },
  { label: 'Public safety checklist', href: '/investigations/digital-exposure/public-safety-checklist/' },
  { label: 'Corrections', href: '/investigations/digital-exposure/#corrections' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]
