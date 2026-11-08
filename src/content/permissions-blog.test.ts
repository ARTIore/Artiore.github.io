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
  })
})
