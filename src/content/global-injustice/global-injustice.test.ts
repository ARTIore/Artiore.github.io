import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { injusticePages } from './dossiers'
import { ladderRungs } from './ladder'
import { globalInjusticeAlternates } from './locale'
import { injusticeSources } from './sources'
import { globalInjusticeHub, globalInjusticeMeta } from './catalog'
import { seoEntries } from '../registry'
import { footerPages, primaryNav } from '../navigation'

function sha256(path: string) {
  return createHash('sha256').update(readFileSync(path)).digest('hex')
}

const otherGrades = ['Confirmed', 'Demonstrated', 'Plausible', 'Unsupported']
const recordStatuses = ['Verified', 'Unverified']

describe('Global Injustice Investigation', () => {
  it('keeps Digital Exposure authority files byte-for-byte', () => {
    const lines = readFileSync('src/content/investigations/english-authority.sha256', 'utf8')
      .trim()
      .split('\n')
    expect(lines.length).toBeGreaterThan(20)
    for (const line of lines) {
      const digest = line.slice(0, 64)
      const path = line.slice(66)
      expect(sha256(path), path).toBe(digest)
    }
  })

  it('publishes an English hub, eleven dossiers and a synthesis', () => {
    expect(injusticePages.map((page) => page.id)).toEqual([
      'L1',
      'L2',
      'L3',
      'L4',
      'L5',
      'L6',
      'L7',
      'L8',
      'L9',
      'L10',
      'L11',
      'synthesis',
    ])
    const paths = seoEntries.filter((entry) => entry.path.startsWith('/investigations/global-injustice'))
    expect(paths.map((entry) => entry.path)).toEqual([
      globalInjusticeHub.path,
      ...injusticePages.map((page) => page.path),
    ])
    expect(globalInjusticeMeta).toHaveLength(injusticePages.length + 1)
    for (const entry of paths) {
      expect(entry.inLanguage).toBe('en')
      expect(entry.locale).toBe('en_US')
      expect(entry.dir).toBeUndefined()
      expect(entry.headTitle.endsWith(' | ARTIore')).toBe(true)
      expect([...entry.headTitle].length).toBeGreaterThanOrEqual(30)
      expect([...entry.headTitle].length).toBeLessThanOrEqual(60)
      expect([...entry.description].length).toBeGreaterThanOrEqual(120)
      expect([...entry.description].length).toBeLessThanOrEqual(160)
      expect(entry.sitemap).toBe(true)
      expect(entry.prerender).toBe(true)
      expect(entry.alternates).toEqual(globalInjusticeAlternates(entry.path))
      expect(entry.alternates?.some((item) => item.hreflang === 'ar')).toBe(false)
    }
  })

  it('keeps this ladder separate from Verified and from Confirmed', () => {
    expect(ladderRungs).toEqual(['ESTABLISHED', 'DOCUMENTED IN PART', 'CONTESTED', 'OPEN'])
    for (const rung of ladderRungs) {
      expect(otherGrades).not.toContain(rung)
      expect(recordStatuses).not.toContain(rung)
    }
    for (const page of injusticePages) {
      expect(page.caseAgainst.length).toBeGreaterThan(40)
      expect(page.falsifier.length).toBeGreaterThan(40)
      for (const block of page.record) {
        expect(ladderRungs).toContain(block.rung)
      }
    }
  })

  it('lists the investigation beside Digital Exposure and does not point fraud help at the FTC', () => {
    const investigation = primaryNav.find((item) => item.label === 'Investigation')
    expect(investigation && 'children' in investigation).toBe(true)
    if (investigation && 'children' in investigation) {
      expect(investigation.children.some((item) => item.href === '/investigations/digital-exposure/')).toBe(true)
      expect(investigation.children.some((item) => item.href === '/investigations/global-injustice/')).toBe(true)
    }
    expect(footerPages.some((item) => item.href === '/investigations/global-injustice/')).toBe(true)
    const corpus = [
      ...injusticePages.flatMap((page) => [
        page.lead,
        page.caseFor,
        page.caseAgainst,
        ...page.record.map((block) => block.text),
        ...page.heldBack.map((item) => `${item.deskClaim} ${item.detail}`),
      ]),
      ...Object.values(injusticeSources).map((source) => source.url),
    ].join('\n')
    expect(corpus.toLowerCase()).not.toContain('ftc.gov')
    expect(injusticePages.find((page) => page.id === 'L7')?.sourceIds).toContain('cafc')
    expect(injusticeSources.cafc.url).toContain('antifraudcentre-centreantifraude.ca')
  })

  it('logs every published source as verified and counts the rest', () => {
    const log = JSON.parse(readFileSync('data/global-injustice/verification-log.json', 'utf8')) as {
      entries: { id: string; url: string; status: string; claim: string }[]
    }
    const allowed = new Set(['verified', 'replaced', 'removed', 'could not access'])
    for (const entry of log.entries) {
      expect(allowed.has(entry.status), entry.id).toBe(true)
      expect(entry.url.startsWith('https://'), entry.id).toBe(true)
      expect(entry.claim.length, entry.id).toBeGreaterThan(20)
    }
    const verifiedUrls = new Set(log.entries.filter((entry) => entry.status === 'verified').map((entry) => entry.url))
    for (const source of Object.values(injusticeSources)) {
      expect(verifiedUrls.has(source.url), source.id).toBe(true)
    }
    for (const page of injusticePages) {
      for (const sourceId of page.sourceIds) {
        expect(injusticeSources[sourceId], sourceId).toBeTruthy()
      }
    }
    const counts: Record<string, number> = {
      verified: 0,
      replaced: 0,
      removed: 0,
      'could not access': 0,
    }
    for (const entry of log.entries) counts[entry.status] += 1
    expect(counts.verified).toBeGreaterThan(20)
    expect(counts.replaced).toBeGreaterThan(0)
    expect(counts.removed).toBeGreaterThan(0)
    expect(counts['could not access']).toBeGreaterThan(0)
  })
})
