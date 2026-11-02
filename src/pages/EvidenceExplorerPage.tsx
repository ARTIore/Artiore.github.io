import { useMemo, useState, type ChangeEvent } from 'react'
import {
  GlossaryList,
  LanguageNote,
  OtherTools,
  PrivacyNote,
  SafetyFrame,
} from '../components/safety/safety-ui'
import { buttonClass, fieldClass, linkClass } from '../components/safety/safety-styles'
import { demoRecord } from '../content/safety/demo-record'
import { sources } from '../content/safety/sources'
import { evidenceMeta } from '../content/meta'
import { ExternalLink, SiteLink } from '../components/content/SiteLink'
import { claimStatusLabel, publicationStatusLabel } from '../content/research/samples'
import { isSafeHttpUrl, validateEvidenceText, type ValidationIssue } from '../lib/evidence/validate'

type EvidenceSource = {
  url: string
  source_type: string
  accessed_at: string
  note?: string
  archived_url?: string | null
}

type EvidenceConflict = {
  statement: string
  source_url?: string | null
}

type EvidenceRevision = {
  timestamp: string
  summary: string
  previous_statement: string
  previous_claim_id?: string
}

type EvidenceApproval = {
  approver: string
  approved_at: string
  action: string
}

type EvidenceRecord = {
  claim_id: string
  statement: string
  status: string
  publication_status: string
  scope: string
  limitations: string[]
  sources: EvidenceSource[]
  verification_method?: string | null
  verified_at?: string | null
  conflicting_evidence?: EvidenceConflict[]
  human_approval?: EvidenceApproval | null
  revision_history: EvidenceRevision[]
}

function asRecords(data: unknown) {
  const list = Array.isArray(data) ? data : [data]
  return list as EvidenceRecord[]
}

function haystack(record: EvidenceRecord) {
  return [
    record.claim_id,
    record.statement,
    record.scope,
    record.limitations.join(' '),
    record.sources.map((source) => `${source.url} ${source.note ?? ''}`).join(' '),
    (record.conflicting_evidence ?? []).map((item) => item.statement).join(' '),
    record.revision_history.map((item) => `${item.summary} ${item.previous_statement}`).join(' '),
  ]
    .join('\n')
    .toLowerCase()
}

