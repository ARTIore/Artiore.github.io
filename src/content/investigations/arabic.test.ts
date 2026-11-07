import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { claimsPageData } from './claims-data'
import { arabicClaimWording } from './ar/claim-copy'
import { arabicInvestigationMeta, arabicPieceView } from './ar/meta'
import { gradeLabelAr, gradePhraseAr, investigationAlternates, recordStatusAr } from './locale'
import { investigationPieces } from './catalog'
import { seoEntries } from '../registry'

function sha256(path: string) {
  return createHash('sha256').update(readFileSync(path)).digest('hex')
}

function firstHeading(markdown: string) {
  const body = markdown.replace(/^---[\s\S]*?\n---\n/, '')
  const match = /^# (.+)$/m.exec(body)
  return match?.[1]
}

describe('Arabic investigation', () => {
  it('keeps the English claim ledger, chain, and article sources byte-for-byte', () => {
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

  it('does not treat Confirmed as Verified', () => {
    expect(gradeLabelAr.Confirmed).toBe('مؤكَّد')
    expect(gradeLabelAr.Demonstrated).toBe('مُبرهَن')
    expect(gradeLabelAr.Plausible).toBe('معقول')
    expect(gradeLabelAr.Unsupported).toBe('غير مدعوم')
    expect(recordStatusAr.Verified).toBe('مُتحقَّق منه')
    expect(recordStatusAr.Unverified).toBe('غير مُتحقَّق منه')
    expect(gradeLabelAr.Confirmed).not.toBe(recordStatusAr.Verified)
    expect(gradeLabelAr.Confirmed).not.toContain('متحق')
    expect(gradeLabelAr.Unsupported).not.toContain('متحق')
    expect(gradePhraseAr['Plausible but unverified']).toContain('معقول')
    expect(gradePhraseAr['Plausible but unverified']).toContain('غير مُتحقَّق منه')
    expect(claimsPageData.claims.some((claim) => claim.label === 'Confirmed')).toBe(true)
    expect(claimsPageData.claims.some((claim) => claim.label === 'Demonstrated')).toBe(true)
  })

  it('translates every published claim wording without dropping one', () => {
    const missing = claimsPageData.claims.filter((claim) => claim.wording && !arabicClaimWording[claim.id])
    expect(missing.map((claim) => claim.id)).toEqual([])
  })

  it('publishes an Arabic route with lang, dir, hreflang, and a title ending in ARTIore', () => {
    const arabic = seoEntries.filter((entry) => entry.inLanguage === 'ar' && entry.path.includes('/investigations/digital-exposure'))
    const translated = investigationPieces.filter((piece) => arabicPieceView(piece.slug))
    expect(arabic.length).toBe(translated.length + 2)
    for (const entry of arabic) {
      expect(entry.dir).toBe('rtl')
      expect(entry.locale).toBe('ar_AR')
      expect(entry.headTitle.endsWith(' | ARTIore')).toBe(true)
      expect([...entry.headTitle].length).toBeGreaterThanOrEqual(30)
      expect([...entry.headTitle].length).toBeLessThanOrEqual(60)
      expect([...entry.description].length).toBeGreaterThanOrEqual(120)
      expect([...entry.description].length).toBeLessThanOrEqual(160)
      const alternates = entry.alternates ?? []
      expect(alternates.map((item) => item.hreflang).sort()).toEqual(['ar', 'en', 'x-default'])
    }
    const hub = arabic.find((entry) => entry.path === '/investigations/digital-exposure/ar')
    expect(hub?.alternates).toEqual(investigationAlternates('/investigations/digital-exposure'))
    expect(arabicInvestigationMeta.some((entry) => entry.path === '/investigations/digital-exposure/ar/perimeter')).toBe(true)
  })

  it('matches each Arabic article heading to the catalog title', () => {
    for (const piece of investigationPieces) {
      const arabic = arabicPieceView(piece.slug)
      if (!arabic) {
        expect(piece.slug).toBe('mobile-os-exposure')
        continue
      }
      const markdown = readFileSync(`src/content/investigations/source/ar/${piece.file}`, 'utf8')
      expect(firstHeading(markdown), piece.slug).toBe(arabic?.title)
    }
  })
})
