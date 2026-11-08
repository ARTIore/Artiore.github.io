import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const chrome = [
  'src/components/layout/SiteLayout.tsx',
  'src/components/home/HomeSections.tsx',
  'src/components/investigations/InvestigationArticleFooter.tsx',
  'src/pages/AcademyPage.tsx',
  'src/config/site.ts',
  'index.html',
]

const positioning = 'ARTIore — an independent, AI-powered research and intelligence practice'

describe('public chrome', () => {
  it('does not carry the Try ARTIore control or the old religious tagline', () => {
    for (const file of chrome) {
      const source = readFileSync(file, 'utf8')
      expect(source, file).not.toContain('Try ARTIore')
      expect(source, file).not.toContain('artioreTry')
      expect(source, file).not.toContain('Allah Alone is Enough')
      expect(source, file).not.toContain('May Allah accept')
    }
  })

  it('uses the independent research-practice positioning on the home, footer, and shared description', () => {
    expect(readFileSync('src/config/site.ts', 'utf8')).toContain(positioning)
    expect(readFileSync('src/components/home/HomeSections.tsx', 'utf8')).toContain('SITE_POSITIONING')
    expect(readFileSync('src/components/layout/SiteLayout.tsx', 'utf8')).toContain('SITE_POSITIONING')
    expect(readFileSync('src/content/meta.ts', 'utf8')).toContain('SITE_POSITIONING')
    expect(readFileSync('src/components/investigations/InvestigationArticleFooter.tsx', 'utf8')).toContain(
      positioning,
    )
  })
})
