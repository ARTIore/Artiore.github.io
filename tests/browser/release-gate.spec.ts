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
    await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Threat practice lab' }).click()
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
})
