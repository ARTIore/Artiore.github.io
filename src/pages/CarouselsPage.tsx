import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SeoHead } from '../components/seo/SeoHead'
import { SiteLink } from '../components/content/SiteLink'
import { CarouselRow } from '../components/field-manual/CarouselRow'
import { SincerityNote } from '../components/field-manual/SincerityNote'
import { carouselDecks, carouselOgImage, carouselPdfPath } from '../content/field-manual/carousels'
import { carouselSeriesMeta } from '../content/field-manual/meta'

const downloadClass =
  'inline-flex min-h-11 items-center rounded-full bg-gold px-5 text-sm font-semibold text-ink hover:bg-gold-bright'

export default function CarouselsPage() {
  const first = carouselDecks[0].slides[0]

  return (
    <>
      <SeoHead
        author={carouselSeriesMeta.author}
        authorOrganization={carouselSeriesMeta.authorOrganization}
        crumbName={carouselSeriesMeta.crumbName}
        datePublished={carouselSeriesMeta.datePublished}
        description={carouselSeriesMeta.description}
        headline={carouselSeriesMeta.headline}
        image={carouselOgImage.src}
        imageAlt={first.alt}
        imageHeight={carouselOgImage.height}
        imageWidth={carouselOgImage.width}
        inLanguage={carouselSeriesMeta.inLanguage}
        kind={carouselSeriesMeta.kind}
        locale={carouselSeriesMeta.locale}
        path={carouselSeriesMeta.path}
        title={carouselSeriesMeta.headTitle}
      />
      <Breadcrumbs current={carouselSeriesMeta.crumbName} path={carouselSeriesMeta.path} />
      <article className="field-manual" lang="en">
        <header className="max-w-[68ch]">
          <h1 className="font-serif text-4xl leading-tight text-cream sm:text-5xl">Carousel Series</h1>
          <p className="mt-4 text-base text-cream/90">ARTIORE</p>
          <p className="mt-1 text-sm text-muted">
            <time dateTime="2026-10-23">23 October 2026</time>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gold-bright">
            Six decks · a companion to the pocket booklet
          </p>
          <p className="no-print mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
            <SiteLink
              className="underline decoration-gold/40 underline-offset-4 hover:text-cream"
              href="/field-manual"
            >
              Companion: Field Manual
            </SiteLink>
            <SiteLink
              className="underline decoration-gold/40 underline-offset-4 hover:text-cream"
              href="/field-manual/pocket-booklet"
            >
              Companion: Pocket Booklet
            </SiteLink>
          </p>
          <div className="mt-5">
            <a className={downloadClass} href={carouselPdfPath}>
              Download PDF
            </a>
          </div>
        </header>
        <p className="mt-6 max-w-[68ch] text-base leading-relaxed text-cream/90">
          Forty-eight slides in six carousels. Each deck stands alone. The pocket booklet holds the sources and the
          longer reading.
        </p>
        <SincerityNote code="en" />
        <nav aria-label="Carousels" className="mt-6 max-w-[68ch]">
          <ol className="space-y-1 text-sm">
            {carouselDecks.map((deck) => (
              <li key={deck.id}>
                <a
                  className="inline-flex min-h-11 items-center text-gold-bright underline decoration-gold/40 underline-offset-4"
                  href={`#${deck.id}`}
                >
                  {deck.number} {deck.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mt-12 space-y-16">
          {carouselDecks.map((deck) => (
            <section className="scroll-mt-36" id={deck.id} key={deck.id}>
              <h2 className="font-serif text-3xl text-cream">
                {deck.number} {deck.title}
                {deck.subtitle ? <span className="text-gold-bright"> — {deck.subtitle}</span> : null}
              </h2>
              <p className="mt-2 text-sm text-muted">{deck.slides.length} slides</p>
              <div className="mt-5">
                <CarouselRow label={`${deck.number} ${deck.title}`} slides={deck.slides} />
              </div>
              <details className="mx-auto mt-4 max-w-3xl rounded-2xl border border-white/10">
                <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-gold-bright">
                  Text of this carousel
                </summary>
                <div className="whitespace-pre-wrap px-4 pb-4 text-sm leading-relaxed text-cream/90">
                  {deck.slides.map((slide) => slide.text).join('\n\n')}
                </div>
              </details>
            </section>
          ))}
        </div>
        <p className="no-print mt-12">
          <a className={downloadClass} href={carouselPdfPath}>
            Download PDF
          </a>
        </p>
        <SincerityNote code="en" placement="bottom" />
      </article>
    </>
  )
}
