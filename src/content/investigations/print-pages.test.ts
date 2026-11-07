import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const prints = [
  {
    file: 'public/investigations/digital-exposure/public-safety-checklist/print.html',
    canonical: 'https://artiais.com/investigations/digital-exposure/public-safety-checklist/',
  },
  {
    file: 'public/investigations/digital-exposure/ar/public-safety-checklist/print.html',
    canonical: 'https://artiais.com/investigations/digital-exposure/ar/public-safety-checklist/',
  },
]

describe('printable checklists', () => {
  it('stay out of the index and point at the article', () => {
    for (const page of prints) {
      const html = readFileSync(page.file, 'utf8')
      expect(html, page.file).toContain('<meta name="robots" content="noindex,follow">')
      expect(html, page.file).toContain(`<link rel="canonical" href="${page.canonical}">`)
    }
  })
})
