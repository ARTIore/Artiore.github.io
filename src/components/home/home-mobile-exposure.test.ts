import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

describe('homepage Mobile Exposure button', () => {
  it('is a real link in the hero actions', () => {
    const source = readFileSync('src/components/home/HomeSections.tsx', 'utf8')
    expect(source).toContain('Mobile Exposure')
    expect(source).toContain('href="/investigations/digital-exposure/mobile-os-exposure/"')
  })
})
