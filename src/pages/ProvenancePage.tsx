import { useMemo, useState } from 'react'
import { LoadJsonButton } from '../components/research/LoadJsonButton'
import { GlossaryList, LanguageNote, OtherTools, PrivacyNote, ReadingControls, SafetyFrame } from '../components/safety/safety-ui'
import { buttonClass } from '../components/safety/safety-styles'
import { correctionStatusLabel, illustrativeClaims, illustrativeCorrection, illustrativeLabel } from '../content/research/samples'
import { provenanceMeta } from '../content/meta'
import { FILE_STATUS_IS_NOT_APPROVAL, fileClaimsAuthority } from '../lib/evidence/corrections'
import { interpretLedger } from '../lib/evidence/ledger'
import { buildProvenance } from '../lib/research/provenance'

type Claim = {
  claim_id: string
  statement: string
  sources?: readonly { url: string }[]
  publication_status?: string
}
type Correction = {
  correction_id: string
  claim_id: string
  status: string
  public_note?: string
}

const edgeLabel = {
  PROPOSED_CORRECTION_FOR: 'request about',
  CITES: 'cites',
} as const

export default function ProvenancePage() {
  const [large, setLarge] = useState(false)
  const [spacious, setSpacious] = useState(false)
  const [paused, setPaused] = useState(false)
  const [claims, setClaims] = useState<Claim[]>([...illustrativeClaims])
  const [corrections, setCorrections] = useState<Correction[]>([{ ...illustrativeCorrection }])
  const [selected, setSelected] = useState(illustrativeClaims[0]?.claim_id ?? '')
  const [message, setMessage] = useState(illustrativeLabel)
  const [issues, setIssues] = useState<string[]>([])
  const graph = useMemo(() => buildProvenance(claims, corrections), [claims, corrections])
  const height = Math.max(220, graph.nodes.length * 72 + 40)

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
    setSelected('')
    setIssues(result.warnings.map((item) => item.message))
    setMessage('File loaded. A line on this page is not proof, and a status in the file is not approval.')
  }

  const current = graph.nodes.find((node) => node.id === selected) ?? graph.nodes[0]
  const claim = claims.find((item) => item.claim_id === current?.id)
  const correction = corrections.find((item) => item.correction_id === current?.id)

  return (
    <SafetyFrame className={`${large ? 'text-xl' : ''} ${spacious ? 'leading-loose' : ''}`} meta={provenanceMeta}>
      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Research, not lessons</p>
        <h1 className="mt-3 font-serif text-4xl text-cream">Source links</h1>
        <p className="mt-4 max-w-[68ch] text-lg text-cream/90">
          See which claims cite a link, and which correction requests point at a claim. A line means “about” or
          “cites”. It does not mean the request was accepted or the link was checked.
        </p>
        <LanguageNote />
      </header>
      <section className="mt-8 rounded-2xl border border-gold/30 p-4">
        <p className="text-cream">
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
          The graph is paused.
        </p>
      ) : (
        <>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <LoadJsonButton label="Load a JSON file" onError={setMessage} onText={load} />
            <button
              className={buttonClass}
              onClick={() => {
                setClaims([...illustrativeClaims])
                setCorrections([{ ...illustrativeCorrection }])
                setSelected(illustrativeClaims[0]?.claim_id ?? '')
                setIssues([])
                setMessage('Sample restored. It is still illustrative and unverified.')
              }}
              type="button"
            >
              Restore sample
            </button>
          </div>
          <p className="mt-3 text-cream" role="status">
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
          <p className="mt-6 text-sm text-muted">
            {graph.nodes.length} items. {graph.edges.length} links. {graph.missingSourceClaimIds.length} claims with no
            source. {graph.unmatchedCorrectionIds.length} requests with no loaded claim.
          </p>
          <svg aria-hidden="true" className="mt-4 h-auto w-full max-w-full" viewBox={`0 0 320 ${height}`}>
            {graph.nodes.map((node, index) => {
              const y = 36 + index * 72
              const linked = graph.edges.filter((edge) => edge.from === node.id || edge.to === node.id)
              return (
                <g key={node.id}>
                  {linked.map((edge) => {
                    const other = edge.from === node.id ? edge.to : edge.from
                    const otherIndex = graph.nodes.findIndex((item) => item.id === other)
                    if (otherIndex < index) return null
                    return (
                      <line
                        key={`${edge.from}-${edge.to}`}
                        stroke="var(--color-gold)"
                        strokeWidth="2"
                        x1="160"
                        x2="160"
                        y1={y + 18}
                        y2={36 + otherIndex * 72 - 18}
                      />
                    )
                  })}
                  <rect fill="var(--color-ink-2)" height="40" rx="8" stroke="var(--color-gold)" width="280" x="20" y={y - 20} />
                  <text fill="var(--color-cream)" fontSize="14" textAnchor="middle" x="160" y={y + 5}>
                    {node.label}
                  </text>
                </g>
              )
            })}
          </svg>
          <div className="mt-4 flex flex-col gap-2">
            {graph.nodes.map((node) => (
              <button
                aria-pressed={current?.id === node.id}
                className={buttonClass}
                key={node.id}
                onClick={() => setSelected(node.id)}
                type="button"
              >
                {node.type === 'claim' ? 'Claim' : node.type === 'correction' ? 'Correction request' : 'Source'} · {node.label}
              </button>
            ))}
          </div>
          {current ? (
            <article className="mt-6 rounded-2xl border border-gold/20 p-4">
              <h2 className="font-serif text-2xl text-cream">{current.label}</h2>
              <p className="mt-2 text-cream/90">
                {current.type === 'correction'
                  ? 'This is a request about a claim. It is not an accepted correction.'
                  : current.type === 'source'
                    ? 'This is a link a claim cites. The link was not checked on this page.'
                    : 'This is a claim record.'}
              </p>
              {claim ? <p className="mt-3 text-cream/90">{claim.statement}</p> : null}
              {correction ? (
                <>
                  <p className="mt-3 text-cream/90">{correction.public_note}</p>
                  <p className="mt-2 text-sm text-muted">
                    File status: {correctionStatusLabel[correction.status] ?? correction.status}.
                    {fileClaimsAuthority(correction.status) ? ` ${FILE_STATUS_IS_NOT_APPROVAL}` : ''}
                  </p>
                </>
              ) : null}
              <h3 className="mt-4 font-serif text-xl text-cream">Links</h3>
              <ul className="mt-2 space-y-2">
                {graph.edges
                  .filter((edge) => edge.from === current.id || edge.to === current.id)
                  .map((edge) => (
                    <li key={`${edge.from}-${edge.type}-${edge.to}`}>
                      {edge.from} {edgeLabel[edge.type]} {edge.to}
                    </li>
                  ))}
              </ul>
            </article>
          ) : null}
        </>
      )}
      <GlossaryList ids={['bluetooth']} />
      <OtherTools current={provenanceMeta.path} />
      <PrivacyNote />
    </SafetyFrame>
  )
}
