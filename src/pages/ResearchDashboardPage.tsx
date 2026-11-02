import { useMemo, useState } from 'react'
import { LoadJsonButton } from '../components/research/LoadJsonButton'
import {
  GlossaryList,
  LanguageNote,
  OtherTools,
  PrivacyNote,
  ReadingControls,
  SafetyFrame,
} from '../components/safety/safety-ui'
import { buttonClass, linkClass } from '../components/safety/safety-styles'
import { SiteLink } from '../components/content/SiteLink'
import {
  claimStatusLabel,
  publicationStatusLabel,
  correctionStatusLabel,
  illustrativeClaims,
  illustrativeCorrection,
  illustrativeExchange,
  illustrativeLabel,
  rejectedVerifiedSample,
} from '../content/research/samples'
import { researchMeta } from '../content/meta'
import { FILE_STATUS_IS_NOT_APPROVAL, fileClaimsAuthority } from '../lib/evidence/corrections'
import { interpretLedger } from '../lib/evidence/ledger'
import { validateEvidence } from '../lib/evidence/validate'
import { reviewRecords } from '../lib/research/review'

type Claim = {
  claim_id: string
  statement: string
  status: string
  sources: readonly { url?: string }[]
  scope: string
  limitations: readonly string[]
  verification_method: string | null
  verified_at: string | null
  conflicting_evidence: readonly unknown[]
  publication_status: string
  human_approval: unknown
  revision_history: readonly unknown[]
}
type Correction = {
  correction_id: string
  claim_id: string
  original_statement: string
  proposed_statement: string
  reason: string
  evidence_urls: readonly string[]
  status: string
  public_note?: string
}

const rejected = validateEvidence(rejectedVerifiedSample)

