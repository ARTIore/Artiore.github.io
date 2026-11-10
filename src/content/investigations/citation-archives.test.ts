import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { citationArchiveFor, NO_ARCHIVE_NOTE } from '../../components/content/CitationArchive'
import { renderInvestigationMarkdown } from './markdown'

const ED = 'https://cyber.dhs.gov/assets/report/ed-19-01.pdf'
const WAYBACK = 'https://web.archive.org/web/20251214210337/https://cyber.dhs.gov/assets/report/ed-19-01.pdf'
const INFOBLOX = 'https://www.infoblox.com/blog/threat-intelligence/who-knew-domain-hijacking-is-easy/'

function htmlFor(markdown: string) {
  const { body } = renderInvestigationMarkdown(markdown, { title: 'Citation', slugs: new Set(), partsToc: false })
  return renderToStaticMarkup(createElement('div', null, body))
}

describe('citation archives', () => {
  it('keeps the original URL and adds only a confirmed archive', () => {
    const html = htmlFor(`See [S12](${ED}) and ${INFOBLOX}`)
    expect(html).toContain(`href="${ED}"`)
    expect(html).toContain(`href="${WAYBACK}"`)
    expect(html).toContain('Archived copy (Wayback Machine, 14 Dec 2025)')
    expect(html).toContain(`href="${INFOBLOX}"`)
    expect(html).toContain(NO_ARCHIVE_NOTE)
    expect(html).not.toContain('archive.ph')
  })

  it('does not invent an archive for the three unresolved citations', () => {
    expect(citationArchiveFor('https://www.sittingducks.fyi/')).toEqual({ note: NO_ARCHIVE_NOTE })
    expect(citationArchiveFor('http://www.china.org.cn/world/2026-10/12/content_118729771.shtml')).toEqual({
      note: NO_ARCHIVE_NOTE,
    })
    expect(citationArchiveFor(WAYBACK)).toBeUndefined()
  })
})
