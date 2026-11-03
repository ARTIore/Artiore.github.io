import { useMemo, useState } from 'react'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SeoHead } from '../components/seo/SeoHead'
import { OpensInNewTab, SiteLink } from '../components/content/SiteLink'
import { claimsPageData } from '../content/investigations/claims-data'
import { claimsMeta } from '../content/meta'
import { ArabicClaimTrace } from '../components/investigations/ArabicClaimTrace'
import { InvestigationLanguageSwitcher } from '../components/investigations/InvestigationLanguageSwitcher'
import { arabicClaimWording, arabicCaveat, arabicReason } from '../content/investigations/ar/claim-copy'
import { arabicClaimsMeta } from '../content/investigations/ar/meta'
import { investigationAlternates } from '../content/investigations/locale'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

const labels = ['All', 'Confirmed', 'Demonstrated', 'Plausible', 'Unsupported', 'Not stated'] as const

function labelText(label: string) {
  return label || 'Not stated'
}

export default function ClaimsPage({ locale = 'en' }: { locale?: 'en' | 'ar' }) {
  const [query, setQuery] = useState('')
  const [label, setLabel] = useState<(typeof labels)[number]>('All')
  const claims = claimsPageData.claims
  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return claims.filter((claim) => {
      const shown = labelText(claim.label)
      if (label !== 'All' && shown !== label) return false
      if (!needle) return true
      const blob = [
        claim.id,
        claim.wording,
        claim.label,
        ...claim.caveats,
        ...claim.quotes,
        ...claim.sources.flatMap((source) => [source.name, source.url]),
        ...claim.history.flatMap((item) => [item.oldWording, item.newWording, item.reason, arabicReason[item.reason] ?? '']),
        arabicClaimWording[claim.id] ?? '',
        ...claim.caveats.map((caveat) => arabicCaveat[caveat] ?? ''),
      ]
        .join(' ')
        .toLowerCase()
      return blob.includes(needle)
    })
  }, [claims, label, query])

  if (locale === 'ar') {
    return (
      <ArabicClaimTrace
        label={label}
        query={query}
        setLabel={setLabel}
        setQuery={setQuery}
        visible={visible}
      />
    )
  }

  return (
    <>
      <SeoHead
        alternates={investigationAlternates(claimsMeta.path)}
        crumbName={claimsMeta.crumbName}
        description={claimsMeta.description}
        kind={claimsMeta.kind}
        path={claimsMeta.path}
        title={claimsMeta.headTitle}
      />
      <Breadcrumbs current={claimsMeta.crumbName} path={claimsMeta.path} />
      <article className="mx-auto max-w-3xl">
        <InvestigationLanguageSwitcher arPath={arabicClaimsMeta.path} current="en" enPath={claimsMeta.path} />
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Global Digital Exposure Investigation</p>
        <h1 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">Claim trace</h1>
        <p className="mt-4 text-lg leading-relaxed text-cream/90">
          These are the ledger claims that appear on the published investigation pages, plus every claim the ledger
          still marks unverified. Older pack notes that counted 124 claims are superseded. The derived ledger has{' '}
          {claimsPageData.ledgerTotal} claims. This page publishes {claimsPageData.publishedCount} of them.
        </p>
        <p className="mt-4 leading-relaxed text-cream/90">
          Six claims were rejected during review and are excluded. Their wording and sources are not published.
        </p>
        <p className="mt-4 leading-relaxed text-cream/90">
          Public grades follow the investigation’s evidence labels:{' '}
          <SiteLink className={linkClass} href="/investigations/digital-exposure/evidence-method/">
            evidence method
          </SiteLink>
          . Confirmed means documented in the wild. Demonstrated means proven in research, with no confirmed real-world
          exploitation. Plausible means technically coherent, without public evidence of exploitation. Unsupported means
          widely repeated, with no reliable evidence. Where the ledger verdict is adjusted, the page adds “Wording
          narrowed after review.”
        </p>

        <div className="mt-8 flex flex-wrap items-end gap-3">
          <label className="block text-sm text-muted" htmlFor="claim-search">
            Search
            <input
              className="mt-1 block min-h-11 w-64 rounded-full border border-gold/40 bg-ink px-4 text-cream"
              id="claim-search"
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              value={query}
            />
          </label>
          <label className="block text-sm text-muted" htmlFor="claim-label">
            Label
            <select
              className="mt-1 block min-h-11 rounded-full border border-gold/40 bg-ink px-4 text-cream"
              id="claim-label"
              onChange={(event) => setLabel(event.target.value as (typeof labels)[number])}
              value={label}
            >
              {labels.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <p className="text-sm text-muted">{visible.length} shown</p>
        </div>

        <div className="mt-8 space-y-6">
          {visible.map((claim) => (
            <article className="rounded-2xl border border-gold/20 p-4" id={claim.id} key={claim.id}>
              <p className="text-xs uppercase tracking-[0.16em] text-gold">{claim.id}</p>
              <h2 className="mt-2 font-serif text-2xl text-cream">{labelText(claim.label)}</h2>
              {claim.narrowed ? <p className="mt-2 text-sm text-gold-bright">Wording narrowed after review.</p> : null}
              {claim.wording ? <p className="mt-3 leading-relaxed text-cream/90">{claim.wording}</p> : null}
              {claim.sources.length > 0 ? (
                <ul className="mt-3 space-y-1 text-sm">
                  {claim.sources.map((source) => (
                    <li key={`${source.name}-${source.url}`}>
                      {source.url ? (
                        <a className={linkClass} href={source.url} rel="noreferrer" target="_blank">
                          {source.name || source.url}
                          <OpensInNewTab />
                        </a>
                      ) : (
                        <span className="text-cream/90">{source.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : null}
              {claim.quotes.length > 0 ? (
                <div className="mt-3 space-y-2">
                  {claim.quotes.map((quote) => (
                    <blockquote className="border-l-4 border-gold/40 pl-3 text-sm text-cream/80" key={quote}>
                      {quote}
                    </blockquote>
                  ))}
                </div>
              ) : null}
              {claim.caveats.length > 0 ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                  {claim.caveats.map((caveat) => (
                    <li key={caveat}>{caveat}</li>
                  ))}
                </ul>
              ) : null}
              {claim.history.length > 0 ? (
                <div className="mt-3 space-y-2 text-sm text-cream/80">
                  {claim.history.map((item) => (
                    <p key={`${item.date}-${item.newWording}`}>
                      {item.date}: {item.oldWording} → {item.newWording}
                      {item.reason ? ` (${item.reason})` : ''}
                    </p>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <section className="mt-12 border-t border-white/10 pt-8" id="integrity">
          <h2 className="font-serif text-3xl text-gold-bright">Integrity</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            The current verdict is the latest verdict that has not been reversed. A claim with no verdict is unverified.
            Each ledger entry carries a digest. That digest is the SHA-256 of the previous entry’s digest plus a
            canonical record of the entry. The build checks the full chain and stops if it breaks. The files below list
            the digest, and the digest before it, for entries tied to the claims on this page. The record covers what
            was checked and when. It is not proof that a status was true before the entry was written.
          </p>
          <p className="mt-4">
            <a className={linkClass} href="/investigations/digital-exposure/claims/chain.json">
              Download the digest chain (JSON)
            </a>
          </p>
          <p className="mt-2">
            <a className={linkClass} href="/investigations/digital-exposure/claims/chain.csv">
              Download the digest chain (CSV)
            </a>
          </p>
        </section>
      </article>
    </>
  )
}
