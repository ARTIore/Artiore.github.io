import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { SiteLink } from '../content/SiteLink'
import { CommentText } from './CommentText'
import { commentCopy, commentStatusMessage } from '../../content/comments-i18n'
import {
  COMMENTS_API,
  TURNSTILE_SITEKEY,
  applyCommentsToJsonLd,
  commentDir,
  commentLang,
  commentLinkCount,
  commentPagePath,
  commentPlainText,
  commentScriptJson,
  initialReaderComments,
  isReaderComment,
  isReaderCommentPage,
  mergeComments,
  publishReaderComments,
  type ReaderComment,
} from '../../content/comments'
import { hasAppRoute } from '../../route-data'

type TurnstileApi = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string
  reset: (id?: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

let turnstileLoader: Promise<void> | null = null

function loadTurnstile() {
  if (window.turnstile) return Promise.resolve()
  if (turnstileLoader) return turnstileLoader
  turnstileLoader = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.dataset.readerTurnstile = 'true'
    script.onload = () => resolve()
    script.onerror = () => {
      turnstileLoader = null
      reject(new Error('turnstile'))
    }
    document.head.appendChild(script)
  })
  return turnstileLoader
}

function formatWhen(iso: string, lang: string) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat(lang, { dateStyle: 'medium', timeStyle: 'short' }).format(date)
}

