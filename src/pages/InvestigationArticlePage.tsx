import { isValidElement, useMemo, type ReactNode } from 'react'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SeoHead } from '../components/seo/SeoHead'
import { SiteLink } from '../components/content/SiteLink'
import { SincerityNote } from '../components/field-manual/SincerityNote'
import {
  investigationBase,
  investigationLicenseUrl,
  investigationOg,
  invisibleAttackSurfaceCover,
  invisibleAttackSurfaceInfographic,
  invisibleAttackSurfaceOg,
  investigationPiece,
  investigationPrintPath,
  investigationPublished,
  investigationSlugs,
} from '../content/investigations/catalog'
import { investigationFaqs } from '../content/investigations/faqs'
import { arabicInvestigationFaqs } from '../content/investigations/ar/faqs'
import { arabicPieceView } from '../content/investigations/ar/meta'
import { renderInvestigationMarkdown } from '../content/investigations/markdown'
import { AlsoOnArtiore } from '../components/investigations/AlsoOnArtiore'
import { InvestigationLanguageSwitcher } from '../components/investigations/InvestigationLanguageSwitcher'
import { InvestigationLicense } from '../components/investigations/InvestigationLicense'
import { TranslationNotice } from '../components/investigations/TranslationNotice'
import { ArticleVerificationSources, VerificationSourceRegister } from '../components/investigations/VerificationSources'
import { investigationCompanionUrls } from '../content/investigations/companions'
import {
  arabicInvestigationBase,
  arabicPathFor,
  investigationAlternates,
  investigationNewTab,
} from '../content/investigations/locale'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

const arabicPrintPath = '/investigations/digital-exposure/ar/public-safety-checklist/print.html'

function exposureInfographic() {
  return (
    <figure className="max-w-[68ch]" key="exposure-infographic">
      <img
        alt={invisibleAttackSurfaceInfographic.alt}
        className="h-auto w-full"
        decoding="async"
        height={invisibleAttackSurfaceInfographic.height}
        loading="lazy"
        src={invisibleAttackSurfaceInfographic.src}
        width={invisibleAttackSurfaceInfographic.width}
      />
      <figcaption className="mt-3 text-sm leading-relaxed text-muted">
        {invisibleAttackSurfaceInfographic.caption}
      </figcaption>
    </figure>
  )
}

function withExposureInfographic(body: ReactNode[]) {
  const figure = exposureInfographic()
  const next: ReactNode[] = []
  let placed = false
  for (const node of body) {
    if (
      !placed &&
      isValidElement(node) &&
      (node.props as { id?: string }).id === 'executive-summary'
    ) {
      next.push(figure)
      placed = true
    }
    next.push(node)
  }
  return placed ? next : [figure, ...body]
}

function publishedLabel(iso: string, locale: 'en' | 'ar') {
  if (locale === 'ar') {
    if (iso === '2026-10-25') return '25 أكتوبر 2026'
    if (iso === '2026-11-02') return '2 نوفمبر 2026'
    return '26 أكتوبر 2026'
  }
  if (iso === '2026-10-25') return '25 October 2026'
  if (iso === '2026-11-02') return '2 November 2026'
  return '26 October 2026'
}

