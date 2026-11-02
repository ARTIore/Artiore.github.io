import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SeoHead } from '../components/seo/SeoHead'
import { SiteLink } from '../components/content/SiteLink'
import { SincerityNote } from '../components/field-manual/SincerityNote'
import { AlsoOnArtiore } from '../components/investigations/AlsoOnArtiore'
import { InvestigationLicense } from '../components/investigations/InvestigationLicense'
import { investigationHubCompanionUrl } from '../content/investigations/companions'
import {
  investigationHub,
  investigationLicenseUrl,
  investigationOg,
  investigationPieces,
  investigationHubPublished,
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
        license={investigationLicenseUrl}
        locale="en_US"
        path={investigationHub.path}
        title={investigationHub.headTitle}
      />
      <Breadcrumbs current={investigationHub.crumbName} path={investigationHub.path} />
      <article className="investigation">
        <header className="max-w-[68ch]">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">The Invisible Attack Surface</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-cream sm:text-5xl">{investigationHub.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-cream/90">
            How everyday technology can compromise privacy, identity and financial security
          </p>
          <p className="mt-3 text-sm text-muted">
            Version 1.0 · <time dateTime={investigationHubPublished}>31 October 2026</time> · Public
          </p>
          <InvestigationLicense />
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
              — for fact-checking. The{' '}
              <SiteLink className={linkClass} href="/investigations/digital-exposure/claims/">
                claim trace
              </SiteLink>{' '}
              lists the published claims behind these pages.
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
          <p className="mt-4 leading-relaxed text-cream/90">Version 1.0 published 31 October 2026.</p>
          <p className="mt-4 leading-relaxed text-cream/90">
            31 October 2026: added two articles, Browser Extensions and Session Theft, and Digital Security Warning Signs.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            1 November 2026: the framework article was added and the hotel Wi-Fi guide was expanded.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            1 November 2026 — linked verification sources added to the source register and articles.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — BlueBorne is narrowed to CVE-2017-1000251, Linux kernels 2.6.32 through
            4.13.1. It is not a universal unpaired attack. The same correction is on the Bluetooth page, the
            glossary, the executive summary, and the source register.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — KNOB can force negotiated key entropy down to one byte in the worst case.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — BIAS remains CVE-2020-10135. CVE-2020-12351 is a different BlueZ flaw and is
            not merged with BIAS.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — Apple and Google unwanted-tracking alerts from May 2024 are
            compatibility-dependent. A sentence that researchers had shown the alerts can be evaded was
            removed.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — iPhone patch boundaries: FORCEDENTRY was fixed in iOS 14.8. BLASTPASS and
            Operation Triangulation use 16.6.1 as the patch boundary. The BLASTPASS sources disagree on
            whether 16.6.1 is inside the affected range or is the fix, and that conflict is stated rather than
            averaged.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — CVE-2025-24200 requires physical access and is not a zero-click chain.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — DNS, Sea Turtle: the scope is dozens of organisations in at least 13 countries,
            single-source, not “more than 40 organisations.”
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — DNS, Sitting Ducks: the “around one million” vulnerable-domain figure is
            labeled an estimate.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — DNS, Route 53: the April 2018 hijack loss is a reported figure of roughly
            US$150,000.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — DNS, Emergency Directive 19-01 is dated 22 January 2019. It is not described as
            prompted by the April 2019 Sea Turtle disclosure.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — DNSChanger is labeled two-source. The sentence no longer says the malware
            altered settings on millions of machines.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — DNS, CVE-2008-1447 is named for the 2008 cache-poisoning class. The
            vulnerability record is not treated as a history of the later response.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — DNS control can redirect, block, or delay a connection. It does not decrypt a
            correctly validated TLS session. DNSSEC protects integrity, not confidentiality.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — The DNS router example no longer lists UPnP misconfiguration as the attack
            path. It names default credentials or a firmware flaw.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — Android accessibility mitigations, including Android 12, 13, and 15, are
            described as partial.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — Anatsa’s figure of more than 100,000 Google Play installs is reported, not
            independently audited.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — Hotel Wi-Fi keeps this provisional label in full: SNI and DNS are supported;
            timing, volume, and URL logging are documented by vendor and industry sources, and primary
            verification is pending.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — Hotel Wi-Fi: WPA3 management-frame protection is partial, and only when both
            the access point and the device support it. 802.11w remains optional.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — SIM swap, including on the WhatsApp page: the verification-code path is
            documented and is not the only messaging takeover route. Session revocation is separate from a
            password change. The routes are not ranked.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — Pegasus Project: more than 50,000 numbers are potential targets, not confirmed
            infections.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — OFAC’s 30 December 2025 action deleted three individuals, Sara Hamou, Andrea
            Gambazzi, and Merom Harpaz. It did not delete Intellexa or Cytrox as entities. A UK sanctions-list
            search on 2 November 2026 found no rows for those three names.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — The May 2025 civil award against NSO is not technical proof of every alleged
            infection. The Million Dollar Dissident case is one documented episode, not a prevalence study.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — The public safety checklist adds an eight-step reset. It is not a guarantee.
            Lockdown Mode stays conditional. Advanced Data Protection exclusions for Mail, Contacts, and
            Calendars are stated.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — Added four pages: Deepfakes and AI Payment Fraud; Regional Reporting, Not a
            Ranking; Stalkerware and Safety Planning; and Evidence Method.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            2 November 2026 — Licence added: Creative Commons Attribution 4.0 International (CC BY 4.0). The
            version date on the hub is 31 October 2026, the date this hub was first published.
          </p>
        </section>

        <AlsoOnArtiore href={investigationHubCompanionUrl} />
        <SincerityNote code="en" placement="bottom" />
      </article>
    </>
  )
}
