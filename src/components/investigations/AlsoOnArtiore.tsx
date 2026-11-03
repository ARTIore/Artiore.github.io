import { OpensInNewTab } from '../content/SiteLink'
import { investigationNewTab } from '../../content/investigations/locale'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

/** Normal follow link to a companion page on artiore.com. */
export function AlsoOnArtiore({ href, locale = 'en' }: { href: string; locale?: 'en' | 'ar' }) {
  const notice = locale === 'ar' ? investigationNewTab.ar : undefined
  return (
    <p className="mt-10 max-w-[68ch] text-sm leading-relaxed text-cream/90">
      {locale === 'ar' ? 'على artiore.com أيضًا:' : 'Also on artiore.com:'}{' '}
      <a className={`${linkClass} break-all`} dir="ltr" href={href} rel="noopener noreferrer" target="_blank">
        {href}
        {notice ? <OpensInNewTab dir={notice.dir} lang={notice.lang} text={notice.text} /> : <OpensInNewTab />}
      </a>
    </p>
  )
}
