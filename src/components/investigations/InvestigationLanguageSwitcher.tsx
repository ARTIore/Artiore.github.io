import { SiteLink } from '../content/SiteLink'
import { investigationLanguages } from '../../content/investigations/locale'

const languages = investigationLanguages

export function InvestigationLanguageSwitcher({
  current,
  enPath,
  arPath,
}: {
  current: 'en' | 'ar'
  enPath: string
  arPath?: string
}) {
  const label = current === 'ar' ? 'اللغات' : 'Languages'
  const paths: { en: string; ar?: string } = { en: enPath, ar: arPath }
  return (
    <nav aria-label={label} className="no-print mb-6">
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gold">{label}</p>
      <ul className="flex flex-wrap gap-2">
        {languages.map((language) => {
          const href = paths[language.code]
          const active = language.code === current
          const className = active
            ? 'inline-flex min-h-11 items-center rounded-full border border-gold bg-gold/15 px-3 text-sm text-gold-bright'
            : 'inline-flex min-h-11 items-center rounded-full border border-white/15 px-3 text-sm text-cream/80 hover:border-gold/40 hover:text-cream'
          if (!href) return null
          if (active) {
            return (
              <li key={language.code}>
                <span aria-current="true" className={className} dir={language.dir} lang={language.code}>
                  {language.nativeLabel}
                </span>
              </li>
            )
          }
          return (
            <li key={language.code}>
              <SiteLink className={className} href={href}>
                <span dir={language.dir} lang={language.code}>
                  {language.nativeLabel}
                </span>
              </SiteLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
