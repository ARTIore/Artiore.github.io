/** Public URL shape. GitHub Pages serves directory routes at the trailing-slash URL. */

export function normalizePath(pathname: string) {
  const path = (pathname || '/').split('?')[0].split('#')[0] || '/'
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1)
  return path
}

/**
 * The investigation is prerendered, and its pages are large. Serve them as
 * ordinary navigations so the header does not treat every child as the hub.
 */
export const staticPrefixes = ['/investigations/']

export function isStaticPath(href: string) {
  return staticPrefixes.some((prefix) => href.startsWith(prefix))
}

export function toPublicPath(href: string) {
  if (!href.startsWith('/')) return href
  const hashIndex = href.indexOf('#')
  const queryIndex = href.indexOf('?')
  let cut = href.length
  if (hashIndex >= 0) cut = Math.min(cut, hashIndex)
  if (queryIndex >= 0) cut = Math.min(cut, queryIndex)
  const path = href.slice(0, cut)
  const suffix = href.slice(cut)
  if (path === '/') return href
  if (/\.[a-z0-9]+$/i.test(path)) return href
  const withSlash = path.endsWith('/') ? path : `${path}/`
  return `${withSlash}${suffix}`
}

export function canonicalUrl(path: string) {
  const site = 'https://artiais.com'
  if (path === '/' || path === '') return `${site}/`
  const pub = toPublicPath(path.startsWith('/') ? path : `/${path}`)
  return `${site}${pub}`
}

export type Crumb = { name: string; path: string }

export function breadcrumbItems(path: string, current: string): Crumb[] {
  const clean = normalizePath(path)
  if (clean === '/') return []
  if (clean.startsWith('/blog/') && clean !== '/blog') {
    return [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: current, path: clean },
    ]
  }
  if (clean === '/field-manual/pocket-booklet' || clean === '/field-manual/carousels') {
    return [
      { name: 'Home', path: '/' },
      { name: 'Field Manual', path: '/field-manual' },
      { name: current, path: clean },
    ]
  }
  if (clean.startsWith('/investigations/digital-exposure/')) {
    return [
      { name: 'Home', path: '/' },
      { name: 'The Invisible Attack Surface', path: '/investigations/digital-exposure' },
      { name: current, path: clean },
    ]
  }
  return [
    { name: 'Home', path: '/' },
    { name: clean === '/blog' ? 'Blog' : current, path: clean },
  ]
}