function ReaderCommentsForm({ page, lang }: { page: string; lang: ReturnType<typeof commentLang> }) {
  const copy = commentCopy[lang]
  const dir = commentDir(lang)
  const nameId = useId()
  const bodyId = useId()
  const counterId = useId()
  const statusId = useId()
  const widgetRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const statusRef = useRef<HTMLParagraphElement>(null)
  const [comments, setComments] = useState<ReaderComment[]>(() => initialReaderComments(page))
  const [name, setName] = useState('')
  const [body, setBody] = useState('')
  const [website, setWebsite] = useState('')
  const [token, setToken] = useState('')
  const [message, setMessage] = useState('')
  const [alert, setAlert] = useState(false)
  const [pending, setPending] = useState(false)
  const [ready, setReady] = useState(false)

  publishReaderComments(page, comments)

  useEffect(() => {
    applyCommentsToJsonLd(comments)
  }, [comments])

  useEffect(() => {
    let cancel = false
    const url = `${COMMENTS_API}/comments?page=${encodeURIComponent(page)}`
    void fetch(url, { headers: { Accept: 'application/json' } })
      .then(async (response) => {
        if (!response.ok) throw new Error(String(response.status))
        const data = (await response.json()) as { comments?: unknown }
        const list = data?.comments
        if (!Array.isArray(list)) throw new Error('shape')
        const incoming = list.filter(isReaderComment)
        if (cancel) return
        setComments((current) => mergeComments(current, incoming))
      })
      .catch(() => {
        /* Keep the prerendered list when the refresh fails. */
      })
      .finally(() => {
        if (!cancel) setReady(true)
      })
    return () => {
      cancel = true
    }
  }, [page])

  async function ensureWidget() {
    if (widgetId.current || !widgetRef.current) return
    try {
      await loadTurnstile()
      if (!widgetRef.current || !window.turnstile || widgetId.current) return
      widgetId.current = window.turnstile.render(widgetRef.current, {
        sitekey: TURNSTILE_SITEKEY,
        callback: (value: string) => setToken(value),
        'expired-callback': () => setToken(''),
        'error-callback': () => setToken(''),
      })
    } catch {
      setAlert(true)
      setMessage(copy.status502)
    }
  }

  function resetWidget() {
    setToken('')
    if (widgetId.current) window.turnstile?.reset(widgetId.current)
  }

  function show(text: string, isAlert: boolean) {
    setAlert(isAlert)
    setMessage(text)
    queueMicrotask(() => statusRef.current?.focus())
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const cleaned = commentPlainText(body).replace(/\n{3,}/g, '\n\n').trim()
    if (cleaned.length < 2 || cleaned.length > 2000) {
      show(copy.length, true)
      return
    }
    if (commentLinkCount(cleaned) > 2) {
      show(copy.links, true)
      return
    }
    if (!token) {
      show(copy.token, true)
      return
    }
    setPending(true)
    try {
      const response = await fetch(`${COMMENTS_API}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          page,
          name: commentPlainText(name).replace(/\s+/g, ' ').trim(),
          body: cleaned,
          token,
          website,
        }),
      })
      const data = (await response.json().catch(() => null)) as unknown
      if (response.status === 201 && isReaderComment(data)) {
        setComments((current) => (current.some((item) => item.id === data.id) ? current : [...current, data]))
        setName('')
        setBody('')
        setWebsite('')
        resetWidget()
        show(copy.published, false)
        return
      }
      resetWidget()
      show(commentStatusMessage(copy, response.status), true)
    } catch {
      resetWidget()
      show(copy.network, true)
    } finally {
      setPending(false)
    }
  }

  return (
    <section
      aria-labelledby="reader-comments-heading"
      className="mx-auto mt-16 max-w-[68ch] min-w-0 border-t border-gold/30 pt-10"
      data-ready={ready ? 'true' : 'false'}
      dir={dir}
      id="reader-comments"
      lang={lang}
    >
      <h2 className="font-serif text-3xl text-cream" id="reader-comments-heading">
        {copy.heading}
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-cream/90">
        {copy.note}{' '}
        <SiteLink
          className="text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright"
          href="/privacy/"
        >
          {copy.privacy}
        </SiteLink>
      </p>
      {comments.length === 0 ? <p className="mt-6 text-cream/90">{copy.empty}</p> : null}
      <ol className="mt-6 space-y-6">
        {comments.map((comment) => (
          <li className="min-w-0 border-s border-gold/40 ps-4" key={comment.id}>
            <p className="text-sm text-cream">
              <span className="font-semibold">{comment.name === 'Anonymous' ? copy.anonymous : comment.name}</span>
              <span className="text-cream/80">
                {' '}
                · <time dateTime={comment.created_at}>{formatWhen(comment.created_at, lang)}</time>
              </span>
            </p>
            <div className="mt-2 leading-relaxed text-cream">
              <CommentText text={comment.body} />
            </div>
          </li>
        ))}
      </ol>
      <form className="mt-8 space-y-4" noValidate onFocusCapture={() => void ensureWidget()} onSubmit={onSubmit}>
        <div aria-hidden="true" className="absolute h-px w-px overflow-hidden">
          <label>
            Website
            <input
              autoComplete="off"
              name="website"
              onChange={(event) => setWebsite(event.target.value)}
              tabIndex={-1}
              value={website}
            />
          </label>
        </div>
        <div>
          <label className="text-sm font-semibold text-cream" htmlFor={nameId}>
            {copy.nameLabel}
          </label>
          <input
            autoComplete="nickname"
            className="mt-2 w-full rounded-xl border border-white/20 bg-ink-2 px-3 py-2 text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            dir="auto"
            id={nameId}
            maxLength={60}
            name="name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-cream" htmlFor={bodyId}>
            {copy.bodyLabel}
          </label>
          <textarea
            aria-describedby={counterId}
            aria-invalid={alert && message === copy.length}
            className="mt-2 min-h-32 w-full rounded-xl border border-white/20 bg-ink-2 px-3 py-2 text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            dir="auto"
            id={bodyId}
            maxLength={2000}
            name="comment"
            onChange={(event) => setBody(event.target.value)}
            value={body}
          />
          <p className="mt-1 text-sm text-cream/90" id={counterId}>
            {copy.counter(commentPlainText(body).length)}
          </p>
        </div>
        <div data-turnstile-ready={token ? 'true' : 'false'} ref={widgetRef} />
        <button
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60"
          disabled={pending}
          type="submit"
        >
          {pending ? copy.pending : copy.submit}
        </button>
        <p
          className="text-sm text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          id={statusId}
          ref={statusRef}
          role={alert ? 'alert' : 'status'}
          tabIndex={-1}
        >
          {message}
        </p>
      </form>
      <script
        dangerouslySetInnerHTML={{ __html: commentScriptJson(page, comments) }}
        id="reader-comments-snapshot"
        type="application/json"
      />
    </section>
  )
}

export function ReaderComments() {
  const { pathname } = useLocation()
  if (!isReaderCommentPage(pathname) || !hasAppRoute(pathname)) return null
  const page = commentPagePath(pathname)
  return <ReaderCommentsForm key={page} lang={commentLang(pathname)} page={page} />
}
