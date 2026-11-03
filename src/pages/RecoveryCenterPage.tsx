import { useMemo, useState } from 'react'
import {
  GlossaryList,
  LanguageNote,
  OtherTools,
  PrivacyNote,
  ReadingControls,
  SafetyFrame,
  SourceList,
} from '../components/safety/safety-ui'
import { buttonClass, linkClass } from '../components/safety/safety-styles'
import { canadianContacts, playbooks } from '../content/safety/playbooks'
import { sources } from '../content/safety/sources'
import { recoveryMeta } from '../content/meta'
import { ExternalLink, SiteLink } from '../components/content/SiteLink'
import { RelatedReadingFor } from '../components/related/RelatedReading'

export default function RecoveryCenterPage() {
  const [large, setLarge] = useState(false)
  const [spacious, setSpacious] = useState(false)
  const [paused, setPaused] = useState(false)
  const [playbookId, setPlaybookId] = useState(playbooks[0]?.id ?? 'account')
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [downloadNote, setDownloadNote] = useState('')
  const playbook = playbooks.find((item) => item.id === playbookId) ?? playbooks[0]
  const steps = useMemo(() => [...(playbook?.first ?? []), ...(playbook?.then ?? [])], [playbook])
  const done = steps.filter((_, index) => checked[`${playbook?.id}:${index}`]).length

  function resetCurrent() {
    if (!playbook) return
    setChecked((current) => {
      const next = { ...current }
      steps.forEach((_, index) => {
        delete next[`${playbook.id}:${index}`]
      })
      return next
    })
    setDownloadNote('')
  }

  function download() {
    if (!playbook) return
    const lines = [
      'ARTIore recovery checklist',
      playbook.name,
      'Your own check marks. Not a verified result.',
      '',
      ...steps.map((step, index) => `${checked[`${playbook.id}:${index}`] ? '[x]' : '[ ]'} ${step}`),
      '',
      `Avoid: ${playbook.avoid}`,
    ]
    const url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/plain' }))
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'artiore-recovery-checklist.txt'
    anchor.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
    setDownloadNote('Checklist saved as a text file on this device. Nothing was uploaded.')
  }

  return (
    <SafetyFrame className={`${large ? 'text-xl' : ''} ${spacious ? 'leading-loose' : ''}`} meta={recoveryMeta}>
      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-gold">If something already happened</p>
        <h1 className="mt-3 font-serif text-4xl text-cream">Recovery steps</h1>
        <p className="mt-4 max-w-[68ch] text-lg text-cream/90">
          Practical steps you can take yourself. This page does not contact your bank, recover money, or decide what
          happened.
        </p>
        <LanguageNote />
      </header>
      <RelatedReadingFor sourcePath="/academy/recovery" />
      <section className="mt-8 rounded-2xl border border-gold/30 p-4">
        <h2 className="font-serif text-2xl text-gold-bright">Safety first</h2>
        <p className="mt-3 max-w-[68ch] text-cream/90">
          If someone is in immediate danger, contact local emergency services before these steps. In Canada, call 911.
          Do not type passwords, seed phrases, or identity documents into this page.
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
      <section className="mt-8 rounded-2xl border border-gold/20 p-4">
        <h2 className="font-serif text-2xl text-cream">If you are in Canada</h2>
        <p className="mt-3 max-w-[68ch] text-cream/90">
          Report fraud and identity misuse to the{' '}
          <ExternalLink className={linkClass} href={sources.cafcReport.href}>
            Canadian Anti-Fraud Centre
          </ExternalLink>
          . Toll-free{' '}
          <a className={linkClass} href={canadianContacts.phoneHref}>
            {canadianContacts.phoneDisplay}
          </a>
          . {canadianContacts.hours} {canadianContacts.impersonation}
        </p>
        <p className="mt-3 max-w-[68ch] text-cream/90">
          For everyday protection, start with{' '}
          <ExternalLink className={linkClass} href={sources.getCyberSafe.href}>
            Get Cyber Safe
          </ExternalLink>{' '}
          and the{' '}
          <ExternalLink className={linkClass} href={sources.cyberCentre.href}>
            Canadian Centre for Cyber Security
          </ExternalLink>
          . IdentityTheft.gov and the FBI’s IC3 are United States services. They do not replace a report in Canada.
        </p>
      </section>
      {paused ? (
        <p className="mt-6 text-cream/90" role="status">
          The checklist is paused. Resume when you want. Nothing is stored after you leave this page.
        </p>
      ) : playbook ? (
        <section className="mt-8">
          <label className="block max-w-full text-cream" htmlFor="recovery-situation">
            What happened?
            <select
              className="mt-2 block w-full min-w-0 max-w-full rounded-xl border border-gold/30 bg-ink px-3 py-3 text-cream"
              id="recovery-situation"
              onChange={(event) => {
                setPlaybookId(event.target.value)
                setDownloadNote('')
              }}
              value={playbook.id}
            >
              {playbooks.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <p className="mt-4 text-sm text-muted">
            {done} of {steps.length} steps checked. These marks are yours. They are not a verified result.
          </p>
          <article className="mt-4 rounded-2xl border border-gold/20 p-4">
            <h2 className="font-serif text-3xl text-cream">{playbook.name}</h2>
            <p className="mt-3 text-cream/90">
              <strong>Priority: </strong>
              {playbook.urgency}
            </p>
            <h3 className="mt-6 font-serif text-2xl text-gold-bright">First actions</h3>
            <ol className="mt-3 list-decimal space-y-3 ps-5">
              {playbook.first.map((step, index) => (
                <li key={step}>
                  <label className="flex min-w-0 items-start gap-3">
                    <input
                      checked={Boolean(checked[`${playbook.id}:${index}`])}
                      className="mt-1 h-5 w-5 shrink-0"
                      onChange={(event) =>
                        setChecked((current) => ({ ...current, [`${playbook.id}:${index}`]: event.target.checked }))
                      }
                      type="checkbox"
                    />
                    <span>{step}</span>
                  </label>
                </li>
              ))}
            </ol>
            <h3 className="mt-6 font-serif text-2xl text-gold-bright">Then</h3>
            <ol className="mt-3 list-decimal space-y-3 ps-5" start={playbook.first.length + 1}>
              {playbook.then.map((step, index) => {
                const stepIndex = playbook.first.length + index
                return (
                  <li key={step}>
                    <label className="flex min-w-0 items-start gap-3">
                      <input
                        checked={Boolean(checked[`${playbook.id}:${stepIndex}`])}
                        className="mt-1 h-5 w-5 shrink-0"
                        onChange={(event) =>
                          setChecked((current) => ({
                            ...current,
                            [`${playbook.id}:${stepIndex}`]: event.target.checked,
                          }))
                        }
                        type="checkbox"
                      />
                      <span>{step}</span>
                    </label>
                  </li>
                )
              })}
            </ol>
            {playbook.deviceNotes ? (
              <div className="mt-6 space-y-4">
                <h3 className="font-serif text-2xl text-gold-bright">Which device</h3>
                {playbook.deviceNotes.map((note) => (
                  <div key={note.title}>
                    <h4 className="font-semibold text-cream">{note.title}</h4>
                    <p className="mt-1 text-cream/90">{note.body}</p>
                  </div>
                ))}
              </div>
            ) : null}
            <p className="mt-6 text-cream/90">
              <strong>Avoid: </strong>
              {playbook.avoid}
            </p>
            <h3 className="mt-6 font-serif text-xl text-cream">Sources for this situation</h3>
            <SourceList items={playbook.sources} />
          </article>
          <div className="mt-4 flex flex-wrap gap-2">
            <button className={buttonClass} onClick={download} type="button">
              Download checklist
            </button>
            <button className={buttonClass} onClick={resetCurrent} type="button">
              Clear these check marks
            </button>
          </div>
          <p className="mt-3 text-sm text-muted" role="status">
            {downloadNote}
          </p>
        </section>
      ) : null}
      <p className="mt-8 max-w-[68ch] text-cream/90">
        If you think someone close to you is watching the device, read{' '}
        <SiteLink className={linkClass} href={sources.stalkerware.href}>
          {sources.stalkerware.label}
        </SiteLink>{' '}
        before you delete anything.
      </p>
      <GlossaryList ids={['mfa', 'passkey', 'find-my', 'find-hub', 'seed-phrase', 'stalkerware', 'phishing', 'tracker-alert']} />
      <OtherTools current={recoveryMeta.path} />
      <PrivacyNote />
    </SafetyFrame>
  )
}
