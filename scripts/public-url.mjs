export const SITE_URL = 'https://artiais.com'

export function toPublicPath(href) {
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

export function canonicalUrl(path) {
  if (path === '/' || path === '') return `${SITE_URL}/`
  const pub = toPublicPath(path.startsWith('/') ? path : `/${path}`)
  return `${SITE_URL}${pub}`
}