export default function EvidenceExplorerPage() {
  const [records, setRecords] = useState<EvidenceRecord[]>(() => asRecords(demoRecord))
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')
  const [publication, setPublication] = useState('')
  const [message, setMessage] = useState('Showing the unverified sample. It is not a finding about a real device.')
  const [issues, setIssues] = useState<ValidationIssue[]>([])

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return records.filter((record) => {
      if (status && record.status !== status) return false
      if (publication && record.publication_status !== publication) return false
      if (needle && !haystack(record).includes(needle)) return false
      return true
    })
  }, [publication, query, records, status])

  function restore() {
    setRecords(asRecords(demoRecord))
    setQuery('')
    setStatus('')
    setPublication('')
    setIssues([])
    setMessage('Sample restored. It stays a draft marked unverified.')
  }

  function onFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    if (file.size > 2 * 1024 * 1024) {
      setIssues([])
      setMessage('File rejected. The limit is 2 MB.')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      const text = typeof reader.result === 'string' ? reader.result : ''
      const result = validateEvidenceText(text)
      if (!result.ok) {
        setIssues(result.issues)
        setMessage('Import rejected. The file was not loaded. Nothing was published.')
        return
      }
      const parsed = JSON.parse(text) as unknown
      const next = asRecords(parsed)
      setRecords(next)
      setIssues([])
      setMessage(
        `Loaded ${next.length} record${next.length === 1 ? '' : 's'} in this tab. The file shape was checked. The claim itself was not proved or published.`,
      )
    }
    reader.readAsText(file)
  }

  function exportVisible() {
    const url = URL.createObjectURL(new Blob([JSON.stringify(visible, null, 2)], { type: 'application/json' }))
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'artiore-visible-evidence.json'
    anchor.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
    setIssues([])
    setMessage('Downloaded the records that match the current filters. Nothing was uploaded.')
  }

  return (
    <SafetyFrame meta={evidenceMeta} wide>
      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Evidence over rhetoric</p>
        <h1 className="mt-3 font-serif text-4xl text-cream">Evidence explorer</h1>
        <p className="mt-4 max-w-[68ch] text-lg text-cream/90">
          Read a claim, its limits, and its history. A link is not proof. Loading a file does not publish it.
        </p>
        <LanguageNote />
      </header>
      <section className="mt-8 rounded-2xl border border-gold/30 p-4">
        <p className="max-w-[68ch] text-cream/90">
          <strong>Sample only. </strong>
          The record on this page is a draft marked unverified. It does not assess a real phone or a real incident.
          Published and approved records must name a person, a time, and the action they approved. A corrected record
          must keep the earlier wording. A disputed record must include the conflicting evidence.
        </p>
      </section>
      <section aria-label="Evidence controls" className="mt-8 min-w-0">
        <div className="grid min-w-0 grid-cols-1 gap-3">
          <label className="block min-w-0 text-cream" htmlFor="evidence-search">
            Search records
            <input
              autoComplete="off"
              className={fieldClass}
              id="evidence-search"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Claim id, statement, source, or earlier wording"
              type="search"
              value={query}
            />
          </label>
          <label className="block min-w-0 text-cream" htmlFor="evidence-status">
            Knowledge status
            <select className={fieldClass} id="evidence-status" onChange={(event) => setStatus(event.target.value)} value={status}>
              <option value="">All statuses</option>
              {Object.entries(claimStatusLabel).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label className="block min-w-0 text-cream" htmlFor="evidence-publication">
            Publication state
            <select
              className={fieldClass}
              id="evidence-publication"
              onChange={(event) => setPublication(event.target.value)}
              value={publication}
            >
              <option value="">All publication states</option>
              {Object.entries(publicationStatusLabel).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-4 grid min-w-0 grid-cols-1 gap-2 md:grid-cols-3">
          <label
            className={`${buttonClass} w-full cursor-pointer justify-center focus-within:outline focus-within:outline-2 focus-within:outline-offset-[3px] focus-within:outline-gold-bright`}
          >
            Load a JSON file
            <input
              accept="application/json,.json"
              aria-describedby="import-help import-status"
              className="sr-only"
              onChange={onFile}
              type="file"
            />
          </label>
          <button className={`${buttonClass} w-full justify-center`} onClick={restore} type="button">
            Restore sample
          </button>
          <button className={`${buttonClass} w-full justify-center`} onClick={exportVisible} type="button">
            Download visible records
          </button>
        </div>
        <p className="mt-3 max-w-[68ch] text-sm text-muted" id="import-help">
          JSON is a plain-text file format. Load one record or a list of records, up to 2 MB and 2,000 records. Only
          ordinary http and https links are accepted. javascript: links are rejected. The check runs in this tab.
        </p>
        <p className="mt-3 max-w-[68ch] text-cream" id="import-status" role="status">
          {message}
        </p>
        {issues.length > 0 ? (
          <ul className="mt-3 list-disc space-y-2 ps-5 text-cream">
            {issues.map((issue) => (
              <li className="break-words" key={`${issue.path}:${issue.message}`}>
                {issue.path ? `${issue.path}: ` : ''}
                {issue.message}
              </li>
            ))}
          </ul>
        ) : null}
      </section>
      <section aria-labelledby="records-heading" className="mt-10">
        <h2 className="font-serif text-3xl text-gold-bright" id="records-heading">
          Records
        </h2>
        <p className="mt-3 text-sm text-muted">
          {visible.length} of {records.length} shown.
        </p>
        {visible.length === 0 ? <p className="mt-4 text-cream/90">No records match these filters.</p> : null}
        <div className="mt-4 space-y-4">
          {visible.map((record) => (
            <article className="min-w-0 rounded-2xl border border-gold/20 p-4" key={record.claim_id}>
              <h3 className="break-words font-serif text-2xl text-cream">{record.claim_id}</h3>
              <p className="mt-3 max-w-[68ch] text-cream/90">{record.statement}</p>
              <p className="mt-3 text-sm text-gold-bright">
                {claimStatusLabel[record.status] ?? record.status}. Publication:{' '}
                {publicationStatusLabel[record.publication_status] ?? record.publication_status}.
              </p>
              <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[11rem_minmax(0,1fr)]">
                <dt className="font-semibold text-cream">Scope</dt>
                <dd className="break-words text-cream/90">{record.scope}</dd>
                <dt className="font-semibold text-cream">Limits</dt>
                <dd className="text-cream/90">{record.limitations.length ? record.limitations.join(' ') : 'None recorded.'}</dd>
                <dt className="font-semibold text-cream">How it was checked</dt>
                <dd className="text-cream/90">{record.verification_method || 'Not recorded.'}</dd>
                <dt className="font-semibold text-cream">Checked at</dt>
                <dd className="text-cream/90">{record.verified_at || 'Not recorded.'}</dd>
                <dt className="font-semibold text-cream">Human approval</dt>
                <dd className="text-cream/90">
                  {record.human_approval
                    ? `${record.human_approval.approver} at ${record.human_approval.approved_at}. ${record.human_approval.action}`
                    : 'Not recorded. A file can still say published. That label is not proof.'}
                </dd>
              </dl>
              <h4 className="mt-6 font-serif text-xl text-cream">Conflicting evidence</h4>
              {(record.conflicting_evidence ?? []).length === 0 ? (
                <p className="mt-2 text-cream/90">None recorded.</p>
              ) : (
                <ul className="mt-2 space-y-3">
                  {(record.conflicting_evidence ?? []).map((item) => (
                    <li className="break-words" key={item.statement}>
                      <p>{item.statement}</p>
                      {item.source_url && isSafeHttpUrl(item.source_url) ? (
                        <ExternalLink className={linkClass} href={item.source_url}>
                          {item.source_url}
                        </ExternalLink>
                      ) : null}
                    </li>
                  ))}
                </ul>
              )}
              <h4 className="mt-6 font-serif text-xl text-cream">Sources</h4>
              {record.sources.length === 0 ? (
                <p className="mt-2 text-cream/90">No sources recorded.</p>
              ) : (
                <ul className="mt-2 space-y-3">
                  {record.sources.map((source) => (
                    <li className="break-words" key={`${source.url}-${source.accessed_at}`}>
                      <p className="text-sm text-muted">
                        {source.source_type}. Accessed {source.accessed_at}.
                      </p>
                      {isSafeHttpUrl(source.url) ? (
                        <ExternalLink className={linkClass} href={source.url}>
                          {source.url}
                        </ExternalLink>
                      ) : (
                        <p>Unsupported link.</p>
                      )}
                      {source.note ? <p className="text-cream/90">{source.note}</p> : null}
                    </li>
                  ))}
                </ul>
              )}
              <h4 className="mt-6 font-serif text-xl text-cream">Revision history</h4>
              {record.revision_history.length === 0 ? (
                <p className="mt-2 text-cream/90">No revisions recorded.</p>
              ) : (
                <ul className="mt-2 space-y-4">
                  {record.revision_history.map((revision) => (
                    <li className="break-words" key={`${revision.timestamp}-${revision.summary}`}>
                      <p className="text-sm text-muted">{revision.timestamp}</p>
                      <p>{revision.summary}</p>
                      <p className="mt-1 text-cream/90">
                        <strong>Earlier wording: </strong>
                        {revision.previous_statement}
                      </p>
                      {revision.previous_claim_id ? <p className="text-sm text-muted">Previous id: {revision.previous_claim_id}</p> : null}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="font-serif text-2xl text-cream">What the labels mean</h2>
        <dl className="mt-4 space-y-4">
          <div>
            <dt className="font-semibold text-cream">Verified</dt>
            <dd className="text-cream/90">A named check supports the statement, only inside the recorded scope.</dd>
          </div>
          <div>
            <dt className="font-semibold text-cream">Supported inference</dt>
            <dd className="text-cream/90">A reasoned conclusion. The fact itself was not directly shown.</dd>
          </div>
          <div>
            <dt className="font-semibold text-cream">Disputed</dt>
            <dd className="text-cream/90">Credible sources disagree. The disagreement stays in the record.</dd>
          </div>
          <div>
            <dt className="font-semibold text-cream">Unverified</dt>
            <dd className="text-cream/90">Not enough checking yet.</dd>
          </div>
          <div>
            <dt className="font-semibold text-cream">Belief or interpretation</dt>
            <dd className="text-cream/90">Faith, philosophy, or personal meaning. Not an empirical finding.</dd>
          </div>
          <div>
            <dt className="font-semibold text-cream">Corrected</dt>
            <dd className="text-cream/90">The wording changed. The earlier wording stays in the history.</dd>
          </div>
        </dl>
        <p className="mt-4 max-w-[68ch] text-cream/90">
          The file contract is{' '}
          <a className={linkClass} href="/schemas/evidence-ledger-v1.json">
            evidence-ledger-v1.json
          </a>
          . The same rules run in the page and in <span className="break-all">scripts/validate-evidence.py</span>. Read
          the{' '}
          <SiteLink className={linkClass} href={sources.evidenceMethod.href}>
            evidence method
          </SiteLink>{' '}
          for how this site grades claims.
        </p>
      </section>
      <GlossaryList ids={['tracker-alert', 'bluetooth']} />
      <OtherTools current={evidenceMeta.path} />
      <PrivacyNote />
    </SafetyFrame>
  )
}
