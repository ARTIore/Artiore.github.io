import { describe, expect, it } from 'vitest'
import { seoEntries } from '../registry'
import { supplyChainDescription, supplyChainHeadTitle, supplyChainPath } from './catalog'
import { deviceChecks } from './checks'
import { claimLedger } from './register'

describe('supply-chain investigation', () => {
  it('publishes one English page with a Nest Guard description', () => {
    const entry = seoEntries.find((item) => item.path === supplyChainPath)
    expect(entry).toBeDefined()
    expect(entry?.headTitle).toBe(supplyChainHeadTitle)
    expect(entry?.headTitle.endsWith(' | ARTIore')).toBe(true)
    expect([...supplyChainHeadTitle].length).toBeGreaterThanOrEqual(30)
    expect([...supplyChainHeadTitle].length).toBeLessThanOrEqual(60)
    expect([...supplyChainDescription].length).toBeGreaterThanOrEqual(120)
    expect([...supplyChainDescription].length).toBeLessThanOrEqual(160)
    expect(supplyChainDescription.toLowerCase()).toContain('nest guard')
    expect(supplyChainDescription.toLowerCase()).not.toContain('smart-speaker')
    expect(entry?.prerender).not.toBe(false)
  })

  it('does not send the device checks to the FTC', () => {
    const text = deviceChecks.map((item) => `${item.title} ${item.body} ${item.links.map((link) => link.href).join(' ')}`).join('\n')
    expect(text.toLowerCase()).not.toContain('ftc')
    expect(text).toContain('/academy/navigator/')
    expect(text).toContain('/investigations/digital-exposure/public-safety-checklist/')
    expect(text).toContain('antifraudcentre-centreantifraude.ca')
  })

  it('keeps the draft evidence labels off the Verified record status', () => {
    expect(claimLedger.some((row) => row.label === 'Verified')).toBe(false)
    expect(claimLedger.some((row) => row.label.startsWith('Reported, unverified'))).toBe(true)
    expect(claimLedger.some((row) => row.label === 'Disputed')).toBe(true)
  })
})
