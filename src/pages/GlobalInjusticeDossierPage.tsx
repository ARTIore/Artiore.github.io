import { ArticleIllustration } from '../components/content/PageHero'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { ExternalLink, SiteLink } from '../components/content/SiteLink'
import { SeoHead } from '../components/seo/SeoHead'
import {
  globalInjusticeAlternatesFor,
  globalInjusticeBase,
  globalInjusticeHub,
  globalInjusticePublished,
  globalInjusticeSourceCheck,
} from '../content/global-injustice/catalog'
import { injusticePage } from '../content/global-injustice/dossiers'
import { injusticeSource } from '../content/global-injustice/sources'
import { RelatedReadingFor } from '../components/related/RelatedReading'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

const cafc = injusticeSource('cafc')

export default function GlobalInjusticeDossierPage({ id }: { id: string }) {
  const page = injusticePage(id)
  if (!page) {
    return (
      <article>
        <h1>This dossier is not on the site.</h1>
      </article>
    )
  }
  const sources = page.sourceIds.map((sourceId) => injusticeSource(sourceId))

  return (
    <>
      <SeoHead
        alternates={globalInjusticeAlternatesFor(page.path)}
        author="ARTIore Research Desk"
        authorOrganization="ARTIore"
        crumbName={page.crumbName}
        dateModified={globalInjusticeSourceCheck}
        datePublished={globalInjusticePublished}
        description={page.description}
        headline={page.title}
        inLanguage="en"
        kind="article"
        locale="en_US"
        path={page.path}
        title={page.headTitle}
      />
      <Breadcrumbs current={page.crumbName} path={page.path} />
      <article className="investigation max-w-[68ch]" lang="en">
        <header>
          <p className="text-xs uppercase tracking-[0.22em] text-gold">{page.kicker}</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-cream">{page.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-cream/90">{page.finding}</p>
          <p className="mt-3 text-sm text-gold-bright">Rung in this edition: {page.findingRung}</p>
          {page.seesCorrections ? (
            <p className="mt-3 text-sm leading-relaxed text-cream/90">
              <SiteLink className={linkClass} href="/investigations/global-injustice/#corrections">
                Corrections and updates, 3 November 2026
              </SiteLink>
            </p>
          ) : null}
          <p className="mt-3 text-sm text-muted">
            <SiteLink className={linkClass} href={globalInjusticeHub.path}>
              Global Injustice Investigation
            </SiteLink>
            {' · '}
            <time dateTime={globalInjusticeSourceCheck}>Source check 3 November 2026</time>
          </p>
        </header>

        <section className="mt-10">
          <h2 className="font-serif text-3xl text-cream">The lead</h2>
          <p className="mt-4 leading-relaxed text-cream/90">{page.lead}</p>
          <ArticleIllustration path={page.path} />
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-3xl text-cream">What the record shows</h2>
          <div className="mt-6 space-y-8">
            {page.record.map((block) => (
              <section key={`${block.rung}-${block.text.slice(0, 48)}`}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-bright">{block.rung}</h3>
                <p className="mt-3 leading-relaxed text-cream/90">{block.text}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-3xl text-cream">Strongest case for</h2>
          <p className="mt-4 leading-relaxed text-cream/90">{page.caseFor}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-3xl text-cream">Strongest case against</h2>
          <p className="mt-4 leading-relaxed text-cream/90">{page.caseAgainst}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-3xl text-cream">Still open</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-cream/90">
            {page.stillOpen.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-3xl text-cream">Next sources</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-cream/90">
            {page.nextSources.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-3xl text-cream">Falsifier</h2>
          <p className="mt-4 leading-relaxed text-cream/90">{page.falsifier}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-3xl text-cream">Confidence</h2>
          <p className="mt-4 leading-relaxed text-cream/90">{page.confidence}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            HIGH, MEDIUM and LOW are this desk’s confidence line. They are not Verified or Unverified, and they are
            not Confirmed, Demonstrated, Plausible or Unsupported.
          </p>
        </section>

        {page.id === 'L7' ? (
          <section className="mt-10" id="report-fraud">
            <h2 className="font-serif text-3xl text-cream">Reporting a fraud</h2>
            <p className="mt-4 leading-relaxed text-cream/90">
              The complaint statistics above are not a place to report a crime. If you are in Canada and you need to
              report a fraud or a phishing message, use the{' '}
              <ExternalLink className={linkClass} href={cafc.url}>
                Canadian Anti-Fraud Centre
              </ExternalLink>
              .
            </p>
          </section>
        ) : null}

        {page.heldBack.length > 0 ? (
          <section className="mt-10 rounded-2xl border border-gold/30 p-5" id="not-confirmed">
            <h2 className="font-serif text-2xl text-cream">Not confirmed in this edition</h2>
            <p className="mt-3 leading-relaxed text-cream/90">
              These sentences appear in the 3 November 2026 desk report. They are not findings. A source was not
              opened, or the source that was opened did not say this.
            </p>
            <ul className="mt-4 space-y-4">
              {page.heldBack.map((item) => (
                <li key={item.deskClaim}>
                  <p className="font-semibold text-cream">{item.deskClaim}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.14em] text-gold">{item.disposition}</p>
                  <p className="mt-1 leading-relaxed text-cream/90">{item.detail}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <RelatedReadingFor sourcePath={page.path} />

        <section className="mt-10" id="sources">
          <h2 className="font-serif text-3xl text-cream">Sources opened</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Each link was opened on <time dateTime={globalInjusticeSourceCheck}>3 November 2026</time>. The log of
            sources that were replaced, removed, or unreachable is kept with the edition, not only the links that
            survived.
          </p>
          <ul className="mt-4 space-y-4">
            {sources.map((source) => (
              <li key={source.id}>
                <p className="text-cream">{source.title}</p>
                <p className="text-sm text-muted">{source.publisher}</p>
                <ExternalLink className={`${linkClass} mt-1 inline-block break-all`} href={source.url}>
                  {source.publisher}: {source.title}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10">
          <SiteLink className={linkClass} href={globalInjusticeBase}>
            Back to the investigation
          </SiteLink>
        </p>
      </article>
    </>
  )
}
