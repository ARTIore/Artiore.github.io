import { describe, expect, it } from 'vitest'
import { seoEntries } from './registry'
import {
  featuredInvestigations,
  normalizeRelatedPath,
  relatedPlacements,
} from './related-reading'

const prerendered = new Set(
  seoEntries.filter((entry) => entry.prerender !== false).map((entry) => normalizeRelatedPath(entry.path)),
)

function routeOf(href: string) {
  return normalizeRelatedPath(href)
}

describe('related reading routes', () => {
  it('points the home featured investigations at prerendered hubs', () => {
    expect(featuredInvestigations.map((item) => routeOf(item.href))).toEqual([
      '/investigations/digital-exposure',
      '/investigations/global-injustice',
    ])
    for (const item of featuredInvestigations) {
      expect(prerendered.has(routeOf(item.href)), item.href).toBe(true)
      expect(item.label.length).toBeGreaterThan(10)
      expect(item.description.length).toBeGreaterThan(40)
    }
  })

  it('points every related-link placement at a real prerendered route', () => {
    expect(relatedPlacements.length).toBeGreaterThan(10)
    const sources = new Set<string>()
    for (const placement of relatedPlacements) {
      const source = normalizeRelatedPath(placement.sourcePath)
      expect(prerendered.has(source), placement.id).toBe(true)
      sources.add(source)
      expect(placement.links.length).toBeGreaterThan(0)
      for (const link of placement.links) {
        expect(link.href.startsWith('/'), link.href).toBe(true)
        expect(prerendered.has(routeOf(link.href)), `${placement.id} -> ${link.href}`).toBe(true)
        expect(link.label.length).toBeGreaterThan(20)
      }
      if (placement.lang === 'ar') {
        expect(placement.dir).toBe('rtl')
        expect(placement.links.every((link) => link.note?.includes('الإنجليزية'))).toBe(true)
      }
    }
    expect(sources.has('/')).toBe(false)
    expect(sources.has('/investigations/digital-exposure')).toBe(true)
    expect(sources.has('/investigations/global-injustice')).toBe(true)
    expect(sources.has('/academy/research')).toBe(true)
  })
})
