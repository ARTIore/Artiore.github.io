import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { investigationCompanionUrls } from './companions'

describe('investigation companion links', () => {
  it('only points at pages this build publishes', () => {
    expect(investigationCompanionUrls).toEqual({ perimeter: '/framework.html' })
    for (const href of Object.values(investigationCompanionUrls)) {
      expect(href.startsWith('/'), href).toBe(true)
      expect(href).not.toContain('invisible-attack-surface')
      const relative = href.replace(/^\//, '')
      expect(existsSync(join(process.cwd(), 'public', relative)) || existsSync(join(process.cwd(), relative)), href).toBe(true)
    }
  })
})
