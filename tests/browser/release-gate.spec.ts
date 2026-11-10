import AxeBuilder from '@axe-core/playwright'
import { expect, test, type Page } from '@playwright/test'

const routes = [
  ['/academy/', 'Understand clearly.'],
  ['/academy/threat-lab/', 'Threat practice lab'],
  ['/academy/recovery/', 'Recovery steps'],
  ['/academy/navigator/', 'Digital safety navigator'],
  ['/academy/evidence/', 'Evidence explorer'],
  ['/academy/research/', 'Research review'],
  ['/academy/research/provenance/', 'Source links'],
  ['/academy/research/corrections/', 'Correction requests'],
  ['/academy/research/contradictions/', 'Possible disagreements'],
] as const

const draftClaim = {
  claim_id: 'ART-EVD-0100',
  statement: 'Illustrative sentence for an import check.',
  status: 'UNVERIFIED',
  sources: [] as unknown[],
  scope: 'Example only',
  limitations: ['Not a finding'],
  verification_method: null,
  verified_at: null,
  conflicting_evidence: [] as unknown[],
  publication_status: 'DRAFT',
  human_approval: null,
  revision_history: [] as unknown[],
}

function jsonFile(name: string, data: unknown) {
  return {
    name,
    mimeType: 'application/json',
    buffer: Buffer.from(JSON.stringify(data)),
  }
}

async function overflowCount(page: Page) {
  return page.evaluate(`(() => [...document.querySelectorAll('body *')].filter((element) => {
    const box = element.getBoundingClientRect()
    if (box.width < 2 || box.height < 2) return false
    return box.right > window.innerWidth + 1 || box.left < -1
  }).length)()`)
}

