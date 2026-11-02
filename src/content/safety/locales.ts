export type SafetyLocaleCode = 'en' | 'fr' | 'ur' | 'ar'

export type SafetyLocale = {
  code: SafetyLocaleCode
  label: string
  nativeLabel: string
  lang: string
  dir: 'ltr' | 'rtl'
  /** True only when a human-written content module exists. Do not machine-translate. */
  available: boolean
}

export const safetyLocales: readonly SafetyLocale[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', lang: 'en', dir: 'ltr', available: true },
  { code: 'fr', label: 'French', nativeLabel: 'Français', lang: 'fr', dir: 'ltr', available: false },
  { code: 'ur', label: 'Urdu', nativeLabel: 'اردو', lang: 'ur', dir: 'rtl', available: false },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', lang: 'ar', dir: 'rtl', available: false },
]

export function getSafetyLocale(code: SafetyLocaleCode = 'en') {
  const locale = safetyLocales.find((item) => item.code === code && item.available)
  if (!locale) {
    throw new Error(`No human-written safety text for ${code}. Do not machine-translate this section.`)
  }
  return locale
}
