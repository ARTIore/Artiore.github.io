import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SeoHead } from '../components/seo/SeoHead'
import { SiteLink } from '../components/content/SiteLink'
import {
  globalInjusticeAlternatesFor,
  globalInjusticeHub,
  globalInjusticePages,
  globalInjusticePublished,
  globalInjusticeSourceCheck,
} from '../content/global-injustice/catalog'
import { confidenceDefinitions, ladderDefinitions } from '../content/global-injustice/ladder'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

export default function GlobalInjusticeHubPage() {
  return (
    <>
      <SeoHead
        alternates={globalInjusticeAlternatesFor(globalInjusticeHub.path)}
        author="ARTIore Research Desk"
        authorOrganization="ARTIore"
        crumbName={globalInjusticeHub.crumbName}
        dateModified={globalInjusticeSourceCheck}
        datePublished={globalInjusticePublished}
        description={globalInjusticeHub.description}
        headline={globalInjusticeHub.title}
        inLanguage="en"
        kind="article"
        locale="en_US"
        path={globalInjusticeHub.path}
        title={globalInjusticeHub.headTitle}
      />
      <Breadcrumbs current={globalInjusticeHub.crumbName} path={globalInjusticeHub.path} />
      <article className="investigation" lang="en">
        <header className="max-w-[68ch]">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Desk investigation</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-cream sm:text-5xl">{globalInjusticeHub.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-cream/90">
            Eleven dossiers, L1 to L11, read from public records. Descriptive only.
          </p>
          <p className="mt-3 text-sm text-muted">
            Version 1.0 · <time dateTime={globalInjusticePublished}>3 November 2026</time> · English
          </p>
        </header>

        <section className="mt-10 max-w-[68ch] rounded-2xl border border-gold/30 bg-white/[0.03] p-5" id="limits">
          <h2 className="font-serif text-2xl text-cream">What this is, and what it is not</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            This is a desk investigation built from public sources. It had no field access, no confidential sources,
            and no paywalled dockets beyond pages that opened. Searches were in English, which under-samples records
            in other languages. Data vintages differ: a 2015 justice report, a 2019 charity inquiry, 2024 and 2025
            complaint statistics, and pages opened in 2026 sit side by side. Estimates are labelled as estimates.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            Last source check: <time dateTime={globalInjusticeSourceCheck}>3 November 2026</time>. A figure from the
            desk report is a finding on this site only when a source opened that day supports the sentence it is
            attached to. Anything else is marked “Not confirmed in this edition” and is not a finding.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            English only. A later translation can sit beside this route, as the Arabic edition sits beside the Global
            Digital Exposure Investigation. That structure is reserved. It is not published here.
          </p>
        </section>

        <section className="mt-12 max-w-[68ch]" id="ladder">
          <h2 className="font-serif text-3xl text-cream">The evidence ladder</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            This investigation uses its own four rungs. They are not the record statuses Verified and Unverified.
            They are not the Digital Exposure grades Confirmed, Demonstrated, Plausible and Unsupported.
            ESTABLISHED does not mean Verified, and it does not mean Confirmed.
          </p>
          <dl className="mt-6 space-y-4">
            {ladderDefinitions.map((item) => (
              <div key={item.rung}>
                <dt className="font-semibold text-gold-bright">{item.rung}</dt>
                <dd className="mt-1 leading-relaxed text-cream/90">{item.meaning}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-8 font-serif text-2xl text-cream">Desk confidence</h3>
          <p className="mt-3 leading-relaxed text-cream/90">
            HIGH, MEDIUM and LOW are a separate line. They say how far the opened sources carry the finding. They
            are not a fifth rung, and they are not Verified, Unverified, Confirmed, Demonstrated, Plausible or
            Unsupported.
          </p>
          <dl className="mt-4 space-y-3">
            {confidenceDefinitions.map((item) => (
              <div key={item.level}>
                <dt className="font-semibold text-gold-bright">{item.level}</dt>
                <dd className="mt-1 leading-relaxed text-cream/90">{item.meaning}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12" id="findings">
          <h2 className="font-serif text-3xl text-cream">Findings in this edition</h2>
          <ol className="mt-6 space-y-4">
            {globalInjusticePages.map((item) => (
              <li className="rounded-2xl border border-white/10 p-4" key={item.id}>
                <p className="text-sm font-semibold text-gold-bright">{item.findingRung}</p>
                <h3 className="mt-1 font-serif text-xl text-cream">
                  <SiteLink className={linkClass} href={item.path}>
                    {item.id === 'synthesis' ? 'Synthesis' : item.id}
                  </SiteLink>
                </h3>
                <p className="mt-2 leading-relaxed text-cream/90">{item.finding}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12" id="dossiers">
          <h2 className="font-serif text-3xl text-cream">Read the dossiers</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {globalInjusticePages.map((item) => (
              <li key={item.path}>
                <article className="h-full rounded-2xl border border-gold/20 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">{item.kicker}</p>
                  <h3 className="mt-2 font-serif text-xl text-cream">
                    <SiteLink className={linkClass} href={item.path}>
                      {item.title}
                    </SiteLink>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.finding}</p>
                  <p className="mt-3 text-xs text-gold-bright">{item.findingRung}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 max-w-[68ch]" id="corrections">
          <h2 className="font-serif text-3xl text-cream">Corrections</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            Version 1.0, 3 November 2026. No correction has been carried yet. When a claim changes, the correction
            will be stated here with the dossier, the original wording, the corrected wording, and the source that
            forced the change.
          </p>
        </section>
      </article>
    </>
  )
}
