import { injusticePages } from './dossiers'
import { globalInjusticeAlternates } from './locale'

export const globalInjusticeBase = '/investigations/global-injustice'

export const globalInjusticePublished = '2026-11-03'

/** Day the sources named on these pages were opened. */
export const globalInjusticeSourceCheck = '2026-11-03'

export const globalInjusticeHub = {
  path: globalInjusticeBase,
  title: 'Global Injustice Investigation',
  headTitle: 'Global Injustice Investigation | ARTIore',
  description:
    'Eleven public-record dossiers on courts, corruption, civic space, crime and spyware. Unconfirmed figures are marked, not used as findings.',
  crumbName: 'Global Injustice Investigation',
  lastmod: globalInjusticeSourceCheck,
}

export const globalInjusticePages = injusticePages

export const globalInjusticeMeta = [
  {
    path: globalInjusticeHub.path,
    headTitle: globalInjusticeHub.headTitle,
    description: globalInjusticeHub.description,
    crumbName: globalInjusticeHub.crumbName,
    headline: globalInjusticeHub.title,
    datePublished: globalInjusticePublished,
    dateModified: globalInjusticeSourceCheck,
    inLanguage: 'en' as const,
    locale: 'en_US' as const,
    lastmod: globalInjusticeHub.lastmod,
  },
  ...injusticePages.map((page) => ({
    path: page.path,
    headTitle: page.headTitle,
    description: page.description,
    crumbName: page.crumbName,
    headline: page.title,
    datePublished: globalInjusticePublished,
    dateModified: globalInjusticeSourceCheck,
    inLanguage: 'en' as const,
    locale: 'en_US' as const,
    lastmod: globalInjusticeSourceCheck,
  })),
]

export function globalInjusticeAlternatesFor(path: string) {
  return globalInjusticeAlternates(path)
}
