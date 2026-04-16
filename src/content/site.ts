export type SecondaryPageKey =
  | 'about'
  | 'philosophy'
  | 'framework'
  | 'engine'
  | 'dossier'
  | 'resources'
  | 'blog'
  | 'case-studies'
  | 'applications'
  | 'implementation'
  | 'system-documentation'
  | 'api-documentation'
  | 'access'
  | 'try-demo'

export const primaryNav = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/philosophy', label: 'Philosophy' },
  { path: '/framework', label: 'Framework' },
  { path: '/engine', label: 'Engine' },
  { path: '/dossier', label: 'Dossier' },
  { path: '/resources', label: 'Resources' },
  { path: '/blog', label: 'Blog' },
]

export const secondaryPageContent: Record<
  SecondaryPageKey,
  {
    title: string
    description: string
    headline: string
    summary: string
  }
> = {
  about: {
    title: 'About',
    description: 'Why ARTIore exists and what it is designed to make visible.',
    headline: 'Why ARTIore exists',
    summary: 'ARTIore helps people see systems clearly before those systems create damage.',
  },
  philosophy: {
    title: 'Philosophy',
    description: 'The principles behind clarity-first intelligence design.',
    headline: 'Clarity is a form of protection',
    summary: 'We build awareness tools that reduce noise and preserve human judgment.',
  },
  framework: {
    title: 'Framework',
    description: 'The signal-first model for pattern, clarity, and action.',
    headline: 'Pattern over noise',
    summary: 'A disciplined framework for turning fragmented inputs into explainable understanding.',
  },
  engine: {
    title: 'Engine',
    description: 'How ARTIore combines human intuition and AI precision.',
    headline: 'Human + AI as a disciplined duo',
    summary: 'The engine is built for legibility, explainability, and trust over spectacle.',
  },
  dossier: {
    title: 'Dossier',
    description: 'Featured intelligence dossiers and case breakdowns.',
    headline: 'Featured dossier',
    summary: 'Read mission-focused analysis built to surface hidden structure and actionable context.',
  },
  resources: {
    title: 'Resources',
    description: 'Guides, essays, and practical references for awareness design.',
    headline: 'Resources for higher signal',
    summary: 'A growing library for researchers, operators, and high-agency learners.',
  },
  blog: {
    title: 'Blog',
    description: 'Ongoing notes on systems thinking, intelligence design, and implementation.',
    headline: 'Field notes',
    summary: 'Short, precise writing focused on clarity in complex environments.',
  },
  'case-studies': {
    title: 'Case Studies',
    description: 'Concrete examples of clarity-first analysis in practice.',
    headline: 'Case studies',
    summary: 'See how awareness workflows can expose risk earlier and guide sharper decisions.',
  },
  applications: {
    title: 'Applications',
    description: 'Use cases for founders, strategists, operators, and researchers.',
    headline: 'Applied intelligence',
    summary: 'ARTIore is designed for real-world contexts where ambiguity is expensive.',
  },
  implementation: {
    title: 'Implementation',
    description: 'Roadmap and execution model for adopting ARTIore workflows.',
    headline: 'Implementation track',
    summary: 'A staged path from insight to durable operational awareness.',
  },
  'system-documentation': {
    title: 'System Documentation',
    description: 'Core architecture, concepts, and product system documentation.',
    headline: 'System documentation',
    summary: 'Structured references covering product architecture and platform behavior.',
  },
  'api-documentation': {
    title: 'API Documentation',
    description: 'Developer-facing API references for future integrations.',
    headline: 'API documentation',
    summary: 'Technical documentation for integration and extension of intelligence capabilities.',
  },
  access: {
    title: 'Access / Contact',
    description: 'Request access, share context, or contact the ARTIore team.',
    headline: 'Access and contact',
    summary: 'Connect with ARTIore for collaboration, implementation, or mission alignment.',
  },
  'try-demo': {
    title: 'Try Demo',
    description: 'Preview ARTIore’s intelligence interface and interaction model.',
    headline: 'Try the demo',
    summary: 'Explore how ARTIore turns complex signals into explainable awareness.',
  },
}
