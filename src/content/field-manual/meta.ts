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

export const arabicFieldManualMeta: typeof fieldManualMeta = {
  path: '/field-manual/ar',
  headTitle: 'الدليل الميداني ARTIORE، 23 October 2026 | Artiais.com',
  description:
    'اقرأ الملخص التنفيذي، ثم إحاطة الوضع، وصفحة "هذا الأسبوع"، وحزمة المناصرة للإقليم الواحد الذي ستعمل بشأنه فعلًا. تجاوز الباقي إلى أن تحتاج إليه.',
  kind: 'article',
  crumbName: 'الدليل الميداني',
  headline: 'الدليل الميداني ARTIORE',
  author: 'Zain Ul Abdin',
  authorOrganization: 'ARTIORE',
  datePublished: '2026-10-23',
  inLanguage: 'ar',
  locale: 'ar_AR',
}

export const fieldManualMetas = [fieldManualMeta, frenchFieldManualMeta, arabicFieldManualMeta]

/** Companion page. Kept out of fieldManualMetas so it does not become an hreflang of the manual. */
export const pocketBookletMeta: typeof fieldManualMeta = {
  path: '/field-manual/pocket-booklet',
  headTitle: 'ARTIORE Pocket Booklet, 23 October 2026 | Artiais.com',
  description:
    'This is a pocket booklet for people who want to be useful without becoming propagandists. It is designed to be read in an hour and used for a month.',
  kind: 'article',
  crumbName: 'Pocket Booklet',
  headline: 'The Pocket Booklet',
  author: 'Zain Ul Abdin',
  authorOrganization: 'ARTIORE',
  datePublished: '2026-10-23',
  inLanguage: 'en',
  locale: 'en_US',
}

export const pocketBookletPdfPath = '/field-manual/ARTIORE-Pocket-Booklet-2026-10-23.pdf'

/** Companion gallery. Kept out of fieldManualMetas so it does not become an hreflang of the manual. */
export const carouselSeriesMeta: typeof fieldManualMeta = {
  path: '/field-manual/carousels',
  headTitle: 'ARTIORE Carousel Series, 23 October 2026 | Artiais.com',
  description:
    'Six ARTIORE carousels of 23 October 2026: the moral frame, seven places, the funding gap, before you share, a letter that works, and thirty days.',
  kind: 'article',
  crumbName: 'Carousels',
  headline: 'ARTIORE Carousel Series',
  author: 'Zain Ul Abdin',
  authorOrganization: 'ARTIORE',
  datePublished: '2026-10-23',
  inLanguage: 'en',
  locale: 'en_US',
}
