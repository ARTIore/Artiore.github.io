import { SeoHead } from '../components/seo/SeoHead'
import { useLocale } from '../context/useLocale'

const engineModules = {
  en: [
    {
      title: 'Eternia',
      description:
        'Persists long-horizon signal context to preserve continuity across fragmented intelligence cycles.',
    },
    {
      title: 'Aurora',
      description: 'Transforms weak correlations into legible structures with explainable confidence framing.',
    },
    {
      title: 'Witness',
      description:
        'Captures provenance and review checkpoints so every strategic output remains auditable.',
    },
  ],
  fr: [
    {
      title: 'Eternia',
      description:
        'Préserve le contexte des signaux à long horizon pour maintenir la continuité entre des cycles d’intelligence fragmentés.',
    },
    {
      title: 'Aurora',
      description:
        'Transforme les corrélations faibles en structures lisibles avec un cadre de confiance explicable.',
    },
    {
      title: 'Witness',
      description:
        'Capture la provenance et les points de revue pour conserver des sorties stratégiques auditables.',
    },
  ],
}

const engineCopy = {
  en: {
    eyebrow: 'Integrated engine',
    title: 'Eternia · Aurora · Witness Engine',
    lead: 'A coordinated ARTIore stack for durable memory, pattern illumination, and traceable evidence chains.',
  },
  fr: {
    eyebrow: 'Moteur intégré',
    title: 'Moteur Eternia · Aurora · Witness',
    lead: 'Une pile ARTIore coordonnée pour la mémoire durable, l’illumination des motifs et des chaînes de preuve traçables.',
  },
}

export default function EnginePage() {
  const { locale, copy } = useLocale()
  const page = copy.pages.engine
  const localEngineCopy = engineCopy[locale]

  return (
    <>
      <SeoHead description={page.lead} path="/engine" title={page.title} />
      <section className="space-y-8">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-teal-300/80">{copy.siteTitle}</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">{page.title}</h1>
          <p className="max-w-3xl text-lg text-slate-300">{page.lead}</p>
        </header>

        <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-teal-300/80">{localEngineCopy.eyebrow}</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{localEngineCopy.title}</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">{localEngineCopy.lead}</p>
        </article>

        <div className="grid gap-5 md:grid-cols-3">
          {engineModules[locale].map((module) => (
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6" key={module.title}>
              <h2 className="text-xl font-semibold text-white">{module.title}</h2>
              <p className="mt-3 leading-relaxed text-slate-300">{module.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
