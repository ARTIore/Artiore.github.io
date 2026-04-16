import { Button } from '../ui/Button'
import { Section } from '../ui/Section'
import { SacredGeometry } from '../brand/SacredGeometry'

export function HomeHero() {
  return (
    <Section className="relative overflow-hidden pt-24 md:pt-28">
      <SacredGeometry />
      <p className="mb-6 text-xs uppercase tracking-[0.24em] text-teal-200">Human intuition + AI precision</p>
      <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
        They built systems you were never meant to understand.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-zinc-300">
        ARTIore turns chaos into clarity through disciplined intelligence design, explainable structure, and signal-first awareness.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button to="/about">Explore ARTIore</Button>
        <Button to="/dossier" variant="ghost">
          Read the Dossier
        </Button>
        <Button to="/try-demo" variant="ghost">
          Enter the System
        </Button>
      </div>
    </Section>
  )
}
