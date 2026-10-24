import { useState, type ReactNode } from 'react'
import { Breadcrumbs } from '../seo/Breadcrumbs'
import { SeoHead } from '../seo/SeoHead'
import { SiteLink } from '../content/SiteLink'
import type { FieldManualBlock, FieldManualContent, FieldManualLanguage } from '../../content/field-manual/types'

function trimUrl(raw: string) {
  let url = raw
  let trailing = ''
  while (url.length > 0 && /[.,;:)]$/.test(url)) {
    const last = url.slice(-1)
    if (last === ')' && (url.match(/\(/g) ?? []).length >= (url.match(/\)/g) ?? []).length) break
    trailing = last + trailing
    url = url.slice(0, -1)
  }
  return { url, trailing }
}

function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = []
  const pattern =
    /(\[(?:CITED FACT|VERIFIED|INFERENCE|ASSUMPTION|FAITH \/ PERSPECTIVE|DISPUTED|REASONED GUIDANCE)\])|(https?:\/\/[^\s<>"']+)/g
  let last = 0
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0
    if (index > last) nodes.push(text.slice(last, index))
    if (match[1]) {
      nodes.push(
        <span
          className="mx-0.5 inline-flex items-baseline rounded-full border border-gold/50 bg-gold/15 px-2 py-0.5 text-[0.7rem] font-semibold leading-none tracking-wide text-gold-bright"
          key={`${match[1]}-${index}`}
        >
          {match[1]}
        </span>,
      )
    } else if (match[2]) {
      const { url, trailing } = trimUrl(match[2])
      nodes.push(
        <a
          className="break-all text-gold-bright underline decoration-gold/40 underline-offset-4"
          href={url}
          key={`${url}-${index}`}
          rel="noreferrer"
          target="_blank"
        >
          {url}
        </a>,
      )
      if (trailing) nodes.push(trailing)
    }
    last = index + match[0].length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return <>{nodes}</>
}

function TocList({
  items,
  onNavigate,
}: {
  items: FieldManualContent['toc']
  onNavigate: () => void
}) {
  return (
    <ul className="space-y-2 text-sm leading-snug">
      {items.map((item) => (
        <li key={item.id}>
          <a
            className="inline-flex min-h-11 items-center text-cream/90 hover:text-gold-bright"
            href={`#${item.id}`}
            onClick={onNavigate}
          >
            {item.label}
          </a>
          {item.children ? (
            <ul className="ms-3 border-s border-gold/30 ps-3">
              {item.children.map((child) => (
                <li key={child.id}>
                  <a
                    className="inline-flex min-h-11 items-center text-cream/75 hover:text-gold-bright"
                    href={`#${child.id}`}
                    onClick={onNavigate}
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

function BlockView({ block }: { block: FieldManualBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="scroll-mt-36 font-serif text-3xl text-cream" id={block.id}>
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 className="scroll-mt-36 font-serif text-2xl text-cream" id={block.id}>
          {block.text}
        </h3>
      )
    case 'p':
      return (
        <p
          className={`max-w-[68ch] text-base leading-relaxed text-cream/90 ${
            block.callout ? 'rounded-2xl border border-gold/30 bg-gold/5 p-5' : ''
          }`}
        >
          <RichText text={block.text} />
        </p>
      )
    case 'paths':
      return (
        <div>
          <p className="max-w-[68ch] font-serif text-xl text-cream">{block.intro}</p>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {block.items.map((item) => (
              <div className="rounded-2xl border border-gold/20 bg-white/[0.03] p-5" key={item.title}>
                <p className="font-serif text-lg text-gold-bright">{item.title}</p>
                <p className="mt-3 text-base leading-relaxed text-cream/90">
                  <RichText text={item.body} />
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    case 'ul':
      return (
        <ul className="max-w-[68ch] list-disc space-y-2 ps-5 text-base leading-relaxed text-cream/90">
          {block.items.map((item, index) => (
            <li key={`${index}-${item.slice(0, 24)}`}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="max-w-[68ch] list-decimal space-y-2 ps-5 text-base leading-relaxed text-cream/90">
          {block.items.map((item, index) => (
            <li key={`${index}-${item.slice(0, 24)}`}>
              <RichText text={item} />
            </li>
          ))}
        </ol>
      )
    case 'checklist':
      return (
        <ul className="max-w-[68ch] space-y-2 text-base leading-relaxed text-cream/90">
          {block.items.map((item, index) => (
            <li key={`${index}-${item.slice(0, 24)}`}>
              <label className="flex items-start gap-3">
                <input className="mt-1 size-4 shrink-0 accent-gold" type="checkbox" />
                <span>
                  <RichText text={item} />
                </span>
              </label>
            </li>
          ))}
        </ul>
      )
    case 'table':
      return (
        <div className="max-w-full overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-start text-sm leading-relaxed">
            <caption className="sr-only">{block.caption}</caption>
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th className="border border-white/15 bg-white/[0.04] px-3 py-2 text-start font-semibold text-gold-bright" key={header}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={`${row[0]}-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td className="border border-white/10 px-3 py-2 align-top text-cream/90" key={`${rowIndex}-${cellIndex}`}>
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

function LanguageSwitcher({
  languages,
  current,
}: {
  languages: FieldManualLanguage[]
  current: string
}) {
  const published = languages.filter((language) => language.available)
  if (published.length === 0) return null
  return (
    <nav aria-label="Languages" className="no-print">
      <ul className="flex flex-wrap gap-2">
        {published.map((language) => {
          const active = language.code === current
          return (
            <li key={language.code}>
              {active ? (
                <span
                  aria-current="true"
                  className="inline-flex min-h-11 items-center rounded-full border border-gold bg-gold/15 px-3 text-sm text-gold-bright"
                  lang={language.code}
                >
                  {language.nativeLabel}
                </span>
              ) : (
                <SiteLink
                  className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-3 text-sm text-cream/80 hover:border-gold/40 hover:text-cream"
                  href={language.path}
                >
                  <span lang={language.code}>{language.nativeLabel}</span>
                </SiteLink>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export function FieldManualLayout({
  manual,
  languages,
}: {
  manual: FieldManualContent
  languages: FieldManualLanguage[]
}) {
  const [tocOpen, setTocOpen] = useState(false)

  return (
    <>
      <SeoHead
        author="Zain Ul Abdin"
        authorOrganization="ARTIORE"
        crumbName={manual.crumbName}
        datePublished={manual.datePublished}
        description={manual.description}
        headline={manual.title}
        kind="article"
        path={manual.path}
        title={manual.headTitle}
      />
      <Breadcrumbs current={manual.crumbName} path={manual.path} />
      <article className="field-manual" dir={manual.dir} lang={manual.lang}>
        <header className="max-w-[68ch]">
          <h1 className="font-serif text-4xl leading-tight text-cream sm:text-5xl">{manual.title}</h1>
          <p className="mt-4 text-base text-cream/90">{manual.byline}</p>
          <p className="mt-1 text-sm text-muted">
            <time dateTime={manual.datePublished}>{manual.dateLabel}</time>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gold-bright">{manual.tagline}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <LanguageSwitcher current={manual.code} languages={languages} />
            <button
              className="no-print inline-flex min-h-11 items-center rounded-full border border-gold/50 px-4 text-sm font-semibold text-gold-bright hover:bg-gold/10"
              onClick={() => window.print()}
              type="button"
            >
              Print / Save as PDF
            </button>
          </div>
        </header>
        <aside
          aria-label="Disclaimers"
          className="mt-6 max-w-[68ch] rounded-2xl border border-gold/30 bg-gold/5 p-5"
        >
          <ul className="space-y-3 text-sm leading-relaxed text-cream/90">
            {manual.disclaimers.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </aside>
        <div className="mt-10 lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start lg:gap-10">
          <nav aria-label="On this page" className="field-toc lg:sticky lg:top-36">
            <button
              aria-controls="field-manual-toc"
              aria-expanded={tocOpen}
              className="field-toc-toggle no-print mb-3 inline-flex min-h-11 items-center rounded-full border border-gold/40 px-4 text-sm text-gold-bright lg:hidden"
              onClick={() => setTocOpen((open) => !open)}
              type="button"
            >
              {tocOpen ? 'Hide contents' : 'Contents'}
            </button>
            <div className={`field-toc-panel ${tocOpen ? 'block' : 'hidden'} lg:block lg:max-h-[calc(100vh-10rem)] lg:overflow-y-auto`} id="field-manual-toc">
              <TocList items={manual.toc} onNavigate={() => setTocOpen(false)} />
            </div>
          </nav>
          <div className="mt-8 min-w-0 space-y-6 lg:mt-0">
            {manual.blocks.map((block, index) => (
              <BlockView block={block} key={`${block.type}-${index}`} />
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
