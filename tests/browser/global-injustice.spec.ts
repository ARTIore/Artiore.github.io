import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const routes = [
  ['/investigations/global-injustice/', 'Global Injustice Investigation'],
  ['/investigations/global-injustice/l1-systems/', 'L1. Systems and the ordinary person'],
  ['/investigations/global-injustice/l7-crime-trends/', 'L7. Crime trends, not one rate'],
  ['/investigations/global-injustice/l11-commercial-spyware/', 'L11. Commercial spyware on the public record'],
  ['/investigations/global-injustice/synthesis/', 'Synthesis and limits'],
] as const

test.describe('Global Injustice Investigation', () => {
  for (const [path, heading] of routes) {
    test(`${path} is English, has one h1, and does not overflow at 320px`, async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 800 })
      await page.goto(path)
      await expect(page.locator('html')).toHaveAttribute('lang', 'en')
      await expect(page).toHaveTitle(/\| ARTIore$/)
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
      await expect(page.getByRole('heading', { level: 1 })).toContainText(heading)
      const overflow = await page.evaluate(`(() => [...document.querySelectorAll('body *')].filter((element) => {
        const box = element.getBoundingClientRect()
        if (box.width < 2 || box.height < 2) return false
        return box.right > window.innerWidth + 1 || box.left < -1
      }).length)()`)
      expect(overflow).toBe(0)
    })
  }

  test('the hub states the ladder and its limits, and a source link names the new tab', async ({ page }) => {
    await page.goto('/investigations/global-injustice/')
    await expect(page.getByRole('heading', { name: 'The evidence ladder' })).toBeVisible()
    await expect(page.getByText('ESTABLISHED does not mean Verified')).toBeVisible()
    await expect(page.getByText('Last source check:')).toBeVisible()
    await page.goto('/investigations/global-injustice/l1-systems/')
    const source = page.getByRole('link', { name: /legislation\.gov\.uk/i }).first()
    await expect(source).toHaveAttribute('target', '_blank')
    await expect(source).toContainText('(opens in a new tab)')
    await page.goto('/investigations/global-injustice/l7-crime-trends/')
    await expect(page.getByRole('link', { name: 'Canadian Anti-Fraud Centre (opens in a new tab)', exact: true })).toHaveAttribute(
      'href',
      'https://antifraudcentre-centreantifraude.ca/index-eng.htm',
    )
    await expect(page.getByText(/ftc\.gov/i)).toHaveCount(0)
  })

  test('axe finds no WCAG 2.2 AA violations on the hub, a dossier and the synthesis', async ({ page }) => {
    test.slow()
    const failures: string[] = []
    for (const path of [
      '/investigations/global-injustice/',
      '/investigations/global-injustice/l5-ngo-conduct/',
      '/investigations/global-injustice/synthesis/',
    ]) {
      await page.setViewportSize({ width: 1280, height: 900 })
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

  test('the home page features both investigations in the same tab', async ({ page }) => {
    await page.goto('/')
    const section = page.locator('#investigations')
    await expect(section.getByRole('heading', { level: 2, name: 'Investigations' })).toBeVisible()
    const injustice = section.getByRole('link', { name: 'Global Injustice Investigation' })
    await expect(injustice).toHaveAttribute('href', '/investigations/global-injustice/')
    await expect(injustice).not.toHaveAttribute('target', '_blank')
    await expect(section.getByRole('link', { name: 'Global Digital Exposure Investigation' })).toHaveAttribute(
      'href',
      '/investigations/digital-exposure/',
    )
  })

  test('a spyware article links to L11 in the same tab', async ({ page }) => {
    await page.goto('/investigations/digital-exposure/pegasus-predator-commercial-spyware/')
    const link = page.getByRole('link', { name: /dossier L11/ })
    await expect(link).toHaveAttribute('href', '/investigations/global-injustice/l11-commercial-spyware/')
    await expect(link).not.toHaveAttribute('target', '_blank')
  })

  test('the Arabic exposure hub links to the English injustice hub', async ({ page }) => {
    await page.goto('/investigations/digital-exposure/ar/')
    const link = page.getByRole('link', { name: /التحقيق في الظلم العالمي/ })
    await expect(link).toHaveAttribute('href', '/investigations/global-injustice/')
    await expect(page.getByText('الصفحة بالإنجليزية.')).toBeVisible()
  })

  test('the Digital Exposure hub is still the exposure investigation', async ({ page }) => {
    await page.goto('/investigations/digital-exposure/')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Global Digital Exposure Investigation')
  })
})
