import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { heroFor } from './hero-images'

describe('published page artwork', () => {
  it('resolves every sitemap route and its exported artwork', () => {
    const sitemap = readFileSync(resolve('public/sitemap.xml'), 'utf8')
    const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1])
    expect(urls.length).toBeGreaterThan(100)
    for (const url of urls) {
      const path = new URL(url).pathname
      const hero = heroFor(path)
      expect(hero, path).toBeDefined()
      for (const file of [hero!.src, hero!.small, new URL(hero!.og).pathname]) {
        expect(existsSync(resolve('public', file.slice(1))), `${path}: ${file}`).toBe(true)
      }
      expect(hero!.alt.trim().length, path).toBeGreaterThan(10)
    }
  })

  it('reuses the perimeter artwork with an Arabic description', () => {
    const en = heroFor('/perimeter/')!
    const ar = heroFor('/investigations/digital-exposure/ar/perimeter/')!
    expect(ar.src).toBe(en.src)
    expect(ar.lang).toBe('ar')
    expect(ar.alt).not.toBe(en.alt)
  })

  it('keeps unknown routes free of unrelated artwork', () => {
    expect(heroFor('/not-a-published-page/')).toBeUndefined()
  })
})
