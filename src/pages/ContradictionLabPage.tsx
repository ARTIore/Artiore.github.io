import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { LoadJsonButton } from '../components/research/LoadJsonButton'
import { GlossaryList, LanguageNote, OtherTools, PrivacyNote, ReadingControls, SafetyFrame } from '../components/safety/safety-ui'
import { buttonClass } from '../components/safety/safety-styles'
import { claimStatusLabel, illustrativeClaims, illustrativeLabel, rejectedVerifiedSample } from '../content/research/samples'
import { contradictionMeta } from '../content/meta'
import { interpretLedger } from '../lib/evidence/ledger'
import { validateEvidence } from '../lib/evidence/validate'
import { reviewRecords, type ReviewFlag } from '../lib/research/review'

type Claim = {
  claim_id: string
  statement: string
  status: string
  scope: string
  sources?: readonly { url?: string }[]
  verification_method?: string | null
  verified_at?: string | null
  conflicting_evidence?: readonly unknown[]
  revision_history?: readonly unknown[]
  publication_status?: string
  human_approval?: unknown
}

function flagKey(flag: ReviewFlag) {
  return `${flag.kind}:${flag.ids.join(',')}`
}

export default function ContradictionLabPage() {
  const [large, setLarge] = useState(false)
  const [spacious, setSpacious] = useState(false)
  const [paused, setPaused] = useState(false)
  const [records, setRecords] = useState<Claim[]>([...illustrativeClaims])
  const [hidden, setHidden] = useState<string[]>([])
  const [hideNotice, setHideNotice] = useState('')
  const [message, setMessage] = useState(illustrativeLabel)
  const focusSummary = useRef(false)
  const [issues, setIssues] = useState<string[]>([])
  const flags = useMemo(() => reviewRecords(records), [records])
  const shown = flags.filter((flag) => !hidden.includes(flagKey(flag)))
  const rejected = validateEvidence(rejectedVerifiedSample)

  useLayoutEffect(() => {
    if (!focusSummary.current) return
    focusSummary.current = false
    document.getElementById('flags-summary')?.focus()
  }, [hidden])

  function hideFlag(key: string) {
    focusSummary.current = true
    setHidden((current) => (current.includes(key) ? current : [...current, key]))
    setHideNotice('Flag hidden. It is still included if you download the notes.')
  }

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
    if (!result.ok || !result.claims) {
      setIssues(
        result.ok
          ? ['This file has no claims to review.']
          : result.issues.map((item) => `${item.path ? `${item.path}: ` : ''}${item.message}`),
      )
      setMessage('Import rejected. Records that fail the schema are not reviewed as if they were accepted.')
      return
    }
    setRecords(result.claims as Claim[])
    setHidden([])
    setHideNotice('')
    setIssues(result.warnings.map((item) => item.message))
    setMessage('Claims loaded. Flags below are word checks, not a decision that two sentences contradict.')
  }

  function download() {
    const report = {
      schema_version: '1.1',
      type: 'heuristic-review-not-a-verdict',
      note: 'Flags are not factual verdicts. A status in a source file is not approval.',
      claim_ids: records.map((record) => record.claim_id),
      flags: flags.map((flag) => ({ ...flag, hidden_in_this_tab: hidden.includes(flagKey(flag)) })),
    }
    const url = URL.createObjectURL(new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' }))
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'artiore-contradiction-review.json'
    anchor.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
    setMessage('Review file saved on this device. It is not a verdict.')
  }

  return (
    <SafetyFrame className={`${large ? 'text-xl' : ''} ${spacious ? 'leading-loose' : ''}`} meta={contradictionMeta}>
      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Research, not lessons</p>
        <h1 className="mt-3 font-serif text-4xl text-cream">Possible disagreements</h1>
        <p className="mt-4 max-w-[68ch] text-lg text-cream/90">
          These flags use shared words and a “not” or a “proves” cue. They can miss a real conflict, and they can flag
          sentences that still fit together. A person has to decide.
        </p>
        <LanguageNote />
      </header>
      <section className="mt-8 rounded-2xl border border-gold/30 p-4">
        <p>
          <strong>{illustrativeLabel} </strong>
          The two loaded sentences are a made-up pair. They are not a research finding.
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
          Review is paused.
        </p>
      ) : (
        <>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <LoadJsonButton label="Load a JSON file" onError={setMessage} onText={load} />
            <button
              className={buttonClass}
              onClick={() => {
                setRecords([...illustrativeClaims])
                setHidden([])
                setHideNotice('')
                setIssues([])
                setMessage('Sample restored. It is still illustrative and unverified.')
              }}
              type="button"
            >
              Restore sample
            </button>
            <button className={buttonClass} onClick={download} type="button">
              Download review notes
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
          <h2 className="mt-8 font-serif text-2xl text-cream" id="flags-heading">
            Flags
          </h2>
          <p className="scroll-mt-28 mt-2 text-sm text-muted" id="flags-summary" role="status" tabIndex={-1}>
            {hideNotice ? `${hideNotice} ` : null}
            {records.length} records checked. {flags.length} flags. {shown.length} still shown. Hiding a flag does not
            delete it from a downloaded note.
          </p>
          {shown.length === 0 ? (
            <p className="mt-4">No flags from these word checks. That does not mean the claims are right.</p>
          ) : (
            <div className="mt-4 space-y-4">
              {shown.map((flag) => (
                <article className="rounded-2xl border border-gold/20 p-4" key={flagKey(flag)}>
                  <p className="text-sm text-gold-bright">
                    {flag.level} · {flag.kind}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-cream">{flag.ids.join(' and ')}</h3>
                  <p className="mt-2">{flag.why}</p>
                  <p className="mt-2">Next step: {flag.next}</p>
                  <button
                    className={`${buttonClass} mt-3`}
                    onClick={() => hideFlag(flagKey(flag))}
                    type="button"
                  >
                    Hide this flag for now
                  </button>
                </article>
              ))}
            </div>
          )}
          <section className="mt-8">
            <h2 className="font-serif text-2xl text-cream">Records checked</h2>
            <div className="mt-4 space-y-3">
              {records.map((record) => (
                <article className="rounded-2xl border border-white/10 p-4" key={record.claim_id}>
                  <h3 className="font-semibold">
                    {record.claim_id} · {claimStatusLabel[record.status] ?? record.status}
                  </h3>
                  <p className="mt-2">{record.statement}</p>
                  <p className="mt-2 text-sm text-muted">Scope: {record.scope}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="mt-8 rounded-2xl border border-gold/20 p-4">
            <h2 className="font-serif text-2xl text-cream">Sample the schema refuses</h2>
            <p className="mt-3">
              {rejectedVerifiedSample.claim_id} says verified and gives no method, date, or source. It is not in the
              list above. The old lab loaded it anyway.
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
        </>
      )}
      <GlossaryList ids={['bluetooth']} />
      <OtherTools current={contradictionMeta.path} />
      <PrivacyNote />
    </SafetyFrame>
  )
}
