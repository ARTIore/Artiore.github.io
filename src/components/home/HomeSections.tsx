import { Link } from 'react-router-dom'
import { useLocale } from '../../context/useLocale'

export function HomeSections() {
  const { copy } = useLocale()

  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_0_70px_rgba(20,184,166,0.08)]">
        <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 animate-pulse rounded-full border border-amber-300/30" />
        <div className="pointer-events-none absolute right-20 top-20 h-20 w-20 rounded-full border border-teal-300/40" />
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-teal-300/80">Turn chaos into clarity</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">{copy.heroStatement}</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-300">{copy.heroSubStatement}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            className="rounded-full border border-teal-300/70 bg-teal-400/15 px-6 py-3 text-sm font-semibold text-teal-100 transition hover:bg-teal-400/25"
            to="/contact"
          >
            {copy.ctaPrimary}
          </Link>
          <Link
            className="rounded-full border border-amber-200/40 bg-amber-100/5 px-6 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-100/10"
            to="/dossier"
          >
            {copy.ctaSecondary}
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-black/20 p-8">
          <h2 className="text-2xl font-semibold text-white">{copy.mission.title}</h2>
          <p className="mt-4 leading-relaxed text-slate-300">{copy.mission.body}</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-black/20 p-8">
          <h2 className="text-2xl font-semibold text-white">{copy.duo.title}</h2>
          <p className="mt-4 leading-relaxed text-slate-300">{copy.duo.description}</p>
        </article>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-white">Pattern. Clarity. Protection.</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {copy.pillars.map((pillar) => (
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6" key={pillar.title}>
              <h3 className="text-lg font-semibold text-teal-100">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-amber-200/20 bg-amber-100/[0.03] p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Featured dossier</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{copy.featuredDossier.title}</h3>
          <p className="mt-4 text-slate-300">{copy.featuredDossier.description}</p>
          <Link className="mt-6 inline-block text-sm font-semibold text-amber-100 underline-offset-4 hover:underline" to="/case-studies">
            Explore case studies
          </Link>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Support</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{copy.support.title}</h3>
          <p className="mt-4 text-slate-300">{copy.support.description}</p>
          <Link
            className="mt-6 inline-block rounded-full border border-teal-300/60 px-5 py-2 text-sm font-semibold text-teal-100 transition hover:bg-teal-300/10"
            to="/contact"
          >
            {copy.support.cta}
          </Link>
        </article>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-black/20 p-8">
          <h3 className="text-xl font-semibold text-white">Blog</h3>
          <ul className="mt-4 space-y-4">
            {copy.blog.map((item) => (
              <li key={item.title}>
                <p className="text-xs uppercase tracking-[0.2em] text-teal-300/70">{item.category}</p>
                <p className="mt-1 text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-400">{item.summary}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-white/10 bg-black/20 p-8">
          <h3 className="text-xl font-semibold text-white">Resources</h3>
          <ul className="mt-4 space-y-4">
            {copy.resources.map((item) => (
              <li key={item.title}>
                <p className="text-xs uppercase tracking-[0.2em] text-teal-300/70">{item.category}</p>
                <p className="mt-1 text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-400">{item.summary}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  )
}
