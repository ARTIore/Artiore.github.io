import { useState, type FormEvent } from 'react'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SeoHead } from '../components/seo/SeoHead'
import { SiteLink } from '../components/content/SiteLink'
import {
  evidenceGrades,
  evidenceNotes,
  layers,
  lessons,
  referenceLinks,
} from '../content/academy'
import { academyMeta } from '../content/meta'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'
const buttonClass =
  'inline-flex min-h-11 items-center rounded-full border border-gold/40 px-4 py-2 text-left text-sm text-cream hover:border-gold'
const pressedClass = 'border-gold bg-gold/15 font-semibold text-gold-bright'

function isExternal(href: string) {
  return href.startsWith('http')
}

export default function AcademyPage() {
  const [layer, setLayer] = useState(0)
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal')
  const [pace, setPace] = useState<'normal' | 'spacious'>('normal')
  const [depth, setDepth] = useState<'simple' | 'detail'>('simple')
  const [paused, setPaused] = useState(false)
  const [lessonIndex, setLessonIndex] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [correctionStatus, setCorrectionStatus] = useState('')

  const lesson = lessons[lessonIndex]
  const [layerTitle, layerDefinition, layerExample] = layers[layer]

  function resetSettings() {
    setFontSize('normal')
    setPace('normal')
    setDepth('simple')
    setPaused(false)
    setFeedback('')
  }

  function downloadDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const sourceUrl = String(data.get('sourceUrl') ?? '')
    if (!/^https:\/\//i.test(sourceUrl)) {
      setCorrectionStatus('Please provide an HTTPS source URL.')
      return
    }
    const record = {
      schema: 'artiore-correction-draft-v1',
      status: 'PENDING_REVIEW_NOT_PUBLISHED',
      claim_id: String(data.get('claimId') ?? '').trim(),
      issue: String(data.get('issue') ?? '').trim(),
      source_url: sourceUrl,
      proposed_correction: String(data.get('proposal') ?? '').trim(),
      created_at: new Date().toISOString(),
      reviewer: null,
      decision: null,
      publication_date: null,
    }
    const blob = new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'artiore-correction-draft.json'
    anchor.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
    setCorrectionStatus('Draft downloaded locally. Nothing was submitted.')
  }

  return (
    <>
      <SeoHead
        crumbName={academyMeta.crumbName}
        description={academyMeta.description}
        kind={academyMeta.kind}
        path={academyMeta.path}
        title={academyMeta.headTitle}
      />
      <Breadcrumbs current={academyMeta.crumbName} path={academyMeta.path} />
      <article
        className={`mx-auto max-w-3xl ${fontSize === 'large' ? 'text-xl' : ''} ${pace === 'spacious' ? 'leading-loose' : 'leading-relaxed'}`}
      >
        <header>
          <p className="text-xs uppercase tracking-[0.22em] text-gold">ARTIORE</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-cream sm:text-5xl">
            Understand clearly.
            <br />
            Decide freely.
          </h1>
          <p className="mt-4 text-lg text-cream/90">
            Allah alone is enough. AI remains a tool, not an authority. All people are welcome, regardless of faith or
            belief.
          </p>
          <nav aria-label="On this page" className="mt-6 flex flex-wrap gap-2">
            {[
              ['#tools', 'Practice tools'],
              ['#evidence', 'Evidence labels'],
              ['#framework', 'Six layers'],
              ['#controls', 'Your controls'],
              ['#academy', 'Safety academy'],
              ['#archive', 'Archive and corrections'],
            ].map(([href, label]) => (
              <a className={buttonClass} href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
        </header>

        <section className="mt-12 border-t border-white/10 pt-8" id="tools">
          <h2 className="font-serif text-3xl text-gold-bright">Practice tools</h2>
          <p className="mt-4 max-w-[68ch] text-cream/90">
            Four tools sit next to this lab. They stay on this site. They do not scan a device or send what you type.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <SiteLink className={linkClass} href="/academy/threat-lab">
                Threat practice lab
              </SiteLink>
              <span className="text-cream/90"> — five fictional choices, including tracker alerts.</span>
            </li>
            <li>
              <SiteLink className={linkClass} href="/academy/navigator">
                Safety navigator
              </SiteLink>
              <span className="text-cream/90"> — screen lock, encryption, and a warning before you delete software.</span>
            </li>
            <li>
              <SiteLink className={linkClass} href="/academy/recovery">
                Recovery steps
              </SiteLink>
              <span className="text-cream/90"> — lost devices, lost passwords, and Canadian reporting contacts.</span>
            </li>
            <li>
              <SiteLink className={linkClass} href="/academy/evidence">
                Evidence explorer
              </SiteLink>
              <span className="text-cream/90"> — check a claim file before anyone calls it published.</span>
            </li>
          </ul>
        </section>

        <section className="mt-12 border-t border-white/10 pt-8" id="evidence">
          <h2 className="font-serif text-3xl text-gold-bright">1. Evidence and knowledge status</h2>
          <p className="mt-4 max-w-[68ch] text-cream/90">
            A citation is not automatically proof. These four grades are the ones this site uses for empirical claims.
            The wording matches the investigation’s evidence labels. Read the method on the{' '}
            <SiteLink className={linkClass} href="/investigations/digital-exposure/evidence-method/">
              evidence method
            </SiteLink>{' '}
            page.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {evidenceGrades.map((grade) => (
              <article className="rounded-2xl border border-gold/20 p-4" key={grade.name}>
                <p className="text-xs uppercase tracking-[0.16em] text-gold">{grade.name}</p>
                <p className="mt-3 text-cream/90">{grade.meaning}</p>
                <p className="mt-3 text-sm text-muted">{grade.example}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 space-y-4">
            {evidenceNotes.map((note) => (
              <aside className="border-l-4 border-gold/60 pl-4" key={note.name}>
                <p className="text-sm uppercase tracking-[0.14em] text-gold">Note, not a grade · {note.name}</p>
                <p className="mt-2 text-cream/90">
                  {note.meaning}{' '}
                  {'href' in note ? (
                    <SiteLink className={linkClass} href={note.href}>
                      Corrections log
                    </SiteLink>
                  ) : null}
                </p>
              </aside>
            ))}
          </div>
          <p className="mt-6 max-w-[68ch] rounded-2xl border border-gold/20 bg-gold/5 p-4 text-cream/90">
            Each research entry needs a claim, a scope, an original source, a retrieval date, the check performed, the
            limits of that check, a reviewer and a revision history. Do not raise a claim because several systems
            repeated it.
          </p>
        </section>

        <section className="mt-12 border-t border-white/10 pt-8" id="framework">
          <h2 className="font-serif text-3xl text-gold-bright">2. Six layers, one purpose</h2>
          <p className="mt-4 max-w-[68ch] text-cream/90">
            Explore the six layers with an everyday example. The examples are illustrations. They are not claims that
            the site already does these things.
          </p>
          <div aria-label="Choose a framework layer" className="mt-4 flex flex-wrap gap-2" role="group">
            {layers.map(([name], index) => (
              <button
                aria-pressed={index === layer}
                className={`${buttonClass} ${index === layer ? pressedClass : ''}`}
                key={name}
                onClick={() => setLayer(index)}
                type="button"
              >
                {index + 1}. {name}
              </button>
            ))}
          </div>
          <article aria-live="polite" className="mt-4 rounded-2xl border border-gold/20 p-4">
            <h3 className="font-serif text-2xl text-cream">{layerTitle}</h3>
            <p className="mt-3 text-cream/90">{layerDefinition}</p>
            <p className="mt-3 text-cream/90">
              <strong>Practical example. </strong>
              {layerExample}
            </p>
          </article>
          <p className="mt-4 text-sm text-muted">
            <SiteLink className={linkClass} href="/how-it-works/">
              Read the six-layer framework
            </SiteLink>
          </p>
        </section>

        <section className="mt-12 border-t border-white/10 pt-8" id="controls">
          <h2 className="font-serif text-3xl text-gold-bright">3. Human-controlled experience</h2>
          <p className="mt-4 max-w-[68ch] text-cream/90">
            These settings affect only this page. No account, no analytics, no tracking, and no cloud copy.
          </p>
          <div className="mt-4 rounded-2xl border border-gold/20 p-4">
            <div className="flex flex-wrap items-center gap-3">
              <label htmlFor="fontSize">
                Text size
                <select
                  className="ml-2 min-h-11 rounded-full border border-gold/40 bg-ink px-3 text-cream"
                  id="fontSize"
                  onChange={(event) => setFontSize(event.target.value as 'normal' | 'large')}
                  value={fontSize}
                >
                  <option value="normal">Standard</option>
                  <option value="large">Large</option>
                </select>
              </label>
              <label htmlFor="pace">
                Reading pace
                <select
                  className="ml-2 min-h-11 rounded-full border border-gold/40 bg-ink px-3 text-cream"
                  id="pace"
                  onChange={(event) => setPace(event.target.value as 'normal' | 'spacious')}
                  value={pace}
                >
                  <option value="normal">Standard</option>
                  <option value="spacious">Spacious</option>
                </select>
              </label>
              <label htmlFor="depth">
                Explanation depth
                <select
                  className="ml-2 min-h-11 rounded-full border border-gold/40 bg-ink px-3 text-cream"
                  id="depth"
                  onChange={(event) => setDepth(event.target.value as 'simple' | 'detail')}
                  value={depth}
                >
                  <option value="simple">Plain language</option>
                  <option value="detail">More detail</option>
                </select>
              </label>
              <button
                aria-pressed={paused}
                className={`${buttonClass} ${paused ? pressedClass : ''}`}
                onClick={() => setPaused((value) => !value)}
                type="button"
              >
                {paused ? 'Resume lessons' : 'Pause lessons'}
              </button>
              <button className={buttonClass} onClick={resetSettings} type="button">
                Reset settings
              </button>
            </div>
            <p aria-live="polite" className="mt-4 text-sm text-muted" role="status">
              {paused
                ? 'Lessons are paused. Resume when you choose.'
                : 'You control the pace. Nothing advances automatically.'}
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-white/10 pt-8" id="academy">
          <h2 className="font-serif text-3xl text-gold-bright">4. Digital Safety Academy — five foundational lessons</h2>
          <p className="mt-4 max-w-[68ch] text-cream/90">
            Choose a lesson. Each has an action, a limit, a public source and a short knowledge check. This is general
            education, not a diagnosis of an incident. The full reference is the{' '}
            <SiteLink className={linkClass} href="/investigations/digital-exposure/public-safety-checklist/">
              public safety checklist
            </SiteLink>
            .
          </p>
          <label className="mt-4 block" htmlFor="lesson">
            Lesson
            <select
              className="ml-2 min-h-11 rounded-full border border-gold/40 bg-ink px-3 text-cream"
              disabled={paused}
              id="lesson"
              onChange={(event) => {
                setLessonIndex(Number(event.target.value))
                setFeedback('')
              }}
              value={lessonIndex}
            >
              {lessons.map((item, index) => (
                <option key={item.id} value={index}>
                  {index + 1}. {item.title}
                </option>
              ))}
            </select>
          </label>
          <article className="mt-4 rounded-2xl border border-gold/20 p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-gold">{lesson.id}</p>
            <h3 className="mt-2 font-serif text-2xl text-cream">{lesson.title}</h3>
            <p className="mt-3 text-cream/90">{depth === 'simple' ? lesson.simple : lesson.detail}</p>
            <p className="mt-3 text-cream/90">
              <strong>Action: </strong>
              {lesson.action}
            </p>
            <p className="mt-3 text-cream/90">
              <strong>Limit: </strong>
              {lesson.limit}
            </p>
            <p className="mt-3">
              <a className={linkClass} href={lesson.source} rel="noreferrer" target="_blank">
                {lesson.sourceLabel}
              </a>
            </p>
          </article>
          <div className="mt-4 rounded-2xl border border-gold/20 p-4">
            <h3 className="font-serif text-2xl text-cream">Knowledge check</h3>
            <p className="mt-3 text-cream/90" id="question">
              {lesson.question}
            </p>
            <div className="mt-3 space-y-2">
              {lesson.answers.map((answer, index) => (
                <button
                  className={`${buttonClass} w-full`}
                  disabled={paused}
                  key={answer}
                  onClick={() =>
                    setFeedback(
                      index === lesson.correct
                        ? 'Correct. You can explain the safer action.'
                        : 'Not quite. Review the action and try again.',
                    )
                  }
                  type="button"
                >
                  {answer}
                </button>
              ))}
            </div>
            <p
              aria-live="polite"
              className={`mt-3 ${feedback.startsWith('Correct') ? 'text-gold-bright' : 'text-cream/80'}`}
              role="status"
            >
              {feedback}
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-white/10 pt-8" id="archive">
          <h2 className="font-serif text-3xl text-gold-bright">5. Source-linked archive and corrections</h2>
          <p className="mt-4 max-w-[68ch] text-cream/90">
            A public source can support a limited statement without proving every interpretation. These are reference
            pointers.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {referenceLinks.map((item) => (
              <article className="rounded-2xl border border-gold/20 p-4" key={item.href}>
                <p className="text-xs uppercase tracking-[0.16em] text-gold">{item.id}</p>
                <h3 className="mt-2 font-serif text-xl text-cream">{item.title}</h3>
                {isExternal(item.href) ? (
                  <a className={`${linkClass} mt-3 inline-block break-all`} href={item.href} rel="noreferrer" target="_blank">
                    {item.href}
                  </a>
                ) : (
                  <SiteLink className={`${linkClass} mt-3 inline-block break-all`} href={item.href}>
                    {item.href}
                  </SiteLink>
                )}
              </article>
            ))}
          </div>
          <h3 className="mt-8 font-serif text-2xl text-cream">Draft a correction record</h3>
          <p className="mt-3 max-w-[68ch] text-cream/90">
            This produces a JSON file on your device for editorial review. It does not submit data, contact anyone, or
            publish a change.
          </p>
          <form className="mt-4 space-y-3 rounded-2xl border border-gold/20 p-4" onSubmit={downloadDraft}>
            <label className="block" htmlFor="claimId">
              Claim / lesson ID
              <input
                className="mt-1 w-full rounded-xl border border-gold/30 bg-ink px-3 py-2 text-cream"
                id="claimId"
                maxLength={120}
                name="claimId"
                placeholder="e.g., LESSON-03"
                required
              />
            </label>
            <label className="block" htmlFor="issue">
              What needs correction?
              <textarea
                className="mt-1 min-h-28 w-full rounded-xl border border-gold/30 bg-ink px-3 py-2 text-cream"
                id="issue"
                maxLength={3000}
                name="issue"
                placeholder="Quote the statement and explain the issue."
                required
              />
            </label>
            <label className="block" htmlFor="sourceUrl">
              Supporting source URL (https only)
              <input
                className="mt-1 w-full rounded-xl border border-gold/30 bg-ink px-3 py-2 text-cream"
                id="sourceUrl"
                name="sourceUrl"
                pattern="https://.*"
                placeholder="https://example.org/evidence"
                required
                type="url"
              />
            </label>
            <label className="block" htmlFor="proposal">
              Proposed correction
              <textarea
                className="mt-1 min-h-28 w-full rounded-xl border border-gold/30 bg-ink px-3 py-2 text-cream"
                id="proposal"
                maxLength={3000}
                name="proposal"
                required
              />
            </label>
            <button className={buttonClass} type="submit">
              Download correction draft (JSON)
            </button>
            <p aria-live="polite" className="text-sm text-muted" role="status">
              {correctionStatus}
            </p>
          </form>
          <h3 className="mt-8 font-serif text-2xl text-cream">Publication and editorial workflow</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-6 text-cream/90">
            <li>Register the claim and the source. Keep the original wording and the citation.</li>
            <li>Reproduce the concern and compare the original with contradictory sources.</li>
            <li>Assign the grade, the reviewer, the decision, the date and the reason.</li>
            <li>Publish an attributed correction note only after authorized review.</li>
            <li>Keep prior versions and unresolved disagreements available.</li>
          </ol>
        </section>

        <section className="mt-12 border-t border-white/10 pt-8" id="testing">
          <h2 className="font-serif text-3xl text-gold-bright">6. Accessibility and comprehension test protocol</h2>
          <p className="mt-4 max-w-[68ch] text-cream/90">
            Engineering checks are not a substitute for real participant testing. No human participant tests have been
            run.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-gold/20 p-4">
              <h3 className="font-serif text-xl text-cream">Accessibility checks</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-cream/90">
                <li>Keyboard-only navigation, visible focus and a skip link</li>
                <li>Programmatic labels, headings, native controls and live feedback</li>
                <li>200% zoom, narrow screens and readable contrast</li>
                <li>Screen-reader review and reduced-motion preferences</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-gold/20 p-4">
              <h3 className="font-serif text-xl text-cream">Comprehension study</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-cream/90">
                <li>Recruit at least five consenting participants with varied digital literacy</li>
                <li>Ask them to distinguish Confirmed from Demonstrated</li>
                <li>Have them complete one safety lesson and explain its takeaway</li>
                <li>Test whether they can pause, change text size and draft a correction</li>
                <li>Record observed errors and revise. Do not claim success without results</li>
              </ul>
            </article>
          </div>
        </section>

        <p className="mt-12 text-center text-sm text-muted">
          ARTIORE — Archive → Derivative · Evidence over rhetoric
        </p>
      </article>
    </>
  )
}
