import { useMemo, useState, type ReactNode } from 'react'
import { content, type Locale } from '../content/siteContent'
import { LocaleContext } from './localeStore'

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      copy: content[locale],
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
