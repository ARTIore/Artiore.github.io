import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { blogPosts } from './blog'
import { seoEntries } from './registry'

describe('permissions blog note', () => {
  const post = blogPosts.find((item) => item.slug === 'every-tap-on-allow')
  const text = readFileSync('src/content/blog.ts', 'utf8')

  it('is a separate article with a real route and BlogPosting fields', () => {
    expect(post?.page.path).toBe('/blog/every-tap-on-allow')
    expect(post?.page.published).toBe('2026-11-08')
    const entry = seoEntries.find((item) => item.path === '/blog/every-tap-on-allow')
    expect(entry?.kind).toBe('blog-post')
    expect(entry?.sitemap).not.toBe(false)
    expect(text).toContain('/investigations/digital-exposure/mobile-os-exposure/')
    expect(text).toContain('/investigations/digital-exposure/android-accessibility-service-malware/')
  })

  it('does not attach the 6.1 percent result to the 4,636 settings records', () => {
    expect(text).toContain('That group was not asked the comprehension questions')
    expect(text).toContain('359 valid responses')
    expect(text).not.toContain('4,636 Android users, only 6.1%')
    expect(text).not.toContain('designed to be skipped')
    expect(text).not.toContain('master key')
    expect(text).not.toContain('For location, camera, and microphone, “while using the app” is narrower than “all the time.”')
  })

  it('keeps location, nearby devices, and notification access distinct', () => {
    expect(text).toContain('“all the time” is for location only')
    expect(text).toContain('Camera and microphone do not use that same always option')
    expect(text).toContain('neverForLocation')
    expect(text).toContain('not proof the app cannot infer where you are another way')
    expect(text).toContain('Search Settings for Notification access')
    expect(text).toContain('RECEIVE_SENSITIVE_NOTIFICATIONS')
    expect(text).toContain('not guaranteed a code')
  })
})
