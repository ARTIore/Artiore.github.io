import { expect, test } from '@playwright/test'

const cors = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
}

test('reader comments render, wait to load Turnstile, publish, and show errors', async ({ page }) => {
  const turnstile: string[] = []
  page.on('request', (request) => {
    if (request.url().includes('challenges.cloudflare.com')) turnstile.push(request.url())
  })
  let tooMany = false
  await page.route('https://challenges.cloudflare.com/**', (route) =>
    route.fulfill({
      contentType: 'application/javascript',
      body: `window.turnstile={render(el,opts){window.__tsOpts=opts;opts.callback('test-token');return 'w'},reset(){if(window.__tsOpts)window.__tsOpts.callback('test-token')}}`,
    }),
  )
  await page.route('https://artiore-comments.artiore.workers.dev/**', async (route) => {
    const request = route.request()
    if (request.method() === 'OPTIONS') {
      await route.fulfill({ status: 204, headers: cors })
      return
    }
    if (request.method() === 'GET') {
      await route.fulfill({
        status: 200,
        headers: cors,
        contentType: 'application/json',
        body: JSON.stringify({ comments: [] }),
      })
      return
    }
    if (tooMany) {
      await route.fulfill({
        status: 429,
        headers: cors,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Too many comments. Please wait a few minutes and try again.' }),
      })
      return
    }
    const payload = request.postDataJSON() as { name?: string; body?: string }
    await route.fulfill({
      status: 201,
      headers: cors,
      contentType: 'application/json',
      body: JSON.stringify({
        id: 'c1',
        name: payload.name || 'Anonymous',
        body: payload.body,
        created_at: '2026-11-11T03:00:00.000Z',
      }),
    })
  })

  await page.goto('/blog/every-tap-on-allow/')
  await expect(page.getByRole('heading', { name: 'Comments' })).toBeVisible()
  await expect(page.locator('script[data-reader-turnstile]')).toHaveCount(0)
  expect(turnstile).toEqual([])
  await expect(page.getByRole('link', { name: 'Privacy policy' })).toHaveAttribute('href', '/privacy/')

  const comment = page.getByRole('textbox', { name: 'Comment', exact: true })
  await comment.focus()
  await expect.poll(() => turnstile.length).toBeGreaterThan(0)
  await expect(page.locator('[data-turnstile-ready="true"]')).toBeAttached()
  await page.getByRole('textbox', { name: 'Name (optional)' }).fill('Ada')
  await comment.fill('<b>hello</b> https://example.com')
  await page.getByRole('button', { name: 'Publish comment' }).click()
  const posted = page.getByText('<b>hello</b> https://example.com')
  await expect(posted).toBeVisible()
  await expect(page.locator('#reader-comments b')).toHaveCount(0)
  await expect(page.locator('#reader-comments a[href="https://example.com"]')).toHaveCount(0)
  await expect(page.getByRole('status')).toContainText('Your comment is published.')

  tooMany = true
  await comment.fill('Another note')
  await page.getByRole('button', { name: 'Publish comment' }).click()
  await expect(page.getByRole('alert')).toContainText('Too many comments')

  await page.goto('/investigations/digital-exposure/ar/')
  const arabic = page.locator('#reader-comments')
  await expect(arabic).toHaveAttribute('dir', 'rtl')
  await expect(arabic).toHaveAttribute('lang', 'ar')
  await expect(arabic.getByRole('heading', { name: 'التعليقات' })).toBeVisible()
})
