import { createElement, type ComponentType, type ReactNode } from 'react'
import type { PageDocument } from './content/types'
import { normalizePath } from './content/urls'

type Loader = () => Promise<{ default: ComponentType }>

const cache = new Map<string, ReactNode>()

function documentRoute(load: () => Promise<PageDocument>): Loader {
  return async () => {
    const [page, view] = await Promise.all([load(), import('./components/content/DocumentView')])
    function DocumentRoute() {
      return <view.DocumentView page={page} />
    }
    return { default: DocumentRoute }
  }
}

const loaders: Record<string, Loader> = {
  '/': () => import('./pages/HomePage'),
  '/contact': () => import('./pages/ContactPage'),
  '/engine': () => import('./pages/EnginePage'),
  '/system-documentation': () => import('./pages/SystemDocsPage'),
  '/field-manual': () => import('./pages/FieldManualPage'),
  '/field-manual/fr': () => import('./pages/FieldManualFrPage'),
  '/field-manual/pocket-booklet': () => import('./pages/PocketBookletPage'),
  '/blog': () => import('./pages/BlogPage'),
  '/about': documentRoute(async () => (await import('./content/documents')).aboutPage),
  '/philosophy': documentRoute(async () => (await import('./content/documents')).philosophyPage),
  '/origin': documentRoute(async () => (await import('./content/documents')).originPage),
  '/doctrine': documentRoute(async () => (await import('./content/documents')).doctrinePage),
  '/protocol': documentRoute(async () => (await import('./content/documents')).protocolPage),
  '/how-it-works': documentRoute(async () => (await import('./content/documents')).howItWorksPage),
  '/applications': documentRoute(async () => (await import('./content/documents')).applicationsPage),
  '/dossier': documentRoute(async () => (await import('./content/documents')).dossierPage),
  '/resources': documentRoute(async () => (await import('./content/library')).resourcesPage),
  '/case-studies': documentRoute(async () => (await import('./content/library')).caseStudiesPage),
  '/implementation': documentRoute(async () => (await import('./content/library')).implementationPage),
  '/api-documentation': documentRoute(async () => (await import('./content/library')).apiPage),
  '/privacy': documentRoute(async () => (await import('./content/legal')).privacyPage),
  '/terms': documentRoute(async () => (await import('./content/legal')).termsPage),
  '/blog/artiore-ecosystem': documentRoute(async () => {
    const post = (await import('./content/blog')).blogPosts.find((item) => item.slug === 'artiore-ecosystem')
    if (!post) throw new Error('Missing essay artiore-ecosystem')
    return post.page
  }),
  '/blog/sultan-authority-cannot-be-touched': documentRoute(async () => {
    const post = (await import('./content/blog')).blogPosts.find((item) => item.slug === 'sultan-authority-cannot-be-touched')
    if (!post) throw new Error('Missing essay sultan-authority-cannot-be-touched')
    return post.page
  }),
  '/blog/engineers-oath-voltage-granted': documentRoute(async () => {
    const post = (await import('./content/blog')).blogPosts.find((item) => item.slug === 'engineers-oath-voltage-granted')
    if (!post) throw new Error('Missing essay engineers-oath-voltage-granted')
    return post.page
  }),
  '/blog/exhibit-k-forensic-witnesses': documentRoute(async () => {
    const post = (await import('./content/blog')).blogPosts.find((item) => item.slug === 'exhibit-k-forensic-witnesses')
    if (!post) throw new Error('Missing essay exhibit-k-forensic-witnesses')
    return post.page
  }),
}

const notFoundLoader: Loader = () => import('./pages/NotFoundPage')

export async function preloadRoute(pathname: string) {
  const path = normalizePath(pathname)
  if (cache.has(path)) return
  const loader = loaders[path] ?? notFoundLoader
  const mod = await loader()
  cache.set(path, createElement(mod.default))
}

export function readRoute(pathname: string) {
  return cache.get(normalizePath(pathname))
}
