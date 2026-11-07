import { SiteLink } from '../content/SiteLink'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

const links = {
  en: [
    { href: '/investigations/digital-exposure/source-register/', label: 'Source register' },
    { href: '/investigations/digital-exposure/evidence-method/', label: 'Method' },
    { href: '/investigations/digital-exposure/#corrections', label: 'Corrections' },
  ],
  ar: [
    { href: '/investigations/digital-exposure/ar/source-register/', label: 'سجل المصادر' },
    { href: '/investigations/digital-exposure/ar/evidence-method/', label: 'منهج الأدلة' },
    { href: '/investigations/digital-exposure/ar/#corrections', label: 'سجل التصحيحات' },
  ],
} as const

/** Shared close of each Global Digital Exposure article. Not copied into each article file. */
export function InvestigationArticleFooter({ locale = 'en' }: { locale?: 'en' | 'ar' }) {
  const items = links[locale]
  return (
    <footer className="mt-12 max-w-[68ch] border-t border-white/10 pt-6 text-sm leading-relaxed text-cream/90">
      <p>
        ARTIore — independent research and intelligence practice. No sponsor, vendor or government reviewed this work
        before publication. Sources and evidence assessments are documented.
      </p>
      <nav aria-label={items.map((item) => item.label).join(', ')} className="mt-3">
        <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, index) => (
            <li className="inline-flex min-h-11 items-center" key={item.href}>
              {index > 0 ? (
                <span aria-hidden="true" className="me-2 text-muted">
                  ·
                </span>
              ) : null}
              <SiteLink className={linkClass} href={item.href}>
                {item.label}
              </SiteLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
