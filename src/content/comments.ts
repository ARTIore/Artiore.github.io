/** Reader comments. Pure helpers shared by the page, the build, and tests. */

export type ReaderComment = {
  id: string
  name: string
  body: string
  created_at: string
}

export type CommentLang = 'en' | 'ar' | 'fr' | 'ur'

export const COMMENTS_API = 'https://artiore-comments.artiore.workers.dev'
export const TURNSTILE_SITEKEY = '0x4AAAAAAF8NCIe3Ady2Ec65'

const CONTROL =
  /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F\u200B-\u200F\u202A-\u202E\u2060-\u2069\uFEFF]/g

/** Canonical comment key: pathname only, with a trailing slash. */
export function commentPagePath(input: string) {
  let path = input.trim()
  if (path.includes('://')) {
    try {
      path = new URL(path).pathname
    } catch {
      path = '/'
    }
  }
  path = path.split('?')[0]?.split('#')[0] || '/'
  if (!path.startsWith('/')) path = `/${path}`
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`
  return path
}

/** Articles, investigation pages, and field manuals. The blog index is not an article. */
export function isReaderCommentPage(input: string) {
  const path = commentPagePath(input)
  if (path.startsWith('/blog/') && path !== '/blog/') return true
  if (path.startsWith('/investigations/')) return true
  if (path.startsWith('/field-manual/')) return true
  return false
}

export function commentLang(input: string): CommentLang {
  const path = commentPagePath(input)
  if (path.startsWith('/field-manual/fr/')) return 'fr'
  if (path.startsWith('/field-manual/ur/') || path.includes('/ur/')) return 'ur'
  if (path.startsWith('/field-manual/ar/') || path.includes('/ar/')) return 'ar'
  return 'en'
}

export function commentDir(lang: CommentLang): 'ltr' | 'rtl' {
  return lang === 'ar' || lang === 'ur' ? 'rtl' : 'ltr'
}

/** Plain text only. Tags and markdown markers stay characters; nothing is interpreted. */
export function commentPlainText(value: string) {
  return value.replace(/\r\n?/g, '\n').replace(CONTROL, '')
}

export function commentLinkCount(body: string) {
  return (commentPlainText(body).match(/(?:https?:\/\/|www\.)\S+/gi) ?? []).length
}

export function isReaderComment(value: unknown): value is ReaderComment {
  if (!value || typeof value !== 'object') return false
  const item = value as Record<string, unknown>
  return (
    typeof item.id === 'string' &&
    typeof item.name === 'string' &&
    typeof item.body === 'string' &&
    typeof item.created_at === 'string'
  )
}

export function readerCommentSchema(comments: ReaderComment[]) {
  return {
    commentCount: comments.length,
    comment: comments.map((comment) => ({
      '@type': 'Comment',
      author: { '@type': 'Person', name: comment.name },
      text: comment.body,
      dateCreated: comment.created_at,
    })),
  }
}

/** Keep server order, then any comment the page already showed that the response has not caught up with. */
export function mergeComments(current: ReaderComment[], incoming: ReaderComment[]) {
  const ids = new Set(incoming.map((comment) => comment.id))
  return [...incoming, ...current.filter((comment) => !ids.has(comment.id))]
}

export function commentScriptJson(page: string, comments: ReaderComment[]) {
  return JSON.stringify({ page: commentPagePath(page), comments }).replaceAll('<', '\\u003c')
}

let serverSnapshot: Record<string, ReaderComment[]> = {}

export function setServerCommentSnapshot(snapshot: Record<string, ReaderComment[]>) {
  serverSnapshot = snapshot
}

export function serverCommentsFor(page: string) {
  return serverSnapshot[commentPagePath(page)] ?? []
}

export function readHydratedComments(page: string): ReaderComment[] | null {
  if (typeof document === 'undefined') return null
  const node = document.getElementById('reader-comments-snapshot')
  if (!node?.textContent) return null
  try {
    const data = JSON.parse(node.textContent) as { page?: string; comments?: unknown }
    if (data.page !== commentPagePath(page) || !Array.isArray(data.comments)) return null
    return data.comments.filter(isReaderComment)
  } catch {
    return null
  }
}

export function initialReaderComments(page: string) {
  return readHydratedComments(page) ?? serverCommentsFor(page)
}

let published: { page: string; comments: ReaderComment[] } | null = null

export function publishReaderComments(page: string, comments: ReaderComment[]) {
  published = { page: commentPagePath(page), comments }
}

export function publishedReaderComments(page: string) {
  if (!published || published.page !== commentPagePath(page)) return undefined
  return published.comments
}

export function applyCommentsToJsonLd(comments: ReaderComment[]) {
  if (typeof document === 'undefined') return
  const schema = document.getElementById('seo-jsonld')
  if (!schema?.textContent) return
  try {
    const data = JSON.parse(schema.textContent) as { '@graph'?: Record<string, unknown>[] }
    if (!Array.isArray(data['@graph'])) return
    const fields = readerCommentSchema(comments)
    let changed = false
    for (const node of data['@graph']) {
      const type = node['@type']
      if (type === 'Article' || type === 'NewsArticle' || type === 'BlogPosting') {
        Object.assign(node, fields)
        changed = true
      }
    }
    if (changed) schema.textContent = JSON.stringify(data).replaceAll('<', '\\u003c')
  } catch {
    /* Keep the script the build already wrote. */
  }
}

export async function fetchReaderCommentSnapshot(
  pages: string[],
  options?: {
    fetch?: typeof fetch
    warn?: (message: string) => void
    apiBase?: string
  },
): Promise<Record<string, ReaderComment[]>> {
  const doFetch = options?.fetch ?? globalThis.fetch
  const warn = options?.warn ?? ((message: string) => console.warn(message))
  const apiBase = options?.apiBase ?? COMMENTS_API
  if (pages.length === 0) return {}
  const snapshot: Record<string, ReaderComment[]> = {}
  const failures: string[] = []
  const queue = [...pages]
  const workers = Math.min(6, queue.length)

  async function worker() {
    for (;;) {
      const page = queue.shift()
      if (!page) return
      const key = commentPagePath(page)
      try {
        const response = await doFetch(`${apiBase}/comments?page=${encodeURIComponent(key)}`, {
          headers: { Accept: 'application/json' },
          signal: AbortSignal.timeout(20_000),
        })
        if (!response.ok) throw new Error(String(response.status))
        const data = (await response.json()) as { comments?: unknown }
        if (!data || !Array.isArray(data.comments)) throw new Error('shape')
        snapshot[key] = data.comments.filter(isReaderComment)
      } catch (error) {
        failures.push(`${key} (${error instanceof Error ? error.message : 'error'})`)
        snapshot[key] = []
      }
    }
  }

  await Promise.all(Array.from({ length: workers }, () => worker()))
  if (failures.length > 0) {
    warn(
      `reader comments: API unreachable, rendering none for ${failures.length} page(s): ${failures.slice(0, 5).join('; ')}`,
    )
  }
  if (failures.length === pages.length) return {}
  return snapshot
}
