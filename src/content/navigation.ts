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
      { label: 'Digital safety academy', href: '/academy' },
    ],
  },
  {
    label: 'Learning',
    children: [
      { label: 'Digital safety lab', href: '/academy' },
      { label: 'Threat practice lab', href: '/academy/threat-lab' },
      { label: 'Safety navigator', href: '/academy/navigator' },
      { label: 'Recovery steps', href: '/academy/recovery' },
      { label: 'Evidence explorer', href: '/academy/evidence' },
    ],
  },
  {
    label: 'Research',
    children: [
      { label: 'Research review', href: '/academy/research' },
      { label: 'Evidence explorer', href: '/academy/evidence' },
      { label: 'Source links', href: '/academy/research/provenance' },
      { label: 'Correction requests', href: '/academy/research/corrections' },
      { label: 'Possible disagreements', href: '/academy/research/contradictions' },
    ],
  },
  {
    label: 'Investigation',
    children: [
      { label: 'Global Digital Exposure Investigation', href: '/investigations/digital-exposure/' },
      { label: 'Global Injustice Investigation', href: '/investigations/global-injustice/' },
      { label: 'Public safety checklist', href: '/investigations/digital-exposure/public-safety-checklist/' },
      { label: 'Deepfakes and AI payment fraud', href: '/investigations/digital-exposure/deepfake-ai-payment-fraud/' },
      { label: 'Regional reporting', href: '/investigations/digital-exposure/regional-reporting-limits/' },
      { label: 'Stalkerware and safety planning', href: '/investigations/digital-exposure/stalkerware-safety-planning/' },
      { label: 'Mobile exposure', href: '/investigations/digital-exposure/mobile-os-exposure/' },
      { label: 'Evidence method', href: '/investigations/digital-exposure/evidence-method/' },
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
  { label: 'Digital safety academy', href: '/academy' },
  { label: 'Threat practice lab', href: '/academy/threat-lab' },
  { label: 'Recovery steps', href: '/academy/recovery' },
  { label: 'Safety navigator', href: '/academy/navigator' },
  { label: 'Evidence explorer', href: '/academy/evidence' },
  { label: 'Research review', href: '/academy/research' },
  { label: 'Source links', href: '/academy/research/provenance' },
  { label: 'Correction requests', href: '/academy/research/corrections' },
  { label: 'Possible disagreements', href: '/academy/research/contradictions' },
  { label: 'Global Digital Exposure Investigation', href: '/investigations/digital-exposure/' },
  { label: 'Global Injustice Investigation', href: '/investigations/global-injustice/' },
  { label: 'Public safety checklist', href: '/investigations/digital-exposure/public-safety-checklist/' },
  { label: 'Deepfakes and AI payment fraud', href: '/investigations/digital-exposure/deepfake-ai-payment-fraud/' },
  { label: 'Regional reporting', href: '/investigations/digital-exposure/regional-reporting-limits/' },
  { label: 'Mobile exposure', href: '/investigations/digital-exposure/mobile-os-exposure/' },
  { label: 'Evidence method', href: '/investigations/digital-exposure/evidence-method/' },
  { label: 'Corrections', href: '/investigations/digital-exposure/#corrections' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]
