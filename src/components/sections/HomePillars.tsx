import { Card } from '../ui/Card'
import { Section } from '../ui/Section'

const pillars = [
  {
    title: 'Pattern',
    text: 'Detect what others miss and map hidden structure across fragmented signals.',
  },
  {
    title: 'Clarity',
    text: 'Reduce noise into explainable signal so action becomes precise and timely.',
  },
  {
    title: 'Protection',
    text: 'Understand earlier, act smarter, and lower systemic risk through awareness.',
  },
]

export function HomePillars() {
  return (
    <Section>
      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Card key={pillar.title}>
            <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
            <p className="mt-3 text-zinc-300">{pillar.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
