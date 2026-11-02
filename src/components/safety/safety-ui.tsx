import type { ReactNode } from 'react'
import { Breadcrumbs } from '../seo/Breadcrumbs'
import { SeoHead } from '../seo/SeoHead'
import { SiteLink } from '../content/SiteLink'
import { safetyChrome } from '../../content/safety/chrome'
import { glossaryTerms } from '../../content/safety/glossary'
import { getSafetyLocale, safetyLocales } from '../../content/safety/locales'
import type { SourceLink } from '../../content/safety/sources'
import { buttonClass, linkClass, pressedClass } from './safety-styles'

type FrameMeta = {
  path: string
  headTitle: string
  description: string
  crumbName: string
}

export function SafetyFrame({
  meta,
  className = '',
  wide = false,
  children,
}: {
  meta: FrameMeta
  className?: string
  wide?: boolean
  children: ReactNode
}) {
  const locale = getSafetyLocale('en')
  return (
    <>
      <SeoHead
        crumbName={meta.crumbName}
        description={meta.description}
        kind="page"
        path={meta.path}
        title={meta.headTitle}
      />
      <Breadcrumbs current={meta.crumbName} path={meta.path} />
      <article
        className={`safety-tool mx-auto min-w-0 leading-relaxed ${wide ? 'max-w-4xl' : 'max-w-3xl'} ${className}`}
        dir={locale.dir}
        lang={locale.lang}
      >
        {children}
      </article>
    </>
  )
}

export function LanguageNote() {
  const current = getSafetyLocale('en')
  const planned = safetyLocales.filter((item) => !item.available)
  const rtl = planned.filter((item) => item.dir === 'rtl')
  return (
    <p className="mt-4 max-w-[68ch] text-sm text-muted">
      This page is in {current.nativeLabel}.{' '}
      {planned.map((item) => `${item.label} (${item.nativeLabel})`).join(', ')} are planned. They will be written for
      those readers, not translated by machine. {rtl.map((item) => item.label).join(' and ')} will use right-to-left
      text.
    </p>
  )
}

export function ReadingControls({
  large,
  spacious,
  paused,
  onLarge,
  onSpacious,
  onPause,
  onRestart,
}: {
  large: boolean
  spacious: boolean
  paused: boolean
  onLarge: () => void
  onSpacious: () => void
  onPause: () => void
  onRestart?: () => void
}) {
  return (
    <div className="mt-4 flex min-w-0 flex-wrap gap-2">
      <button aria-pressed={large} className={`${buttonClass} ${large ? pressedClass : ''}`} onClick={onLarge} type="button">
        {safetyChrome.larger}
      </button>
      <button
        aria-pressed={spacious}
        className={`${buttonClass} ${spacious ? pressedClass : ''}`}
        onClick={onSpacious}
        type="button"
      >
        {safetyChrome.spacious}
      </button>
      <button aria-pressed={paused} className={`${buttonClass} ${paused ? pressedClass : ''}`} onClick={onPause} type="button">
        {paused ? safetyChrome.resume : safetyChrome.pause}
      </button>
      {onRestart ? (
        <button className={buttonClass} onClick={onRestart} type="button">
          {safetyChrome.startAgain}
        </button>
      ) : null}
    </div>
  )
}

export function SourceList({ items }: { items: readonly SourceLink[] }) {
  return (
    <ul className="mt-4 space-y-4">
      {items.map((item) => (
        <li className="min-w-0" key={item.href}>
          {item.region === 'On this site' ? (
            <SiteLink className={linkClass} href={item.href}>
              {item.label}
            </SiteLink>
          ) : (
            <a className={linkClass} href={item.href} rel="noreferrer" target="_blank">
              {item.label}
            </a>
          )}
          <p className="mt-1 text-sm text-muted">
            {item.publisher}. {item.region}.
            {item.note ? ` ${item.note}` : ''}
          </p>
        </li>
      ))}
    </ul>
  )
}

export function GlossaryList({ ids }: { ids: readonly string[] }) {
  const terms = glossaryTerms(ids)
  return (
    <section aria-labelledby="glossary-heading" className="mt-12 border-t border-white/10 pt-8">
      <h2 className="font-serif text-3xl text-gold-bright" id="glossary-heading">
        {safetyChrome.glossaryTitle}
      </h2>
      <p className="mt-3 max-w-[68ch] text-cream/90">{safetyChrome.glossaryLead}</p>
      <dl className="mt-4 space-y-4">
        {terms.map((term) => (
          <div key={term.id}>
            <dt className="font-semibold text-cream" id={`term-${term.id}`}>
              {term.term}
            </dt>
            <dd className="mt-1 max-w-[68ch] text-cream/90">{term.meaning}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function OtherTools({ current }: { current: string }) {
  return (
    <nav aria-label={safetyChrome.otherTools} className="mt-12 border-t border-white/10 pt-8">
      <h2 className="font-serif text-2xl text-cream">{safetyChrome.otherTools}</h2>
      <div className="mt-4 flex min-w-0 flex-col items-start gap-2">
        {safetyChrome.tools
          .filter((tool) => tool.href !== current)
          .map((tool) => (
            <SiteLink className={buttonClass} href={tool.href} key={tool.href}>
              {tool.label}
            </SiteLink>
          ))}
      </div>
    </nav>
  )
}

export function PrivacyNote() {
  return (
    <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-muted">
      <p className="max-w-[68ch]">{safetyChrome.privacy}</p>
      <p className="mt-3 max-w-[68ch]">{safetyChrome.checked}</p>
    </footer>
  )
}
