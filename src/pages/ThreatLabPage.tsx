import { useEffect, useState, useSyncExternalStore } from 'react'
import {
  GlossaryList,
  LanguageNote,
  OtherTools,
  PrivacyNote,
  ReadingControls,
  SafetyFrame,
  SourceList,
} from '../components/safety/safety-ui'
import { buttonClass, pressedClass } from '../components/safety/safety-styles'
import { safetyChrome } from '../content/safety/chrome'
import { labScenarios } from '../content/safety/scenarios'
import { threatLabMeta } from '../content/meta'
import {
  advanceLab,
  answerLab,
  createLabSession,
  focusAfterAdvance,
  focusAfterAnswer,
  focusAfterRestart,
  orderedChoices,
  restartLab,
  type FocusTarget,
  type LabSession,
} from '../lib/safety/quiz'

const stableRandom = () => 0.999999
const serverSession = createLabSession(labScenarios, stableRandom)
let browserSession: LabSession | null = null

function subscribeToSession() {
  return () => {}
}

function clientSession() {
  browserSession ??= createLabSession(labScenarios, Math.random)
  return browserSession
}

function focusId(target: FocusTarget) {
  if (target === 'feedback') return 'lab-feedback'
  if (target === 'results-heading') return 'lab-results'
  return 'lab-heading'
}

export default function ThreatLabPage() {
  const [large, setLarge] = useState(false)
  const [spacious, setSpacious] = useState(false)
  const [paused, setPaused] = useState(false)
  const opened = useSyncExternalStore(subscribeToSession, clientSession, () => serverSession)
  const [override, setOverride] = useState<LabSession | null>(null)
  const session = override ?? opened
  const [hint, setHint] = useState('')
  const [focus, setFocus] = useState<{ target: FocusTarget; nonce: number } | null>(null)

  useEffect(() => {
    if (!focus) return
    document.getElementById(focusId(focus.target))?.focus()
  }, [focus])

  const scenario = labScenarios[session.index] ?? labScenarios[0]
  const choices = orderedChoices(scenario, session.orders[session.index] ?? scenario.choices.map((choice) => choice.id))
  const correct = scenario.choices.find((choice) => choice.id === scenario.correctChoiceId)
  const feedback = session.answered
    ? session.selectedId === scenario.correctChoiceId
      ? `That is the safer choice. ${scenario.why}`
      : `A safer choice: ${correct?.text ?? ''} ${scenario.why}`
    : hint

  function moveFocus(target: FocusTarget) {
    setFocus((current) => ({ target, nonce: (current?.nonce ?? 0) + 1 }))
  }

  function restart() {
    setOverride(restartLab(session, labScenarios, Math.random))
    setHint('')
    setPaused(false)
    moveFocus(focusAfterRestart())
  }

  function choose(choiceId: string) {
    const next = answerLab(session, labScenarios, choiceId)
    if (next === session) return
    setOverride(next)
    setHint('')
    moveFocus(focusAfterAnswer())
  }

  function goNext() {
    if (!session.answered) {
      setHint(safetyChrome.chooseFirst)
      moveFocus(focusAfterAnswer())
      return
    }
    const next = advanceLab(session, labScenarios.length)
    setOverride(next)
    setHint('')
    moveFocus(focusAfterAdvance(next.phase))
  }

  return (
    <SafetyFrame
      className={`${large ? 'text-xl' : ''} ${spacious ? 'leading-loose' : ''}`}
      meta={threatLabMeta}
    >
      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Safety practice</p>
        <h1 className="mt-3 font-serif text-4xl text-cream">Threat practice lab</h1>
        <p className="mt-4 max-w-[68ch] text-lg text-cream/90">
          Five short, fictional choices. Nothing here scans your device, asks for a password, or connects to a network.
        </p>
        <LanguageNote />
      </header>
      <section className="mt-8 rounded-2xl border border-gold/30 p-4">
        <p className="max-w-[68ch] text-cream/90">
          <strong>Practice, not a diagnosis. </strong>
          A warning sign is not proof of an attack. If you are in immediate danger, contact local emergency services. In
          Canada, call 911.
        </p>
        <ReadingControls
          large={large}
          onLarge={() => setLarge((value) => !value)}
          onPause={() => setPaused((value) => !value)}
          onRestart={restart}
          onSpacious={() => setSpacious((value) => !value)}
          paused={paused}
          spacious={spacious}
        />
      </section>
      {paused ? (
        <p className="mt-6 text-cream/90" role="status">
          Practice is paused. Your place is kept in this tab. Resume when you want.
        </p>
      ) : session.phase === 'results' ? (
        <section className="mt-8 rounded-2xl border border-gold/20 p-4">
          <h2 className="scroll-mt-28 font-serif text-3xl text-gold-bright" id="lab-results" tabIndex={-1}>
            Practice complete
          </h2>
          <p className="mt-4 max-w-[68ch] text-cream/90">
            {session.score} of {labScenarios.length} safer choices. This number is practice feedback. It is not a rating
            of your device or your safety.
          </p>
          <button className={`${buttonClass} mt-4`} onClick={restart} type="button">
            {safetyChrome.practiceAgain}
          </button>
        </section>
      ) : (
        <section aria-labelledby="lab-heading" className="mt-8 rounded-2xl border border-gold/20 p-4">
          <p className="text-sm text-muted">
            Scenario {session.index + 1} of {labScenarios.length}. {session.score} safer choices so far.
          </p>
          <h2 className="scroll-mt-28 mt-3 font-serif text-3xl text-cream" id="lab-heading" tabIndex={-1}>
            {scenario.title}
          </h2>
          <p className="mt-3 max-w-[68ch] text-cream/90">{scenario.situation}</p>
          <div aria-labelledby="lab-heading" className="mt-4 grid min-w-0 gap-2" role="group">
            {choices.map((choice) => (
              <button
                aria-pressed={session.selectedId === choice.id}
                className={`${buttonClass} w-full ${session.selectedId === choice.id ? pressedClass : ''}`}
                disabled={session.answered}
                key={choice.id}
                onClick={() => choose(choice.id)}
                type="button"
              >
                {choice.text}
              </button>
            ))}
          </div>
          <p className="scroll-mt-28 mt-4 max-w-[68ch] text-cream" id="lab-feedback" role="status" tabIndex={-1}>
            {feedback}
          </p>
          <button aria-disabled={!session.answered} className={`${buttonClass} mt-4`} onClick={goNext} type="button">
            {session.index === labScenarios.length - 1 ? safetyChrome.seeResult : safetyChrome.next}
          </button>
          <h3 className="mt-6 font-serif text-xl text-cream">Where this advice comes from</h3>
          <SourceList items={scenario.sources} />
        </section>
      )}
      <section className="mt-8">
        <h2 className="font-serif text-2xl text-cream">What this lab does not do</h2>
        <p className="mt-3 max-w-[68ch] text-cream/90">
          It cannot find spyware, prove an account was taken, or replace a person who helps with safety. The score
          stays in this tab.
        </p>
      </section>
      <GlossaryList ids={['phishing', 'bluetooth', 'ble', 'tracker-alert', 'mfa']} />
      <OtherTools current={threatLabMeta.path} />
      <PrivacyNote />
    </SafetyFrame>
  )
}
