import { OpensInNewTab } from './SiteLink'

/** Shown when Wayback and archive.today have no confirmed copy of the cited URL. */
export const NO_ARCHIVE_NOTE =
  '(original link no longer resolves; no archived copy found, checked 2026-11-09)'

const ED_19_01 = 'https://web.archive.org/web/20251214210337/https://cyber.dhs.gov/assets/report/ed-19-01.pdf'

type ArchiveRecord = { href: string; label: string } | { note: string }

const records = new Map<string, ArchiveRecord>([
  [
    'https://cyber.dhs.gov/assets/report/ed-19-01.pdf',
    { href: ED_19_01, label: 'Archived copy (Wayback Machine, 14 Dec 2025)' },
  ],
  ['https://www.sittingducks.fyi/', { note: NO_ARCHIVE_NOTE }],
  ['https://www.sittingducks.fyi', { note: NO_ARCHIVE_NOTE }],
  ['https://www.infoblox.com/blog/threat-intelligence/who-knew-domain-hijacking-is-easy/', { note: NO_ARCHIVE_NOTE }],
  ['https://www.infoblox.com/blog/threat-intelligence/who-knew-domain-hijacking-is-easy', { note: NO_ARCHIVE_NOTE }],
  ['http://www.china.org.cn/world/2026-10/12/content_118729771.shtml', { note: NO_ARCHIVE_NOTE }],
])

export function citationArchiveFor(url: string) {
  const trimmed = url.trim()
  return records.get(trimmed) ?? records.get(trimmed.replace(/\/$/, '')) ?? records.get(`${trimmed}/`)
}

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright break-all'

/** Secondary archive link, or the no-copy note, placed after an original citation. */
export function CitationArchiveAside({
  url,
  newTab,
}: {
  url: string
  newTab?: { text: string; lang: string; dir: 'ltr' | 'rtl' }
}) {
  const record = citationArchiveFor(url)
  if (!record) return null
  if ('href' in record) {
    return (
      <>
        {' '}
        <a className={linkClass} dir="ltr" href={record.href} rel="noreferrer" target="_blank">
          {record.label}
          {newTab ? <OpensInNewTab dir={newTab.dir} lang={newTab.lang} text={newTab.text} /> : <OpensInNewTab />}
        </a>
      </>
    )
  }
  return <span dir="ltr"> {record.note}</span>
}
