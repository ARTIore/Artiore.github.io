import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SeoHead } from '../components/seo/SeoHead'
import { SiteLink } from '../components/content/SiteLink'
import { SincerityNote } from '../components/field-manual/SincerityNote'
import {
  investigationHub,
  investigationOg,
  investigationPieces,
  investigationPrintPath,
  investigationPublished,
} from '../content/investigations/catalog'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

const findings = [
  'The perimeter has moved inside the device: identities, tokens and permissions now matter more than network walls.',
  'Encryption protects a channel, not an endpoint.',
  'The most damaging attacks are targeted, not universal.',
  'Everyday fraud is where the money actually goes: $20.877bn in reported losses to the FBI in 2025.',
  'Hospitality is a structural target, not a criminal franchise.',
  'Users fail because interfaces hide consequences, not because they are careless.',
]

export default function InvestigationHubPage() {
  const executive = investigationPieces.find((piece) => piece.slug === 'executive-investigation')
  const matrix = investigationPieces.find((piece) => piece.slug === 'global-threat-matrix')
  const checklist = investigationPieces.find((piece) => piece.slug === 'public-safety-checklist')
  const register = investigationPieces.find((piece) => piece.slug === 'source-register')

  return (
    <>
      <SeoHead
        author="ARTIore Research Desk"
        authorOrganization="ARTIore"
        crumbName={investigationHub.crumbName}
        datePublished={investigationPublished}
        description={investigationHub.description}
        headline={investigationHub.title}
        image={investigationOg.src}
        imageAlt={investigationOg.alt}
        imageHeight={investigationOg.height}
        imageWidth={investigationOg.width}
        inLanguage="en"
        kind="article"
        locale="en_US"
        path={investigationHub.path}
        title={investigationHub.headTitle}
      />
      <Breadcrumbs current={investigationHub.crumbName} path={investigationHub.path} />
      <article className="investigation">
        <header className="max-w-[68ch]">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Global Digital Exposure Investigation</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-cream sm:text-5xl">{investigationHub.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-cream/90">
            How everyday technology can compromise privacy, identity and financial security
          </p>
          <p className="mt-3 text-sm text-muted">
            Version 1.0 · <time dateTime={investigationPublished}>26 October 2026</time> · Public
          </p>
        </header>
        <SincerityNote code="en" />
        <div className="mt-10 max-w-[68ch] space-y-4 text-base leading-relaxed text-cream/90">
          <p>
            This investigation examines ten widespread assumptions about digital safety, then traces the technical layers
            beneath them: shared networks, the Domain Name System, Bluetooth and Bluetooth Low Energy, accessibility
            services, mobile operating system exploitation, encrypted messaging, commercial spyware, cloud storage, and
            cryptocurrency. It closes by showing how these layers combine, how the human cost of complexity is produced,
            and what readers can realistically do.
          </p>
        </div>

        <section className="mt-12 max-w-[68ch]">
          <h2 className="font-serif text-3xl text-cream">The six findings</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-cream/90">
            {findings.map((finding) => (
              <li key={finding}>{finding}</li>
            ))}
          </ol>
        </section>

        <section className="mt-12 max-w-[68ch]">
          <h2 className="font-serif text-3xl text-cream">Reading order</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-cream/90">
            <li>
              {executive ? (
                <SiteLink className={linkClass} href={executive.path}>
                  <strong>Executive investigation</strong>
                </SiteLink>
              ) : (
                <strong>Executive investigation</strong>
              )}{' '}
              — start here. The executive summary gives the six findings; Part XV indexes the rest.
            </li>
            <li>
              {matrix ? (
                <SiteLink className={linkClass} href={matrix.path}>
                  <strong>Threat matrix</strong>
                </SiteLink>
              ) : (
                <strong>Threat matrix</strong>
              )}{' '}
              — for a comparative view and risk-adjusted priorities.
            </li>
            <li>
              {checklist ? (
                <SiteLink className={linkClass} href={checklist.path}>
                  <strong>Checklist</strong>
                </SiteLink>
              ) : (
                <strong>Checklist</strong>
              )}{' '}
              — for the actionable layer.{' '}
              <SiteLink className={linkClass} href={investigationPrintPath}>
                Printable checklist
              </SiteLink>
            </li>
            <li>
              <a className={linkClass} href="#pieces">
                <strong>Articles</strong>
              </a>{' '}
              — for distribution and search.
            </li>
            <li>
              {register ? (
                <SiteLink className={linkClass} href={register.path}>
                  <strong>Source register</strong>
                </SiteLink>
              ) : (
                <strong>Source register</strong>
              )}{' '}
              — for fact-checking.
            </li>
          </ol>
        </section>

        <section className="mt-12" id="pieces">
          <h2 className="font-serif text-3xl text-cream">Every piece</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {investigationPieces.map((piece) => (
              <li key={piece.path}>
                <article className="h-full rounded-2xl border border-gold/20 bg-white/[0.03] p-5">
                  {piece.kicker ? (
                    <p className="text-xs uppercase tracking-[0.18em] text-gold">{piece.kicker}</p>
                  ) : null}
                  <h3 className="mt-2 font-serif text-xl text-cream">
                    <SiteLink className={linkClass} href={piece.path}>
                      {piece.title}
                    </SiteLink>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{piece.summary}</p>
                  {piece.readingTime ? <p className="mt-3 text-xs text-muted">{piece.readingTime}</p> : null}
                  {piece.printable ? (
                    <p className="mt-3">
                      <SiteLink className={`inline-flex min-h-11 items-center ${linkClass}`} href={investigationPrintPath}>
                        Printable checklist
                      </SiteLink>
                    </p>
                  ) : null}
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 max-w-[68ch]">
          <h2 className="font-serif text-3xl text-cream">Citation</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            ARTIore Research Desk,{' '}
            <em>
              The Invisible Attack Surface: How Everyday Technology Can Compromise Privacy, Identity and Financial
              Security
            </em>
            , Global Digital Exposure Investigation, version 1.0, 26 October 2026.
          </p>
          <p className="mt-3 text-cream/90">
            <em>ARTIore — Intelligence in Service of Humanity.</em>
          </p>
        </section>

        <section className="mt-12 max-w-[68ch]" id="corrections">
          <h2 className="font-serif text-3xl text-cream">Corrections log</h2>
          <p className="mt-4 leading-relaxed text-cream/90">Version 1.0 published 31 October 2026. No corrections yet.</p>
        </section>

        <SincerityNote code="en" placement="bottom" />
      </article>
    </>
  )
}
