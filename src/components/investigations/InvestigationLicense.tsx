import { OpensInNewTab } from '../content/SiteLink'
import { investigationLicenseUrl } from '../../content/investigations/catalog'
import { investigationNewTab } from '../../content/investigations/locale'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

/** Reuse notice for the Global Digital Exposure Investigation. */
export function InvestigationLicense({ locale = 'en' }: { locale?: 'en' | 'ar' }) {
  const notice = locale === 'ar' ? investigationNewTab.ar : undefined
  if (locale === 'ar') {
    return (
      <p className="mt-4 max-w-[68ch] text-sm leading-relaxed text-muted">
        هذا التحقيق مرخّص بموجب Creative Commons Attribution 4.0 International (
        <a className={linkClass} href={investigationLicenseUrl} rel="noreferrer" target="_blank">
          CC BY 4.0
          <OpensInNewTab dir={notice?.dir} lang={notice?.lang} text={notice?.text} />
        </a>
        ). يجوز مشاركته وتعديله، بما في ذلك تجاريًا، مع نسبة العمل إلى Zain Ul Abdin (ARTIore) ورابط إلى{' '}
        <a className={linkClass} href="https://artiais.com/">
          <bdi dir="ltr">artiais.com</bdi>
        </a>
        .
      </p>
    )
  }
  return (
    <p className="mt-4 max-w-[68ch] text-sm leading-relaxed text-muted">
      This investigation is licensed under Creative Commons Attribution 4.0 International (
      <a className={linkClass} href={investigationLicenseUrl} rel="noreferrer" target="_blank">
        CC BY 4.0
        <OpensInNewTab />
      </a>
      ). You may share and adapt it, including commercially, with credit to Zain Ul Abdin (ARTIore) and a link to{' '}
      <a className={linkClass} href="https://artiais.com/">
        artiais.com
      </a>
      .
    </p>
  )
}
