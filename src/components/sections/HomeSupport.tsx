import { Button } from '../ui/Button'
import { Callout } from '../ui/Callout'
import { Section } from '../ui/Section'

export function HomeSupport() {
  return (
    <Section>
      <Callout>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-zinc-100">
            If you believe in building tools that help people see clearly, support the mission. Your support helps ARTIore keep building, publishing, and protecting.
          </p>
          <Button to="/access" variant="ghost" className="w-fit border-amber-300/40 text-amber-100 hover:border-amber-200">
            Support the Mission
          </Button>
        </div>
      </Callout>
    </Section>
  )
}
