/**
 * Language options for the Global Injustice Investigation.
 *
 * English only in this edition. To add a translation later, follow the Digital
 * Exposure pattern: add a language here, add a translated route beside this
 * one, and include it in `globalInjusticeAlternates`. Do not point hreflang at
 * a route that does not exist.
 */

export const globalInjusticeLanguages = [
  {
    code: 'en' as const,
    label: 'English',
    nativeLabel: 'English',
    dir: 'ltr' as const,
  },
]

export function globalInjusticeAlternates(path: string) {
  return [
    { hreflang: 'en', path },
    { hreflang: 'x-default', path },
  ]
}