function download(data: unknown, name: string) {
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = name
  anchor.click()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export default function ResearchDashboardPage() {
  const [large, setLarge] = useState(false)
  const [spacious, setSpacious] = useState(false)
  const [paused, setPaused] = useState(false)
  const [claims, setClaims] = useState<Claim[]>(() => illustrativeClaims.map((claim) => ({ ...claim })))
  const [corrections, setCorrections] = useState<Correction[]>([{ ...illustrativeCorrection }])
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [message, setMessage] = useState(illustrativeLabel)
  const [issues, setIssues] = useState<string[]>([])

  const flags = useMemo(() => reviewRecords(claims), [claims])
  const flaggedIds = useMemo(() => new Set(flags.flatMap((flag) => flag.ids)), [flags])
  const shown = claims.filter((claim) => {
    const text = `${claim.claim_id} ${claim.statement} ${claim.status}`.toLowerCase()
    if (query.trim() && !text.includes(query.trim().toLowerCase())) return false
    if (filter === 'flagged') return flaggedIds.has(claim.claim_id)
    if (filter === 'unsourced') return claim.sources.length === 0
    if (filter === 'not-published') return claim.publication_status !== 'PUBLISHED'
    return true
  })
  const unmatched = corrections.filter((correction) => !claims.some((claim) => claim.claim_id === correction.claim_id))

  function load(text: string) {
    let data: unknown
    try {
      data = JSON.parse(text) as unknown
    } catch {
      setIssues(['The file is not valid JSON.'])
      setMessage('Import rejected. Nothing was replaced.')
      return
    }
    const result = interpretLedger(data)
    if (!result.ok) {
      setIssues(result.issues.map((item) => `${item.path ? `${item.path}: ` : ''}${item.message}`))
      setMessage('Import rejected. The schema was not met, so the file was not loaded.')
      return
    }
    if (result.claims) setClaims(result.claims as Claim[])
    if (result.corrections) setCorrections(result.corrections as Correction[])
    setIssues(result.warnings.map((item) => item.message))
    setMessage(
      result.kind === 'exchange'
        ? 'Exchange file loaded. Status words in the file were not treated as approval.'
        : 'File loaded. Status words in the file were not treated as approval.',
    )
  }

  return (
    <SafetyFrame className={`${large ? 'text-xl' : ''} ${spacious ? 'leading-loose' : ''}`} meta={researchMeta} wide>
      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Research, not lessons</p>
        <h1 className="mt-3 font-serif text-4xl text-cream">Research review</h1>
        <p className="mt-4 max-w-[68ch] text-lg text-cream/90">
          Count gaps in claim files and correction requests. This page does not decide what is true, and it does not
          publish anything.
        </p>
        <LanguageNote />
      </header>
      <section className="mt-8 rounded-2xl border border-gold/30 p-4">
        <p className="max-w-[68ch] text-cream">
          <strong>{illustrativeLabel} </strong>
          The two loaded claims disagree on purpose, so you can see a wording flag. A third sample that says verified,
          with no method and no source, is rejected below. A label inside a file is not approval.
        </p>
        <ReadingControls
          large={large}
          onLarge={() => setLarge((value) => !value)}
          onPause={() => setPaused((value) => !value)}
          onSpacious={() => setSpacious((value) => !value)}
          paused={paused}
          spacious={spacious}
        />
      </section>
      {paused ? (
        <p className="mt-6 text-cream/90" role="status">
          Review is paused.
        </p>
      ) : (
        <>
          <section aria-label="Record counts" className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {[
              [String(claims.length), 'Claims loaded'],
              [String(claims.filter((claim) => claim.sources.length > 0).length), 'With sources'],
              [String(flags.length), 'Wording flags'],
              [String(corrections.length), 'Correction requests'],
              [String(unmatched.length), 'Requests with no claim'],
              [String(rejected.issues.length), 'Reasons the extra sample was rejected'],
            ].map(([value, label]) => (
              <article className="rounded-2xl border border-gold/20 p-3" key={label}>
                <p className="font-serif text-3xl text-gold-bright">{value}</p>
                <p className="text-sm text-cream/90">{label}</p>
              </article>
            ))}
          </section>
          <section className="mt-8 min-w-0">
            <h2 className="font-serif text-2xl text-cream">Load a file</h2>
            <div className="mt-4 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block min-w-0 text-cream" htmlFor="research-search">
                Search claims
                <input
                  className="mt-1 block w-full min-w-0 rounded-xl border border-gold/30 bg-ink px-3 py-2"
                  id="research-search"
                  onChange={(event) => setQuery(event.target.value)}
                  type="search"
                  value={query}
                />
              </label>
              <label className="block min-w-0 text-cream" htmlFor="research-filter">
                Show
                <select
                  className="mt-1 block w-full min-w-0 rounded-xl border border-gold/30 bg-ink px-3 py-2"
                  id="research-filter"
                  onChange={(event) => setFilter(event.target.value)}
                  value={filter}
                >
                  <option value="all">All loaded claims</option>
                  <option value="flagged">Claims in a wording flag</option>
                  <option value="unsourced">Claims with no sources</option>
                  <option value="not-published">Claims the file does not mark published</option>
                </select>
              </label>
            </div>
            <div className="mt-4 flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap">
              <LoadJsonButton label="Load a JSON file" onError={setMessage} onText={load} />
              <button
                className={buttonClass}
                onClick={() => {
                  setClaims(illustrativeClaims.map((claim) => ({ ...claim })))
                  setCorrections([{ ...illustrativeCorrection }])
                  setQuery('')
                  setFilter('all')
                  setIssues([])
                  setMessage('Sample restored. It is still illustrative and unverified.')
                }}
                type="button"
              >
                Restore sample
              </button>
              <button className={buttonClass} onClick={() => download(illustrativeExchange, 'artiore-exchange-example.json')} type="button">
                Download example exchange
              </button>
            </div>
            <p className="mt-3 max-w-[68ch] text-sm text-muted">
              One record, a list, or an exchange file with schema version 1.1. Up to 2 MB. {FILE_STATUS_IS_NOT_APPROVAL}
            </p>
            <p className="mt-3 max-w-[68ch] text-cream" role="status">
              {message}
            </p>
            {issues.length > 0 ? (
              <ul className="mt-3 list-disc space-y-2 ps-5">
                {issues.map((item) => (
                  <li className="break-words" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
          <section className="mt-8" aria-labelledby="claim-list">
            <h2 className="font-serif text-2xl text-cream" id="claim-list">
              Claims
            </h2>
            <p className="mt-2 text-sm text-muted">
              {shown.length} of {claims.length} shown.
            </p>
            <div className="mt-4 space-y-4">
              {shown.map((claim) => {
                const related = corrections.filter((correction) => correction.claim_id === claim.claim_id)
                const claimFlags = flags.filter((flag) => flag.ids.includes(claim.claim_id))
                return (
                  <article className="rounded-2xl border border-gold/20 p-4" key={claim.claim_id}>
                    <h3 className="font-serif text-2xl text-cream">{claim.claim_id}</h3>
                    <p className="mt-2 text-cream/90">{claim.statement}</p>
                    <p className="mt-2 text-sm text-gold-bright">
                      {claimStatusLabel[claim.status] ?? claim.status}. The file says{' '}
                      {publicationStatusLabel[claim.publication_status] ?? claim.publication_status}.
                      {fileClaimsAuthority(claim.publication_status) ? ` ${FILE_STATUS_IS_NOT_APPROVAL}` : ''}
                    </p>
                    <p className="mt-2 text-cream/90">
                      {claimFlags.length
                        ? `Review flags: ${claimFlags.map((flag) => flag.kind).join(', ')}.`
                        : 'No wording flag under these limited rules. That is not a fact check.'}
                    </p>
                    <p className="mt-2 text-sm text-muted">Correction requests about this claim: {related.length}.</p>
                  </article>
                )
              })}
            </div>
          </section>
          <section className="mt-8">
            <h2 className="font-serif text-2xl text-cream">Correction requests</h2>
            <div className="max-w-full overflow-x-auto">
              <table className="mt-4 w-full text-start text-sm">
                <caption className="sr-only">Correction requests and whether their claim is loaded</caption>
                <thead>
                  <tr className="border-b border-white/15 text-gold-bright">
                    <th className="py-2 pe-3 text-start" scope="col">
                      Request
                    </th>
                    <th className="py-2 pe-3 text-start" scope="col">
                      Claim
                    </th>
                    <th className="py-2 pe-3 text-start" scope="col">
                      File status
                    </th>
                    <th className="py-2 text-start" scope="col">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {corrections.map((correction) => (
                    <tr className="border-b border-white/10" key={correction.correction_id}>
                      <td className="py-2 pe-3">{correction.correction_id}</td>
                      <td className="py-2 pe-3">{correction.claim_id}</td>
                      <td className="py-2 pe-3">{correctionStatusLabel[correction.status] ?? correction.status}</td>
                      <td className="py-2">
                        {claims.some((claim) => claim.claim_id === correction.claim_id) ? 'Claim is loaded' : 'No matching claim'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {corrections.some((correction) => fileClaimsAuthority(correction.status)) ? (
              <p className="mt-3 text-cream/90">{FILE_STATUS_IS_NOT_APPROVAL}</p>
            ) : null}
          </section>
          <section className="mt-8 rounded-2xl border border-gold/20 p-4">
            <h2 className="font-serif text-2xl text-cream">Sample that was not loaded</h2>
            <p className="mt-3 text-cream/90">
              {rejectedVerifiedSample.claim_id} says it is verified, but it has no method, date, or source. The schema
              rejects it. It is not part of the counts above.
            </p>
            <ul className="mt-3 list-disc space-y-2 ps-5">
              {rejected.issues.map((item) => (
                <li key={`${item.path}${item.message}`}>
                  {item.path ? `${item.path}: ` : ''}
                  {item.message}
                </li>
              ))}
            </ul>
          </section>
          <nav aria-label="Research tools" className="mt-8 flex flex-col items-start gap-2">
            <h2 className="font-serif text-2xl text-cream">Other research tools</h2>
            <SiteLink className={linkClass} href="/academy/evidence">
              Evidence explorer
            </SiteLink>
            <SiteLink className={linkClass} href="/academy/research/provenance">
              Source links
            </SiteLink>
            <SiteLink className={linkClass} href="/academy/research/corrections">
              Correction requests
            </SiteLink>
            <SiteLink className={linkClass} href="/academy/research/contradictions">
              Possible disagreements
            </SiteLink>
          </nav>
        </>
      )}
      <GlossaryList ids={['bluetooth', 'tracker-alert']} />
      <OtherTools current={researchMeta.path} />
      <PrivacyNote />
    </SafetyFrame>
  )
}
