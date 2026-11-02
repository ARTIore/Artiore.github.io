export type QuizChoice = {
  id: string
  text: string
}

export type GradedScenario = {
  choices: readonly QuizChoice[]
  correctChoiceId: string
}

export type LabPhase = 'question' | 'results'

export type LabSession = {
  index: number
  score: number
  answered: boolean
  selectedId: string | null
  phase: LabPhase
  orders: string[][]
}

export type FocusTarget = 'scenario-heading' | 'feedback' | 'results-heading'

export function shuffleChoices<T>(items: readonly T[], random: () => number = Math.random) {
  const next = items.map((item) => item)
  for (let index = next.length - 1; index > 0; index -= 1) {
    const unit = Math.min(0.999999, Math.max(0, random()))
    const swap = Math.min(index, Math.floor(unit * (index + 1)))
    const current = next[index]
    next[index] = next[swap] as T
    next[swap] = current as T
  }
  return next
}

export function isCorrectChoice(correctChoiceId: string, selectedId: string) {
  return selectedId === correctChoiceId
}

export function correctChoiceIndex(scenario: GradedScenario) {
  return scenario.choices.findIndex((choice) => choice.id === scenario.correctChoiceId)
}

export function createLabSession(scenarios: readonly GradedScenario[], random: () => number = Math.random): LabSession {
  return {
    index: 0,
    score: 0,
    answered: false,
    selectedId: null,
    phase: 'question',
    orders: scenarios.map((scenario) => shuffleChoices(scenario.choices, random).map((choice) => choice.id)),
  }
}

export function orderedChoices(scenario: GradedScenario, order: readonly string[]) {
  return order.map((id) => {
    const choice = scenario.choices.find((item) => item.id === id)
    if (!choice) throw new Error(`Missing choice ${id}`)
    return choice
  })
}

export function answerLab(session: LabSession, scenarios: readonly GradedScenario[], choiceId: string): LabSession {
  if (session.phase !== 'question' || session.answered) return session
  const scenario = scenarios[session.index]
  if (!scenario) return session
  const correct = isCorrectChoice(scenario.correctChoiceId, choiceId)
  return {
    ...session,
    answered: true,
    selectedId: choiceId,
    score: session.score + (correct ? 1 : 0),
  }
}

export function advanceLab(session: LabSession, count: number): LabSession {
  if (!session.answered || session.phase !== 'question') return session
  if (session.index >= count - 1) return { ...session, phase: 'results' }
  return { ...session, index: session.index + 1, answered: false, selectedId: null }
}

/** A fresh session. Safe to call from the results screen; it does not read removed page nodes. */
export function restartLab(
  _previous: LabSession | null,
  scenarios: readonly GradedScenario[],
  random: () => number = Math.random,
) {
  return createLabSession(scenarios, random)
}

export function focusAfterAnswer(): FocusTarget {
  return 'feedback'
}

export function focusAfterAdvance(phase: LabPhase): FocusTarget {
  return phase === 'results' ? 'results-heading' : 'scenario-heading'
}

export function focusAfterRestart(): FocusTarget {
  return 'scenario-heading'
}