export default function InvestigationArticlePage({
  markdown,
  slug,
  locale = 'en',
}: {
  markdown: string
  slug: string
  locale?: 'en' | 'ar'
}) {
  const english = investigationPiece(slug)
  const piece = locale === 'ar' ? arabicPieceView(slug) : english
  const rendered = useMemo(() => {
    if (!piece) return { toc: [], body: [] }
    return renderInvestigationMarkdown(markdown, {
      title: piece.title,
      slugs: investigationSlugs,
      partsToc: piece.partsToc,
      base: locale === 'ar' ? arabicInvestigationBase : investigationBase,
      dir: locale === 'ar' ? 'rtl' : 'ltr',
      newTab: locale === 'ar' ? investigationNewTab.ar : undefined,
    })
  }, [locale, markdown, piece])

  if (!piece || !english) return null

  const published = piece.datePublished ?? investigationPublished
  const label = publishedLabel(published, locale)
  const enPath = english.path
  const arPath = arabicPathFor(english.path)
  const series = locale === 'ar' ? 'تحقيق التعرض الرقمي العالمي' : 'Global Digital Exposure Investigation'
  const backLabel = locale === 'ar' ? 'سطح الهجوم غير المرئي' : 'The Invisible Attack Surface'
  const backHref = locale === 'ar' ? arabicInvestigationBase : investigationBase
  const partsLabel = locale === 'ar' ? 'الأجزاء' : 'Parts'
  const printLabel = locale === 'ar' ? 'قائمة قابلة للطباعة' : 'Printable checklist'
  const printHref = locale === 'ar' ? arabicPrintPath : investigationPrintPath
  const fallbackByline = locale === 'ar' ? 'مكتب أبحاث ARTIore · الإصدار 1.0' : 'ARTIore Research Desk · Version 1.0'
  const showSurfaceImages = locale === 'en' && slug === 'executive-investigation'
  const og = showSurfaceImages ? invisibleAttackSurfaceOg : investigationOg
  const body = showSurfaceImages ? withExposureInfographic(rendered.body) : rendered.body

  return (
    <>
      <SeoHead
        alternates={investigationAlternates(enPath)}
        author="ARTIore Research Desk"
        authorOrganization="ARTIore"
        crumbName={piece.crumbName}
        dateModified={piece.dateModified}
        datePublished={published}
        description={piece.description}
        dir={locale === 'ar' ? 'rtl' : undefined}
        faqs={locale === 'ar' ? arabicInvestigationFaqs[slug] : investigationFaqs[slug]}
        headline={piece.title}
        image={og.src}
        imageAlt={og.alt}
        imageHeight={og.height}
        imageWidth={og.width}
        inLanguage={locale === 'ar' ? 'ar' : 'en'}
        kind="article"
        license={investigationLicenseUrl}
        locale={locale === 'ar' ? 'ar_AR' : 'en_US'}
        path={piece.path}
        title={piece.headTitle}
      />
      <Breadcrumbs current={piece.crumbName} label={locale === 'ar' ? 'مسار التنقل' : undefined} path={piece.path} />
      <article className="investigation" dir={locale === 'ar' ? 'rtl' : undefined} lang={locale === 'ar' ? 'ar' : undefined}>
        <header className="max-w-[68ch]">
          <InvestigationLanguageSwitcher arPath={arPath} current={locale} enPath={enPath} />
          <p className="text-xs uppercase tracking-[0.22em] text-gold">{series}</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-cream sm:text-5xl">{piece.title}</h1>
          {piece.dek ? <p className="mt-4 text-lg leading-relaxed text-cream/90">{piece.dek}</p> : null}
          <p className="mt-4 text-sm text-muted">
            {piece.byline ?? fallbackByline} · <time dateTime={published}>{label}</time>
            {piece.readingTime ? ` · ${piece.readingTime}` : ''}
          </p>
          <InvestigationLicense locale={locale} />
          <p className="mt-4 text-sm">
            <SiteLink className={linkClass} href={backHref}>
              {backLabel}
            </SiteLink>
          </p>
          {piece.printable ? (
            <p className="mt-4">
              <SiteLink className={`inline-flex min-h-11 items-center ${linkClass}`} href={printHref}>
                {printLabel}
              </SiteLink>
            </p>
          ) : null}
        </header>
        {showSurfaceImages ? (
          <img
            alt={invisibleAttackSurfaceCover.alt}
            className="mt-8 h-auto w-full max-w-[68ch]"
            height={invisibleAttackSurfaceCover.height}
            src={invisibleAttackSurfaceCover.src}
            width={invisibleAttackSurfaceCover.width}
          />
        ) : null}
        {locale === 'ar' ? <TranslationNotice englishPath={enPath} /> : null}
        <SincerityNote code={locale} />
        {rendered.toc.length > 0 ? (
          <nav aria-label={partsLabel} className="mt-10 max-w-[68ch] rounded-2xl border border-gold/30 bg-gold/5 p-5">
            <h2 className="font-serif text-2xl text-cream">{partsLabel}</h2>
            <ol className="mt-4 list-decimal space-y-2 ps-6 text-sm leading-relaxed text-cream/90">
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
        <div className="mt-10 min-w-0 space-y-4">{body}</div>
        {investigationCompanionUrls[slug] ? (
          <AlsoOnArtiore href={investigationCompanionUrls[slug]} locale={locale} />
        ) : null}
        {slug === 'source-register' ? (
          <VerificationSourceRegister locale={locale} />
        ) : (
          <ArticleVerificationSources locale={locale} slug={slug} />
        )}
        <SincerityNote code={locale} placement="bottom" />
      </article>
    </>
  )
}
