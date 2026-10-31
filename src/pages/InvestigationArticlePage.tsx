import { useMemo } from 'react'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SeoHead } from '../components/seo/SeoHead'
import { SiteLink } from '../components/content/SiteLink'
import { SincerityNote } from '../components/field-manual/SincerityNote'
import {
  investigationBase,
  investigationOg,
  investigationPiece,
  investigationPrintPath,
  investigationPublished,
  investigationSlugs,
} from '../content/investigations/catalog'
import { investigationFaqs } from '../content/investigations/faqs'
import { renderInvestigationMarkdown } from '../content/investigations/markdown'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

export default function InvestigationArticlePage({ markdown, slug }: { markdown: string; slug: string }) {
  const piece = investigationPiece(slug)
  const rendered = useMemo(() => {
    if (!piece) return { toc: [], body: [] }
    return renderInvestigationMarkdown(markdown, {
      title: piece.title,
      slugs: investigationSlugs,
      partsToc: piece.partsToc,
    })
  }, [markdown, piece])

  if (!piece) return null

  const published = piece.datePublished ?? investigationPublished
  const publishedLabel = published === '2026-10-25' ? '25 October 2026' : '26 October 2026'

  return (
    <>
      <SeoHead
        author="ARTIore Research Desk"
        authorOrganization="ARTIore"
        crumbName={piece.crumbName}
        dateModified={piece.dateModified}
        datePublished={published}
        faqs={investigationFaqs[slug]}
        description={piece.description}
        headline={piece.title}
        image={investigationOg.src}
        imageAlt={investigationOg.alt}
        imageHeight={investigationOg.height}
        imageWidth={investigationOg.width}
        inLanguage="en"
        kind="article"
        locale="en_US"
        path={piece.path}
        title={piece.headTitle}
      />
      <Breadcrumbs current={piece.crumbName} path={piece.path} />
      <article className="investigation">
        <header className="max-w-[68ch]">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Global Digital Exposure Investigation</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-cream sm:text-5xl">{piece.title}</h1>
          <p className="mt-4 text-sm text-muted">
            ARTIore Research Desk · Version 1.0 · <time dateTime={published}>{publishedLabel}</time>
            {piece.readingTime ? ` · ${piece.readingTime}` : ''}
          </p>
          <p className="mt-4 text-sm">
            <SiteLink className={linkClass} href={investigationBase}>
              The Invisible Attack Surface
            </SiteLink>
          </p>
          {piece.printable ? (
            <p className="mt-4">
              <SiteLink className={`inline-flex min-h-11 items-center ${linkClass}`} href={investigationPrintPath}>
                Printable checklist
              </SiteLink>
            </p>
          ) : null}
        </header>
        <SincerityNote code="en" />
        {rendered.toc.length > 0 ? (
          <nav aria-label="Parts" className="mt-10 max-w-[68ch] rounded-2xl border border-gold/30 bg-gold/5 p-5">
            <h2 className="font-serif text-2xl text-cream">Parts</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-relaxed text-cream/90">
              {rendered.toc.map((item) => (
                <li key={item.id}>
                  <a className={linkClass} href={`#${item.id}`}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <div className="mt-10 min-w-0 space-y-4">{rendered.body}</div>
        <SincerityNote code="en" placement="bottom" />
      </article>
    </>
  )
}
