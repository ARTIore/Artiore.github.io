import { useState } from 'react'
import {
  GlossaryList,
  LanguageNote,
  OtherTools,
  PrivacyNote,
  ReadingControls,
  SafetyFrame,
  SourceList,
} from '../components/safety/safety-ui'
import { buttonClass, linkClass, pressedClass } from '../components/safety/safety-styles'
import { incidents, platforms, removalWarning } from '../content/safety/navigator'
import { sources } from '../content/safety/sources'
import { navigatorMeta } from '../content/meta'
import { SiteLink } from '../components/content/SiteLink'

export default function SafetyNavigatorPage() {
  const [large, setLarge] = useState(false)
  const [spacious, setSpacious] = useState(false)
  const [paused, setPaused] = useState(false)
  const [platformId, setPlatformId] = useState(platforms[0]?.id ?? 'android')
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [incidentId, setIncidentId] = useState('')
  const [downloadNote, setDownloadNote] = useState('')
  const platform = platforms.find((item) => item.id === platformId) ?? platforms[0]
  const incident = incidents.find((item) => item.id === incidentId)
  const done = platform?.checks.filter((item) => checked[`${platform.id}:${item.id}`]).length ?? 0

  function clearMarks() {
    if (!platform) return
    setChecked((current) => {
      const next = { ...current }
      for (const item of platform.checks) delete next[`${platform.id}:${item.id}`]
      return next
    })
    setDownloadNote('')
  }

  function download() {
    if (!platform) return
    const lines = [
      `ARTIore ${platform.title} checklist`,
      'Your own check marks. Not a security test.',
      '',
      ...platform.checks.map((item) => {
        const mark = checked[`${platform.id}:${item.id}`] ? '[x]' : '[ ]'
        return `${mark} ${item.title}\n${item.steps}\nLimit: ${item.limit}`
      }),
    ]
    const url = URL.createObjectURL(new Blob([lines.join('\n\n')], { type: 'text/plain' }))
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `artiore-${platform.id}-safety-checklist.txt`
    anchor.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
    setDownloadNote('Checklist saved as a text file on this device. Nothing was uploaded.')
  }

  return (
    <SafetyFrame className={`${large ? 'text-xl' : ''} ${spacious ? 'leading-loose' : ''}`} meta={navigatorMeta}>
      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Before something goes wrong</p>
        <h1 className="mt-3 font-serif text-4xl text-cream">Digital safety navigator</h1>
        <p className="mt-4 max-w-[68ch] text-lg text-cream/90">
          Pick a device, then choose which protections to turn on. Check marks are your notes. They do not prove the
          device is safe. Menu names change when the system updates.
        </p>
        <LanguageNote />
      </header>
      <section className="mt-8 rounded-2xl border border-gold/20 p-4">
        <h2 className="font-serif text-2xl text-cream">Your controls</h2>
        <label className="mt-4 block text-cream" htmlFor="device">
          Device
          <select
            className="mt-2 block w-full min-w-0 max-w-full rounded-xl border border-gold/30 bg-ink px-3 py-3 text-cream sm:w-auto"
            id="device"
            onChange={(event) => {
              const next = platforms.find((item) => item.id === event.target.value)
              if (!next) return
              setPlatformId(next.id)
              setIncidentId('')
              setDownloadNote('')
            }}
            value={platformId}
          >
            {platforms.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
        <ReadingControls
          large={large}
          onLarge={() => setLarge((value) => !value)}
          onPause={() => setPaused((value) => !value)}
          onSpacious={() => setSpacious((value) => !value)}
          paused={paused}
          spacious={spacious}
        />
        <p className="mt-4 text-sm text-muted">These choices stay in this tab only. Nothing is saved after you leave.</p>
      </section>
      <aside className="mt-8 rounded-2xl border border-gold bg-gold/10 p-4" role="note">
        <h2 className="font-serif text-2xl text-gold-bright">{removalWarning.title}</h2>
        <p className="mt-3 max-w-[68ch] text-cream">{removalWarning.body}</p>
        <p className="mt-3">
          <SiteLink className={linkClass} href={sources.stalkerware.href}>
            {sources.stalkerware.label}
          </SiteLink>
        </p>
      </aside>
      {paused ? (
        <p className="mt-6 text-cream/90" role="status">
          The checklist is paused. Resume when you want.
        </p>
      ) : platform ? (
        <div className="mt-8">
          <section className="rounded-2xl border border-gold/20 p-4">
            <h2 className="font-serif text-3xl text-cream">{platform.title} checklist</h2>
            <p className="mt-3 max-w-[68ch] text-cream/90">{platform.intro}</p>
            <p className="mt-3 text-sm text-muted">
              {done} of {platform.checks.length} steps marked. This is your own list, not a test result.
            </p>
            <div className="mt-4 divide-y divide-white/10">
              {platform.checks.map((item) => (
                <div className="py-4" key={item.id}>
                  <label className="flex min-w-0 items-start gap-3">
                    <input
                      checked={Boolean(checked[`${platform.id}:${item.id}`])}
                      className="mt-1 h-5 w-5 shrink-0"
                      onChange={(event) =>
                        setChecked((current) => ({
                          ...current,
                          [`${platform.id}:${item.id}`]: event.target.checked,
                        }))
                      }
                      type="checkbox"
                    />
                    <span className="font-semibold text-cream">{item.title}</span>
                  </label>
                  <p className="mt-2 max-w-[68ch] ps-8 text-cream/90">{item.steps}</p>
                  <p className="mt-2 max-w-[68ch] ps-8 text-sm text-muted">Limit: {item.limit}</p>
                  {item.caution ? <p className="mt-2 max-w-[68ch] ps-8 text-gold-bright">{item.caution}</p> : null}
                </div>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <button className={buttonClass} onClick={download} type="button">
                Download my checklist
              </button>
              <button className={buttonClass} onClick={clearMarks} type="button">
                Clear check marks
              </button>
            </div>
            <p className="mt-3 text-sm text-muted" role="status">
              {downloadNote}
            </p>
          </section>
          <section className="mt-8 rounded-2xl border border-gold/20 p-4">
            <h2 className="font-serif text-2xl text-cream">What happened?</h2>
            <p className="mt-3 max-w-[68ch] text-cream/90">
              Choose a situation for a short response. These are general guides, not a judgment about your device. The
              recovery page has the longer steps.
            </p>
            <div className="mt-4 flex min-w-0 flex-col items-start gap-2">
              {incidents.map((item) => (
                <button
                  aria-pressed={incidentId === item.id}
                  className={`${buttonClass} ${incidentId === item.id ? pressedClass : ''}`}
                  key={item.id}
                  onClick={() => setIncidentId(item.id)}
                  type="button"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <p className="mt-4 max-w-[68ch] text-cream" role="status">
              {incident?.response ?? ''}
            </p>
          </section>
          <section className="mt-8">
            <h2 className="font-serif text-2xl text-cream">Sources for this device</h2>
            <SourceList items={platform.sources} />
            <h3 className="mt-6 font-serif text-xl text-cream">Canada and international starting points</h3>
            <SourceList
              items={[sources.getCyberSafe, sources.getCyberSafeDevices, sources.cyberCentre, sources.cyberCentreBasics, sources.cisaUpdates]}
            />
          </section>
        </div>
      ) : null}
      <GlossaryList
        ids={[
          'screen-lock',
          'mfa',
          'passkey',
          'private-dns',
          'vpn',
          'filevault',
          'bitlocker',
          'safety-check',
          'stolen-device',
          'tracker-alert',
          'stalkerware',
          'management-profile',
          'find-my',
          'find-hub',
          'seed-phrase',
          'bluetooth',
        ]}
      />
      <OtherTools current={navigatorMeta.path} />
      <PrivacyNote />
    </SafetyFrame>
  )
}
