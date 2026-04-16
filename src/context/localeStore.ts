import { createContext } from 'react'
import { content, type Locale } from '../content/siteContent'

export type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  copy: (typeof content)[Locale]
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
