import { describe, expect, it } from 'vitest'
import { isFullDocumentPath } from './urls'
import { links } from './links'

describe('full-document paths', () => {
  it('loads the Eternia project in the browser instead of the app router', () => {
    expect(isFullDocumentPath(links.eternia)).toBe(true)
    expect(isFullDocumentPath('/eternia-aurofa-soverign-engine')).toBe(true)
    expect(isFullDocumentPath('/engine')).toBe(false)
    expect(isFullDocumentPath('/engine/')).toBe(false)
  })
})
