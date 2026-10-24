import type { FieldManualLanguage } from './types'

/** Later translations set `available` when their content module and route exist. */
export const fieldManualLanguages: FieldManualLanguage[] = [
  {
    code: 'en',
    label: 'English',
    nativeLabel: 'English',
    dir: 'ltr',
    path: '/field-manual',
    available: true,
  },
  {
    code: 'fr',
    label: 'French',
    nativeLabel: 'Français',
    dir: 'ltr',
    path: '/field-manual/fr',
    available: true,
  },
  {
    code: 'es',
    label: 'Spanish',
    nativeLabel: 'Español',
    dir: 'ltr',
    path: '/field-manual/es',
    available: false,
  },
  {
    code: 'ur',
    label: 'Urdu',
    nativeLabel: 'اردو',
    dir: 'rtl',
    path: '/field-manual/ur',
    available: false,
  },
  {
    code: 'hi',
    label: 'Hindi',
    nativeLabel: 'हिन्दी',
    dir: 'ltr',
    path: '/field-manual/hi',
    available: false,
  },
  {
    code: 'ar',
    label: 'Arabic',
    nativeLabel: 'العربية',
    dir: 'rtl',
    path: '/field-manual/ar',
    available: true,
  },
]
