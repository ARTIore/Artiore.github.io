import { useState, type FormEvent } from 'react'
import { LoadJsonButton } from '../components/research/LoadJsonButton'
import { GlossaryList, LanguageNote, OtherTools, PrivacyNote, ReadingControls, SafetyFrame } from '../components/safety/safety-ui'
import { buttonClass, fieldClass } from '../components/safety/safety-styles'
import { correctionStatusLabel, illustrativeCorrection, illustrativeLabel } from '../content/research/samples'
import { correctionsMeta } from '../content/meta'
import { CORRECTION_ID, FILE_STATUS_IS_NOT_APPROVAL, fileClaimsAuthority } from '../lib/evidence/corrections'
import { interpretLedger } from '../lib/evidence/ledger'
import { CLAIM_ID, isSafeHttpUrl } from '../lib/evidence/validate'

type Correction = {
  correction_id: string
  claim_id: string
  original_statement: string
  proposed_statement: string
  reason: string
  status: string
  public_note?: string
}

export default function CorrectionsCenterPage() {
  const [large, setLarge] = useState(false)
  const [spacious, setSpacious] = useState(false)
  const [paused, setPaused] = useState(false)
  const [records, setRecords] = useState<Correction[]>([{ ...illustrativeCorrection }])
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState(illustrativeLabel)
  const [formNote, setFormNote] = useState('')
  const [issues, setIssues] = useState<string[]>([])
  const shown = records.filter((record) => {
    if (status && record.status !== status) return false
    const haystack = `${record.correction_id} ${record.claim_id} ${record.original_statement} ${record.proposed_statement} ${record.reason}`.toLowerCase()
    return !query.trim() || haystack.includes(query.trim().toLowerCase())
  })

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
    if (!result.ok || !result.corrections) {
      setIssues(
        result.ok
          ? ['This file has no correction requests. Load a correction or an exchange file.']
          : result.issues.map((item) => `${item.path ? `${item.path}: ` : ''}${item.message}`),
      )
      setMessage('Import rejected. The schema was not met, so the file was not loaded.')
      return
    }
    setRecords(result.corrections as Correction[])
    setIssues(result.warnings.map((item) => item.message))
    setMessage('Correction file loaded. A status in the file is not approval, and nothing was sent.')
  }

  function downloadDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const claimId = String(form.get('claimId') ?? '').trim()
    const urls = String(form.get('urls') ?? '')
      .split(/\r?\n/)
      .map((item) => item.trim())
      .filter(Boolean)
    if (!CLAIM_ID.test(claimId)) {
      setFormNote('Claim id must look like ART-EVD-0001.')
      return
    }
    if (urls.some((url) => !isSafeHttpUrl(url))) {
      setFormNote('Use ordinary http or https links. javascript: links are rejected.')
      return
    }
    const draft = {
      correction_id: 'ART-COR-0000',
      claim_id: claimId,
      original_statement: String(form.get('original') ?? '').trim(),
      proposed_statement: String(form.get('proposed') ?? '').trim(),
      reason: String(form.get('reason') ?? '').trim(),
      evidence_urls: urls,
      status: 'SUBMITTED_DRAFT',
      submitted_at: null,
      reviewed_at: null,
      reviewer: null,
      decision_reason: null,
      publication_authorization: null,
      revision_history: [],
      public_note:
        'LOCAL DRAFT ONLY. ART-COR-0000 is a placeholder, not an issued id. Not submitted, approved, or published.',
    }
    if (!CORRECTION_ID.test(draft.correction_id)) {
      setFormNote('The placeholder id is not valid.')
      return
    }
    const url = URL.createObjectURL(new Blob([JSON.stringify(draft, null, 2)], { type: 'application/json' }))
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'artiore-correction-request-draft.json'
    anchor.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
    setFormNote('Draft saved on this device. Nothing was sent. ART-COR-0000 is a placeholder, not an issued id.')
  }

  return (
    <SafetyFrame className={`${large ? 'text-xl' : ''} ${spacious ? 'leading-loose' : ''}`} meta={correctionsMeta}>
      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Research, not lessons</p>
        <h1 className="mt-3 font-serif text-4xl text-cream">Correction requests</h1>
        <p className="mt-4 max-w-[68ch] text-lg text-cream/90">
          A request is not an agreed error. Downloading a draft does not send it to anyone, and it does not change the
          investigation’s corrections log.
        </p>
        <LanguageNote />
      </header>
      <section className="mt-8 rounded-2xl border border-gold/30 p-4">
        <p>
          <strong>{illustrativeLabel} </strong>
          {FILE_STATUS_IS_NOT_APPROVAL}
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
        <p className="mt-6" role="status">
          This page is paused.
        </p>
      ) : (
        <>
          <div className="mt-6 grid min-w-0 grid-cols-1 gap-3">
            <label className="block" htmlFor="correction-search">
              Search requests
              <input className={fieldClass} id="correction-search" onChange={(event) => setQuery(event.target.value)} type="search" value={query} />
            </label>
            <label className="block" htmlFor="correction-status">
              File status
              <select className={fieldClass} id="correction-status" onChange={(event) => setStatus(event.target.value)} value={status}>
                <option value="">All</option>
                {Object.entries(correctionStatusLabel).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <LoadJsonButton label="Load a JSON file" onError={setMessage} onText={load} />
            <button
              className={buttonClass}
              onClick={() => {
                setRecords([{ ...illustrativeCorrection }])
                setIssues([])
                setMessage('Sample restored. It is still illustrative and unverified.')
              }}
              type="button"
            >
              Restore sample
            </button>
          </div>
          <p className="mt-3" role="status">
            {message}
          </p>
          {issues.length > 0 ? (
            <ul className="mt-3 list-disc space-y-2 ps-5">
              {issues.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          <p className="mt-4 text-sm text-muted">
            {shown.length} of {records.length} shown.
          </p>
          <div className="mt-4 space-y-4">
            {shown.map((record) => (
              <article className="rounded-2xl border border-gold/20 p-4" key={record.correction_id}>
                <h2 className="font-serif text-2xl text-cream">
                  {record.correction_id} · {record.claim_id}
                </h2>
                <p className="mt-2 text-sm text-gold-bright">{correctionStatusLabel[record.status] ?? record.status}</p>
                {fileClaimsAuthority(record.status) ? <p className="mt-2">{FILE_STATUS_IS_NOT_APPROVAL}</p> : null}
                <p className="mt-3">{record.public_note}</p>
                <h3 className="mt-4 font-semibold">Original wording</h3>
                <p>{record.original_statement}</p>
                <h3 className="mt-4 font-semibold">Proposed wording</h3>
                <p>{record.proposed_statement}</p>
                <h3 className="mt-4 font-semibold">Reason</h3>
                <p>{record.reason}</p>
              </article>
            ))}
          </div>
          <form className="mt-8 space-y-3 rounded-2xl border border-gold/20 p-4" onSubmit={downloadDraft}>
            <h2 className="font-serif text-2xl text-cream">Draft a request</h2>
            <p>This downloads a file. It does not submit the request. The id in the file is the placeholder ART-COR-0000.</p>
            <label className="block" htmlFor="claimId">
              Claim id
              <input className={fieldClass} id="claimId" name="claimId" required />
            </label>
            <label className="block" htmlFor="original">
              Original statement
              <textarea className={fieldClass} id="original" name="original" required />
            </label>
            <label className="block" htmlFor="proposed">
              Proposed statement
              <textarea className={fieldClass} id="proposed" name="proposed" required />
            </label>
            <label className="block" htmlFor="reason">
              Reason
              <textarea className={fieldClass} id="reason" name="reason" required />
            </label>
            <label className="block" htmlFor="urls">
              Supporting links, one per line
              <textarea className={fieldClass} id="urls" name="urls" />
            </label>
            <button className={buttonClass} type="submit">
              Download draft
            </button>
            <p role="status">{formNote}</p>
          </form>
        </>
      )}
      <GlossaryList ids={['bluetooth']} />
      <OtherTools current={correctionsMeta.path} />
      <PrivacyNote />
    </SafetyFrame>
  )
}
