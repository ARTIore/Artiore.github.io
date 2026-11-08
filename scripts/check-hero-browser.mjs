import { chromium } from '@playwright/test'
import { mkdir } from 'node:fs/promises'
import assert from 'node:assert/strict'
const browser = await chromium.launch()
const folder = process.env.HERO_SCREENSHOTS || 'test-results/hero-screenshots'
await mkdir(folder, { recursive: true })
const paths = ['/', '/academy/', '/privacy/', '/investigations/digital-exposure/iphone-zero-click-spyware/', '/investigations/digital-exposure/ar/iphone-zero-click-spyware/', '/investigations/global-injustice/l6-household-costs/', '/blog/engineers-oath-voltage-granted/', '/framework.html']
for (const width of [1440, 390]) {
  const page = await browser.newPage({ viewport: { width, height: 1000 } })
  const failures = []
  page.on('pageerror', error => failures.push(error.message))
  for (const path of paths) {
    const response = await page.goto('http://127.0.0.1:4173' + path)
    assert.equal(response.status(), 200, path)
    const hero = page.locator('img[src*="/images/heroes/"]').first()
    await hero.waitFor()
    await hero.evaluate(image => image.decode())
    assert.ok(await hero.getAttribute('alt'), path + ' hero alt')
    assert.ok(await hero.evaluate(image => image.naturalWidth > 0), path + ' hero loaded')
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 2)
    assert.equal(overflow, false, `${width}px overflow: ${path}`)
    const og = await page.locator('meta[property="og:image"]').getAttribute('content')
    assert.ok(og.includes('/images/heroes/') && og.endsWith('-og.jpg'), path + ' OG')
    for (const illustration of await page.locator('img[src*="/images/articles/"]').all()) {
      await illustration.scrollIntoViewIfNeeded()
      await illustration.evaluate(image => image.decode())
      assert.ok(await illustration.getAttribute('alt'), path + ' illustration alt')
    }
    if (path === '/' || path.includes('ar/iphone') || path.includes('household')) {
      await page.evaluate(() => scrollTo(0, 0))
      await page.screenshot({ path: `${folder}/${width}-${path.replaceAll('/', '-').replace(/^-|-$/g, '') || 'home'}.png`, fullPage: false })
    }
  }
  assert.deepEqual(failures, [], `${width}px browser errors`)
  await page.close()
}
await browser.close()
console.log('Hero layout, loading, alt text, and social metadata passed on 8 routes at desktop and mobile widths')
