import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const prints = [
  {
    file: 'public/investigations/digital-exposure/public-safety-checklist/print.html',
    canonical: 'https://artiore.com/investigations/digital-exposure/public-safety-checklist/',
  },
  {
    file: 'public/investigations/digital-exposure/ar/public-safety-checklist/print.html',
    canonical: 'https://artiore.com/investigations/digital-exposure/ar/public-safety-checklist/',
  },
]

describe('printable checklists', () => {
  it('point at the article with a canonical link and stay indexable', () => {
    for (const page of prints) {
      const html = readFileSync(page.file, 'utf8')
      expect(html, page.file).not.toContain('noindex')
      expect(html, page.file).toContain(`<link rel="canonical" href="${page.canonical}">`)
    }
  })
})
