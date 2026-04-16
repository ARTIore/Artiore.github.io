import { SignalMap } from '../brand/SignalMap'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import { Tag } from '../ui/Tag'

export function HomeDuo() {
  return (
    <Section className="grid items-center gap-8 md:grid-cols-2">
      <div>
        <Tag>Human + AI</Tag>
        <h2 className="mt-5 text-3xl font-semibold text-white">Explainable intelligence, guided by human judgment.</h2>
        <p className="mt-4 text-zinc-300">
          ARTIore combines intuition, domain context, and machine precision to surface hidden patterns without sacrificing clarity.
        </p>
      </div>
      <Card>
        <SignalMap />
      </Card>
    </Section>
  )
}
