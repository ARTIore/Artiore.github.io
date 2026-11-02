import { investigationLicenseUrl } from '../../content/investigations/catalog'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

/** Reuse notice for the Global Digital Exposure Investigation. */
export function InvestigationLicense() {
  return (
    <p className="mt-4 max-w-[68ch] text-sm leading-relaxed text-muted">
      This investigation is licensed under Creative Commons Attribution 4.0 International (
      <a className={linkClass} href={investigationLicenseUrl} rel="noreferrer" target="_blank">
        CC BY 4.0
      </a>
      ). You may share and adapt it, including commercially, with credit to Zain Ul Abdin (ARTIore) and a link to{' '}
      <a className={linkClass} href="https://artiais.com/">
        artiais.com
      </a>
      .
    </p>
  )
}
