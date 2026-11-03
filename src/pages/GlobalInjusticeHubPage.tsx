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
import { RelatedReadingFor } from '../components/related/RelatedReading'

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
            Last source check: <time dateTime={globalInjusticeSourceCheck}>3 November 2026</time>, revised edition.
            A figure is a finding only when a source opened that day supports the sentence it is attached to.
            Anything else is marked “Not confirmed in this edition” and is not a finding. The revised report
            supersedes the earlier desk report’s conclusions for the claims it discusses. It does not certify every
            number in that earlier document.
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

        <RelatedReadingFor sourcePath={globalInjusticeHub.path} />

        <section className="mt-12 max-w-[68ch]" id="method">
          <h2 className="font-serif text-3xl text-cream">Method and limits</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            This is a public-source desk review of leads L1 to L11. L12 to L16 are omitted. Searches were in English.
            There were no interviews, no confidential sources, no device examinations, and no new global estimates.
            Historical findings stay historical. “3 November 2026” is the day the sources were opened, not the year
            every dataset measures. A single programme’s estimate is not an independent replication. Allegations,
            institutional positions, and inferences are kept apart.
          </p>
        </section>

        <section className="mt-12 max-w-[68ch]" id="evidence-needed">
          <h2 className="font-serif text-3xl text-cream">Prioritized evidence still needed</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            These are gaps. They are not work already done.
          </p>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-cream/90">
            <li>Compensation, restoration, and beneficiary outcomes, for L1, L5, and L6.</li>
            <li>Who ordered a restriction or an intrusion, under what authority, and with what remedy, for L3, L4, and L11.</li>
            <li>Ownership, meetings, job offers, tender scores, and drafts, for L2 and L10.</li>
            <li>Victim surveys, changes in how reports are counted, and audit exceptions, for L7 and L8.</li>
            <li>Household panels, learning assessments, and comprehension tests, for L6 and L9.</li>
          </ol>
        </section>

        <section className="mt-12 max-w-[68ch]" id="corrections">
          <h2 className="font-serif text-3xl text-cream">Corrections and updates</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            <time dateTime="2026-11-03">3 November 2026</time>. The revised desk report corrected the first edition.
            Each item below says whether this site could open the source.
          </p>
          <ol className="mt-4 list-decimal space-y-4 pl-6 leading-relaxed text-cream/90">
            <li>
              L1, Myanmar. The human-rights assessment was done between May and September 2018. It cannot, by itself,
              be a warning issued before 2017. The assessment’s own dates were opened.
            </li>
            <li>
              L1, Rwanda. The parliamentary answer dated 5 August 2024 did not open, so that end date is not stated.
              A Rwanda government PDF does show a notice of arbitration on 24 November 2025 under the migration treaty.
            </li>
            <li>
              L1, Post Office. Volume 1 of the inquiry’s final report was ordered printed on 8 July 2025 and, on the
              inquiry’s page, addresses human impact and redress. Prosecutions, convictions, quashed convictions, and
              compensation eligibility are not one number. The earlier “more than 900” count stays unused.
            </li>
            <li>
              L3. The unqualified figure of 130 deaths in 2025 is not used. CPJ’s 25 February 2026 release reports 129
              and says the database changes. That release is not a certified count for a later day.
            </li>
            <li>
              L7. A category, a place, a denominator, and a period are required. Reported dollar losses can rise while
              the global homicide rate falls. The UN page and the IC3 PDF were opened. The FBI file-site copy of the
              same report was not.
            </li>
            <li>
              L11, sanctions. The November 2021 action that opened is a Commerce Entity List notice for NSO Group and
              Candiru. Treasury’s 5 March 2024 release designates Intellexa-related persons and entities. Those are
              different instruments. The 30 December 2025 removal notice was not in the register file retrieved, so
              the removals are not stated.
            </li>
            <li>
              L11, litigation. The 12 November 2025 judgment PDF was opened. It distinguishes the jury award, the
              reduced punitive amount, and the injunction dates. The appellate docket did not open, so no final
              appellate result is stated.
            </li>
            <li>
              Across dossiers. This edition withdraws two sentences: that missing records are usually held by powerful
              actors, and that hidden harm at the top exceeds hidden household harm. Neither comparative claim is
              established. Custody has to be shown case by case.
            </li>
          </ol>
        </section>
      </article>
    </>
  )
}
