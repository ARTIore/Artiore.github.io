import { useRef, useState, type KeyboardEvent } from 'react'
import type { CarouselSlide } from '../../content/field-manual/carousels'

const SLIDE_WIDTH = 792
const SLIDE_HEIGHT = 990

export function CarouselRow({ label, slides }: { label: string; slides: CarouselSlide[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const total = slides.length

  function go(next: number) {
    const scroller = scrollerRef.current
    const target = Math.min(total - 1, Math.max(0, next))
    setIndex(target)
    if (!scroller) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    scroller.scrollTo({ left: target * scroller.clientWidth, behavior: reduce ? 'auto' : 'smooth' })
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

  function onScroll() {
    const scroller = scrollerRef.current
    if (!scroller || scroller.clientWidth === 0) return
    const next = Math.round(scroller.scrollLeft / scroller.clientWidth)
    const clamped = Math.min(total - 1, Math.max(0, next))
    setIndex((current) => (current === clamped ? current : clamped))
  }

  return (
    <div
      aria-label={label}
      aria-roledescription="carousel"
      className="mx-auto max-w-md outline-none"
      onKeyDown={onKeyDown}
      role="region"
      tabIndex={0}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <button
          aria-label="Previous slide"
          className="inline-flex min-h-11 items-center rounded-full border border-gold/50 px-4 text-sm font-semibold text-gold-bright hover:bg-gold/10 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={index === 0}
          onClick={() => go(index - 1)}
          type="button"
        >
          Previous
        </button>
        <p aria-live="polite" className="text-sm text-cream">
          Slide {index + 1} of {total}
        </p>
        <button
          aria-label="Next slide"
          className="inline-flex min-h-11 items-center rounded-full border border-gold/50 px-4 text-sm font-semibold text-gold-bright hover:bg-gold/10 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={index === total - 1}
          onClick={() => go(index + 1)}
          type="button"
        >
          Next
        </button>
      </div>
      <div
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-2xl"
        onScroll={onScroll}
        ref={scrollerRef}
      >
        {slides.map((slide, slideIndex) => (
          <figure className="w-full min-w-full shrink-0 snap-start" key={slide.src}>
            <img
              alt={slide.alt}
              className="mx-auto block h-auto w-full max-w-full rounded-2xl border border-white/10 bg-white"
              decoding="async"
              height={SLIDE_HEIGHT}
              loading={slideIndex === 0 ? 'eager' : 'lazy'}
              src={slide.src}
              width={SLIDE_WIDTH}
            />
            <figcaption className="mt-2 text-center text-sm">
              <a className="text-gold-bright underline decoration-gold/40 underline-offset-4" href={slide.src}>
                Open image
                <span className="sr-only">
                  {' '}
                  — slide {slideIndex + 1} of {total}
                </span>
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-3 text-center text-sm text-muted">
        Swipe, or use the arrow keys when this viewer is focused. Slide {index + 1} of {total}.
      </p>
    </div>
  )
}
