import type { SeoKind } from '../types'

export const fieldManualMeta: {
  path: string
  headTitle: string
  description: string
  kind: SeoKind
  crumbName: string
  headline: string
  author: string
  authorOrganization: string
  datePublished: string
  inLanguage: string
  locale: string
} = {
  path: '/field-manual',
  headTitle: "ARTIORE Field Manual, 23 October 2026 | Artiais.com",
  description: "Read Part I for the seven regional briefs, Part II for the cross-cutting projects, Part III for the 30-day conduct plan, and keep Part IV as a reference.",
  kind: 'article',
  crumbName: 'Field Manual',
  headline: 'ARTIORE Field Manual',
  author: 'Zain Ul Abdin',
  authorOrganization: 'ARTIORE',
  datePublished: '2026-10-23',
  inLanguage: 'en',
  locale: 'en_US',
}

export const frenchFieldManualMeta: typeof fieldManualMeta = {
  path: '/field-manual/fr',
  headTitle: 'Manuel de terrain ARTIORE, 23 October 2026 | Artiais.com',
  description:
    'Lisez la synthèse, puis la note de situation, la page « cette semaine » et le dossier de plaidoyer de la seule région sur laquelle vous agirez vraiment.',
  kind: 'article',
  crumbName: 'Manuel de terrain',
  headline: 'Manuel de terrain ARTIORE',
  author: 'Zain Ul Abdin',
  authorOrganization: 'ARTIORE',
  datePublished: '2026-10-23',
  inLanguage: 'fr',
  locale: 'fr_FR',
}

export const fieldManualMetas = [fieldManualMeta, frenchFieldManualMeta]
