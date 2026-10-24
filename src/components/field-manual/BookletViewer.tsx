import { useState, type KeyboardEvent } from 'react'

export type BookletPageImage = {
  src: string
  alt: string
  width: number
  height: number
}

export function BookletViewer({ pages }: { pages: BookletPageImage[] }) {
  const [index, setIndex] = useState(0)
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null)
  const total = pages.length

  function go(next: number) {
    setIndex(Math.min(total - 1, Math.max(0, next)))
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight' || event.key === 'PageDown') {
      event.preventDefault()
      go(index + 1)
    } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      event.preventDefault()
      go(index - 1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      go(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      go(total - 1)
    }
  }

  return (
    <div
      aria-label="Pocket booklet pages"
      className="mx-auto max-w-3xl outline-none"
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <button
          aria-label="Previous page"
          className="inline-flex min-h-11 items-center rounded-full border border-gold/50 px-4 text-sm font-semibold text-gold-bright hover:bg-gold/10 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={index === 0}
          onClick={() => go(index - 1)}
          type="button"
        >
          Previous
        </button>
        <p aria-live="polite" className="text-sm text-cream">
          Page {index + 1} of {total}
        </p>
        <button
          aria-label="Next page"
          className="inline-flex min-h-11 items-center rounded-full border border-gold/50 px-4 text-sm font-semibold text-gold-bright hover:bg-gold/10 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={index === total - 1}
          onClick={() => go(index + 1)}
          type="button"
        >
          Next
        </button>
      </div>
      <div
        className="overflow-hidden rounded-2xl border border-white/10 bg-white"
        onPointerDown={(event) => {
          if (event.pointerType === 'mouse' && event.button !== 0) return
          setOrigin({ x: event.clientX, y: event.clientY })
        }}
        onPointerUp={(event) => {
          if (!origin) return
          const dx = event.clientX - origin.x
          const dy = event.clientY - origin.y
          if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) go(index + (dx < 0 ? 1 : -1))
          setOrigin(null)
        }}
        onPointerCancel={() => setOrigin(null)}
      >
        {pages.map((page, pageIndex) => (
          <img
            alt={page.alt}
            className={pageIndex === index ? 'mx-auto block h-auto w-full max-w-full' : 'hidden'}
            decoding="async"
            height={page.height}
            key={page.src}
            loading="lazy"
            src={page.src}
            width={page.width}
          />
        ))}
      </div>
      <p className="mt-3 text-center text-sm text-muted">
        Swipe, or use the arrow keys when this viewer is focused. Page {index + 1} of {total}.
      </p>
    </div>
  )
}
