import { describe, expect, it } from 'vitest'
import { labScenarios } from '../../content/safety/scenarios'
import {
  advanceLab,
  answerLab,
  correctChoiceIndex,
  createLabSession,
  focusAfterAdvance,
  focusAfterAnswer,
  focusAfterRestart,
  restartLab,
  shuffleChoices,
} from './quiz'

describe('threat lab quiz', () => {
  it('does not park every correct answer in the same slot', () => {
    const positions = labScenarios.map((scenario) => correctChoiceIndex(scenario))
    expect(new Set(positions).size).toBeGreaterThan(1)
    expect(positions.every((position) => position === 1)).toBe(false)
  })

  it('treats an unknown-tracker alert as a safety signal', () => {
    const scenario = labScenarios.find((item) => item.id === 'tracker')
    expect(scenario).toBeDefined()
    const correct = scenario?.choices.find((choice) => choice.id === scenario.correctChoiceId)
    const ignore = scenario?.choices.find((choice) => choice.id === 'ignore')
    expect(correct?.text.toLowerCase()).toContain('take the tracker alert seriously')
    expect(ignore?.text.toLowerCase()).toContain('ignore the alert')
    expect(scenario?.why.toLowerCase()).toContain('safety signal')
  })

  it('can place the correct choice in every position', () => {
    const choices = [
      { id: 'a', text: 'A' },
      { id: 'b', text: 'B' },
      { id: 'c', text: 'C' },
    ]
    const from = (values: number[]) => {
      let index = 0
      return () => values[index++] ?? 0
    }
    const at = (values: number[]) => shuffleChoices(choices, from(values)).findIndex((choice) => choice.id === 'b')
    expect(at([0.999, 0])).toBe(0)
    expect(at([0.999, 0.999])).toBe(1)
    expect(at([0.5, 0.999])).toBe(2)
  })

  it('keeps source order when the random source does not swap', () => {
    const choices = ['a', 'b', 'c']
    expect(shuffleChoices(choices, () => 0.999999)).toEqual(['a', 'b', 'c'])
  })

  it('grades the choice id, not the original slot', () => {
    const session = createLabSession(labScenarios, () => 0.999999)
    const first = labScenarios[0]
    expect(first).toBeDefined()
    const wrong = first?.choices.find((choice) => choice.id !== first.correctChoiceId)
    const missed = answerLab(session, labScenarios, wrong?.id ?? '')
    expect(missed.score).toBe(0)
    expect(missed.answered).toBe(true)
    const again = answerLab(missed, labScenarios, first?.correctChoiceId ?? '')
    expect(again.score).toBe(0)
  })

  it('restarts from the results screen without dropping the session', () => {
    let session = createLabSession(labScenarios, () => 0.999999)
    for (const scenario of labScenarios) {
      session = answerLab(session, labScenarios, scenario.correctChoiceId)
      session = advanceLab(session, labScenarios.length)
    }
    expect(session.phase).toBe('results')
    expect(session.score).toBe(labScenarios.length)
    const restarted = restartLab(session, labScenarios, () => 0.999999)
    expect(restarted.phase).toBe('question')
    expect(restarted.index).toBe(0)
    expect(restarted.score).toBe(0)
    expect(restarted.answered).toBe(false)
    expect(restarted.orders).toHaveLength(labScenarios.length)
  })

  it('moves focus off the Next control after an answer and after a restart', () => {
    expect(focusAfterAnswer()).toBe('feedback')
    const finished = advanceLab(
      { ...createLabSession(labScenarios, () => 0.999999), answered: true, index: labScenarios.length - 1 },
      labScenarios.length,
    )
    expect(focusAfterAdvance(finished.phase)).toBe('results-heading')
    expect(focusAfterAdvance('question')).toBe('scenario-heading')
    expect(focusAfterRestart()).toBe('scenario-heading')
  })
})
