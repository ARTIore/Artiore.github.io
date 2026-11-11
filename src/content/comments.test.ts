import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { CommentText } from '../components/comments/CommentText'
import { buildJsonLd } from '../seo/structuredData'
import {
  commentLang,
  commentLinkCount,
  commentPagePath,
  commentPlainText,
  fetchReaderCommentSnapshot,
  mergeComments,
  type ReaderComment,
} from './comments'

const sample: ReaderComment = {
  id: '1',
  name: 'Ada',
  body: 'Hello <b>there</b>',
  created_at: '2026-11-11T00:00:00.000Z',
}

describe('reader comment pages', () => {
  it('normalizes every citation path to a trailing-slash pathname', () => {
    expect(commentPagePath('/investigations/supply-chain-hidden-features')).toBe(
      '/investigations/supply-chain-hidden-features/',
    )
    expect(commentPagePath('/investigations/supply-chain-hidden-features/')).toBe(
      '/investigations/supply-chain-hidden-features/',
    )
    expect(commentPagePath('https://artiore.com/blog/every-tap-on-allow?x=1#note')).toBe(
      '/blog/every-tap-on-allow/',
    )
    expect(commentPagePath('/')).toBe('/')
  })

  it('picks the page language, including Urdu and Arabic right-to-left routes', () => {
    expect(commentLang('/field-manual/fr/')).toBe('fr')
    expect(commentLang('/field-manual/ar')).toBe('ar')
    expect(commentLang('/investigations/digital-exposure/ar/dns-hijacking-explained/')).toBe('ar')
    expect(commentLang('/field-manual/ur/')).toBe('ur')
    expect(commentLang('/investigations/global-injustice/')).toBe('en')
  })

  it('renders comment text as text, with no HTML, markdown, or autolink', () => {
    const html = renderToStaticMarkup(
      createElement(CommentText, {
        text: '<script>alert(1)</script> **bold** https://example.com',
      }),
    )
    expect(html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;')
    expect(html).toContain('**bold**')
    expect(html).toContain('https://example.com')
    expect(html).not.toContain('<script>')
    expect(html).not.toContain('<a ')
    expect(commentPlainText('a\r\nb')).toBe('a\nb')
    expect(commentLinkCount('see https://a.test and www.b.test and https://c.test')).toBe(3)
  })

  it('adds schema.org comments to the article graph', () => {
    const data = buildJsonLd({
      kind: 'article',
      title: 'Title',
      description: 'Description long enough for the test fixture.',
      path: '/investigations/supply-chain-hidden-features',
      crumbName: 'Hidden features',
      headline: 'The headline',
      author: 'ARTIore Research Desk',
      datePublished: '2026-11-09',
      comments: [sample],
    })
    const article = data['@graph'].find((node) => node['@type'] === 'Article')
    expect(article).toMatchObject({
      commentCount: 1,
      comment: [
        {
          '@type': 'Comment',
          author: { '@type': 'Person', name: 'Ada' },
          text: 'Hello <b>there</b>',
          dateCreated: '2026-11-11T00:00:00.000Z',
        },
      ],
    })
  })

  it('keeps a just-published comment if the refresh is behind', () => {
    const fresh = { ...sample, id: '2', body: 'New' }
    expect(mergeComments([sample, fresh], [sample])).toEqual([sample, fresh])
  })

  it('renders none when the comment API cannot be reached', async () => {
    const warnings: string[] = []
    const result = await fetchReaderCommentSnapshot(['/blog/every-tap-on-allow/'], {
      fetch: (async () => {
        throw new Error('offline')
      }) as typeof fetch,
      warn: (message) => warnings.push(message),
    })
    expect(result).toEqual({})
    expect(warnings[0]).toContain('API unreachable, rendering none')
  })
})