test.describe('built site release checks', () => {
  for (const [path, heading] of routes) {
    test(`${path} loads, stays in the viewport at 320px and at 400% reflow, and has no external requests`, async ({ page }) => {
      const external: string[] = []
      page.on('request', (request) => {
        if (!request.url().startsWith('http://127.0.0.1:4173')) external.push(request.url())
      })
      // 320×256 is a 1280×1024 layout at 400% zoom.
      await page.setViewportSize({ width: 320, height: 256 })
      await page.goto(path)
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
      await expect(page.getByRole('heading', { level: 1 })).toContainText(heading)
      expect(await overflowCount(page)).toBe(0)
      await page.setViewportSize({ width: 320, height: 800 })
      expect(await overflowCount(page)).toBe(0)
      expect(external).toEqual([])
    })
  }

  test('axe finds no WCAG 2.2 AA violations on the research and learning tools', async ({ page }) => {
    test.slow()
    const failures: string[] = []
    for (const [path] of routes) {
      await page.setViewportSize({ width: 320, height: 800 })
      await page.goto(path)
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze()
      if (result.violations.length > 0) {
        failures.push(
          `${path}: ${result.violations.map((item) => `${item.id} (${item.nodes.length})`).join(', ')}`,
        )
      }
    }
    expect(failures).toEqual([])
  })

  test('dead citations keep their original URL and show an archive or a checked note', async ({ page }) => {
    const note = '(original link no longer resolves; no archived copy found, checked 2026-11-09)'
    const wayback = 'https://web.archive.org/web/20251214210337/https://cyber.dhs.gov/assets/report/ed-19-01.pdf'
    const ed = 'https://cyber.dhs.gov/assets/report/ed-19-01.pdf'
    for (const path of [
      '/investigations/digital-exposure/digital-security-warning-signs/',
      '/investigations/digital-exposure/ar/digital-security-warning-signs/',
    ]) {
      await page.goto(path)
      const row = page.locator('p', { has: page.locator(`a[href="${ed}"]`) })
      await expect(row).toContainText('Archived copy (Wayback Machine, 14 Dec 2025)')
      await expect(row.locator(`a[href="${wayback}"]`)).toHaveAttribute('target', '_blank')
    }
    for (const path of [
      '/investigations/digital-exposure/source-register/',
      '/investigations/digital-exposure/ar/source-register/',
    ]) {
      await page.goto(path)
      const infoblox =
        'https://www.infoblox.com/blog/threat-intelligence/who-knew-domain-hijacking-is-easy/'
      await expect(page.locator('p', { has: page.locator(`a[href="${infoblox}"]`) })).toContainText(note)
      await expect(page.locator('li', { has: page.locator('a[href="https://www.sittingducks.fyi/"]') }).first()).toContainText(note)
    }
    for (const path of ['/field-manual/', '/field-manual/fr/', '/field-manual/ar/']) {
      await page.goto(path)
      const china = 'http://www.china.org.cn/world/2026-10/12/content_118729771.shtml'
      await expect(page.locator('li', { has: page.locator(`a[href="${china}"]`) })).toContainText(note)
    }
  })

  test('the preferred-source badge deeplinks to Google', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 800 })
    await page.goto('/')
    const badges = page.getByRole('link', { name: 'Add ARTIore as a preferred source on Google' })
    await expect(badges).toHaveCount(2)
    await expect(badges.first()).toHaveAttribute('href', 'https://www.google.com/preferences/source?q=artiore.com')
    await expect(badges.first()).toHaveAttribute('target', '_blank')
    await expect(badges.first()).toHaveAttribute('rel', /noopener/)
    await page.goto('/field-manual/ar/')
    const arabic = page.getByRole('link', { name: 'Add ARTIore as a preferred source on Google' })
    await expect(arabic).toHaveAttribute('dir', 'ltr')
    await expect(arabic).toHaveAttribute('href', 'https://www.google.com/preferences/source?q=artiore.com')
  })

  test('the home investigation button opens the supply-chain article', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/')
    await page.getByRole('link', { name: "Read: The Box Doesn't Tell You Everything" }).click()
    await expect(page).toHaveURL(/\/investigations\/supply-chain-hidden-features\/?$/)
    await expect(page.getByRole('heading', { level: 1, name: "The Box Doesn't Tell You Everything" })).toBeVisible()
    await expect(page.getByRole('heading', { level: 1, name: 'This page is not here.' })).toHaveCount(0)
  })

  test('the Engine nav link opens the Eternia page instead of not-found', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/')
    await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Engine' }).click()
    await expect(page).toHaveURL(/\/engine\/?$/)
    await expect(page.getByRole('heading', { level: 1, name: 'Eternia Aurora Sovereign Engine' })).toBeVisible()
    await expect(page.getByRole('heading', { level: 1, name: 'This page is not here.' })).toHaveCount(0)
    const play = page.getByRole('link', { name: 'Play it in the browser' })
    await expect(play).toHaveAttribute('href', '/eternia-aurora-sovereign-engine/')
    await expect(play).toHaveJSProperty('tagName', 'A')
    await expect(play).not.toHaveAttribute('data-discover')
  })

  test('Play it in the browser is a full page link to the instrument', async ({ page }) => {
    await page.goto('/engine/')
    const play = page.getByRole('link', { name: 'Play it in the browser' })
    await expect(play).toHaveAttribute('href', '/eternia-aurora-sovereign-engine/')
    await expect(play).toHaveJSProperty('tagName', 'A')
    await expect(play).not.toHaveAttribute('data-discover')
  })

  test('desktop nav opens the research review page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/academy/threat-lab/')
    await page.getByRole('navigation', { name: 'Primary' }).getByRole('button', { name: 'Research' }).click()
    await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Research review' }).click()
    await expect(page).toHaveURL(/\/academy\/research\/?$/)
    await expect(page.getByRole('heading', { level: 1, name: 'Research review' })).toBeVisible()
  })

  test('mobile menu reaches the threat lab', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 })
    await page.goto('/academy/')
    await page.getByRole('button', { name: 'Open menu' }).click()
    await page.getByRole('navigation', { name: 'Menu' }).getByRole('link', { name: 'Threat practice lab' }).click()
    await expect(page).toHaveURL(/\/academy\/threat-lab\/?/)
    await expect(page.getByRole('heading', { level: 1, name: 'Threat practice lab' })).toBeVisible()
  })

  test('threat lab can be restarted from the results screen with the keyboard', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.goto('/academy/threat-lab/')
    for (let step = 0; step < 5; step += 1) {
      const choice = page.locator('[role="group"] button').first()
      await choice.focus()
      await page.keyboard.press('Enter')
      await expect(page.locator('#lab-feedback')).toBeFocused()
      await expect(page.locator('#lab-feedback')).not.toBeEmpty()
      const advance = page.getByRole('button', { name: /Next scenario|See your result/ })
      await advance.focus()
      await page.keyboard.press('Enter')
    }
    await expect(page.getByRole('heading', { name: 'Practice complete' })).toBeVisible()
    await page.getByRole('button', { name: 'Practice again' }).focus()
    await page.keyboard.press('Enter')
    await expect(page.locator('#lab-heading')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Practice complete' })).toHaveCount(0)
    expect(errors).toEqual([])
  })

  test('evidence import rejects a javascript link and a published record with no approval', async ({ page }) => {
    await page.goto('/academy/evidence/')
    await page.locator('input[type="file"]').setInputFiles(
      jsonFile('javascript.json', {
        ...draftClaim,
        sources: [{ url: 'javascript:alert(1)', source_type: 'OTHER', accessed_at: '2026-11-02T16:00:00Z' }],
      }),
    )
    await expect(page.locator('#import-status')).toContainText('Import rejected')
    await expect(page.getByText('ordinary web links')).toBeVisible()
    await expect(page.getByText('does not establish unauthorized access')).toBeVisible()

    await page.locator('input[type="file"]').setInputFiles(
      jsonFile('published.json', { ...draftClaim, publication_status: 'PUBLISHED', human_approval: null }),
    )
    await expect(page.locator('#import-status')).toContainText('Import rejected')
    await expect(page.getByText('Human approval is required')).toBeVisible()
  })

  test('a statement that looks like markup is shown as text', async ({ page }) => {
    const dialogs: string[] = []
    page.on('dialog', (dialog) => {
      dialogs.push(dialog.message())
      void dialog.dismiss()
    })
    await page.goto('/academy/evidence/')
    const statement = '<img src=x onerror=alert(1)> <script>alert(1)</script>'
    await page.locator('input[type="file"]').setInputFiles(
      jsonFile('markup.json', { ...draftClaim, statement }),
    )
    await expect(page.getByText(statement, { exact: false })).toBeVisible()
    expect(dialogs).toEqual([])
  })

  test('research import rejects version 1.0 and a published correction with a javascript link', async ({ page }) => {
    await page.goto('/academy/research/')
    await page.locator('input[type="file"]').setInputFiles(
      jsonFile('old-exchange.json', {
        schema_version: '1.0',
        claims: [draftClaim],
        corrections: [],
      }),
    )
    await expect(page.getByText('schema was not met')).toBeVisible()
    await expect(page.getByText('must say schema_version 1.1')).toBeVisible()
    await expect(page.getByText('does not establish unauthorized access')).toBeVisible()

    await page.goto('/academy/research/corrections/')
    await page.locator('input[type="file"]').setInputFiles(
      jsonFile('bad-correction.json', {
        correction_id: 'ART-COR-0001',
        claim_id: 'ART-EVD-0001',
        original_statement: 'Old wording.',
        proposed_statement: 'New wording.',
        reason: 'Example.',
        evidence_urls: ['javascript:alert(1)'],
        status: 'PUBLISHED',
        publication_authorization: null,
        revision_history: [],
      }),
    )
    await expect(page.getByText('schema was not met')).toBeVisible()
    await expect(page.getByText('ordinary web links')).toBeVisible()
    await expect(page.getByText('who authorized')).toBeVisible()
    await expect(page.getByText('ART-COR-0001')).toBeVisible()
  })

  const axeTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] as const

  test('language names, distinct navigation names, and new-tab links are exposed', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/academy/threat-lab/')
    const urdu = page.locator('span[lang="ur"]')
    await expect(urdu).toHaveText('اردو')
    await expect(urdu).toHaveAttribute('dir', 'rtl')
    const arabic = page.locator('span[lang="ar"]')
    await expect(arabic).toHaveText('العربية')
    await expect(arabic).toHaveAttribute('dir', 'rtl')
    await expect(page.locator('span[lang="fr"]')).toHaveAttribute('dir', 'ltr')
    await expect(page.locator('span[lang="fr"]')).toHaveText('Français')

    const headerNavLabels = await page.evaluate(
      `(() => [...document.querySelectorAll('header nav')].map((node) => node.getAttribute('aria-label')))()`,
    )
    expect(headerNavLabels).toEqual(['Primary', 'Menu'])
    await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible()
    await expect(page.getByRole('navigation', { name: 'Menu' })).toHaveCount(0)
    const phishing = page.getByRole('link', { name: 'Phishing (opens in a new tab)', exact: true })
    await expect(phishing).toHaveAttribute(
      'href',
      'https://antifraudcentre-centreantifraude.ca/scams-fraudes/phishing-hameconnage-eng.htm',
    )
    await expect(phishing).toHaveAttribute('target', '_blank')
    await expect(page.getByRole('link', { name: 'GitHub · ARTIore (opens in a new tab)', exact: true })).toHaveAttribute(
      'target',
      '_blank',
    )

    const desktop = await new AxeBuilder({ page }).withTags([...axeTags]).analyze()
    expect(desktop.violations.map((item) => `${item.id} (${item.nodes.length})`)).toEqual([])

    await page.setViewportSize({ width: 320, height: 800 })
    await page.getByRole('button', { name: 'Open menu' }).click()
    await expect(page.getByRole('navigation', { name: 'Menu' })).toBeVisible()
    await expect(page.getByRole('navigation', { name: 'Primary' })).toHaveCount(0)
    const mobile = await new AxeBuilder({ page }).withTags([...axeTags]).analyze()
    expect(mobile.violations.map((item) => `${item.id} (${item.nodes.length})`)).toEqual([])
  })

  test('French and Arabic field manuals use their own new-tab notice', async ({ page }) => {
    await page.goto('/field-manual/fr/')
    const french = page.locator('article.field-manual a[target="_blank"] span.sr-only')
    await expect(french.first()).toContainText("(s'ouvre dans un nouvel onglet)")
    await expect(french.first()).toHaveAttribute('lang', 'fr')
    await expect(french.first()).toHaveAttribute('dir', 'ltr')
    await expect(french.filter({ hasText: 'opens in a new tab' })).toHaveCount(0)

    await page.goto('/field-manual/ar/')
    const arabicArticle = page.locator('article.field-manual')
    await expect(arabicArticle).toHaveAttribute('dir', 'rtl')
    await expect(arabicArticle).toHaveAttribute('lang', 'ar')
    const arabic = arabicArticle.locator('a[target="_blank"] span.sr-only')
    await expect(arabic.first()).toContainText('يفتح في علامة تبويب جديدة')
    await expect(arabic.first()).toHaveAttribute('lang', 'ar')
    await expect(arabic.first()).toHaveAttribute('dir', 'rtl')
    await expect(arabic.filter({ hasText: 'opens in a new tab' })).toHaveCount(0)
    await expect(arabic.filter({ hasText: "s'ouvre dans un nouvel onglet" })).toHaveCount(0)
  })

  test('the Arabic investigation switches language on desktop and on a phone', async ({ page }) => {
    async function expectArabic(path: string) {
      await page.goto(path)
      await expect(page.locator('html')).toHaveAttribute('lang', 'ar')
      await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
      const article = page.locator('article.investigation')
      await expect(article).toHaveAttribute('lang', 'ar')
      await expect(article).toHaveAttribute('dir', 'rtl')
      const note = article.getByRole('note').first()
      await expect(note).toContainText('بمساعدة آلية')
      await expect(note).toContainText('لم يراجعها بعد متحدث أصلي')
      await expect(note).toContainText('هي المرجع المعتمد')
      await expect(note.getByRole('link', { name: 'النسخة الإنجليزية' })).toBeVisible()
    }

    await page.setViewportSize({ width: 1280, height: 800 })
    await expectArabic('/investigations/digital-exposure/ar/')
    const arabicNotice = page.locator('article.investigation a[target="_blank"] span.sr-only').first()
    await expect(arabicNotice).toContainText('يفتح في علامة تبويب جديدة')
    await expect(arabicNotice).toHaveAttribute('lang', 'ar')
    await expect(arabicNotice).toHaveAttribute('dir', 'rtl')
    await page.getByRole('navigation', { name: 'اللغات' }).getByRole('link', { name: 'English' }).click()
    await expect(page).toHaveURL(/\/investigations\/digital-exposure\/?$/)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.locator('article.investigation')).toContainText('$20.877bn in reported losses to the FBI in 2025')
    await page.getByRole('navigation', { name: 'Languages' }).getByRole('link', { name: 'العربية' }).click()
    await expect(page).toHaveURL(/\/investigations\/digital-exposure\/ar\/?$/)
    await expect(page.locator('article.investigation')).toHaveAttribute('dir', 'rtl')

    await page.setViewportSize({ width: 320, height: 800 })
    await page.getByRole('navigation', { name: 'اللغات' }).getByRole('link', { name: 'English' }).click()
    await expect(page).toHaveURL(/\/investigations\/digital-exposure\/?$/)
    await expect(page.getByRole('navigation', { name: 'Languages' })).toBeVisible()
    await page.getByRole('navigation', { name: 'Languages' }).getByRole('link', { name: 'العربية' }).click()
    await expect(page).toHaveURL(/\/investigations\/digital-exposure\/ar\/?$/)
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
    expect(await overflowCount(page)).toBe(0)
  })

  test('hiding a disagreement flag moves focus and announces the change', async ({ page }) => {
    await page.goto('/academy/research/contradictions/')
    const hide = page.getByRole('button', { name: 'Hide this flag for now' }).first()
    await hide.focus()
    await page.keyboard.press('Enter')
    const summary = page.locator('#flags-summary')
    await expect(summary).toBeFocused()
    await expect(summary).toContainText('Flag hidden. It is still included if you download the notes.')
    await expect(page.locator('#flags-heading')).toBeVisible()
  })
})
