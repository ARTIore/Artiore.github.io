import { links } from '../../content/links'
import { blogSummaries } from '../../content/blog-summaries'
import { SiteLink } from '../content/SiteLink'

const five = [
  ['01', 'Evidence', 'What is actually known and confirmed in your situation.'],
  ['02', 'Assumptions', 'What is being assumed but not yet verified.'],
  ['03', 'Trade-offs', 'The real costs of each path — named honestly.'],
  ['04', 'Practical next steps', 'Options you can act on, not prescriptions.'],
  ['05', 'Limits', 'What this analysis cannot tell you. What remains your decision.'],
] as const

const layers = [
  ['Clarity', 'Truth and light. Not just answers, but understanding.'],
  ['Reasoning', 'Analyze, discern, act. Structured thinking that leads to a grounded decision.'],
  ['Archives', 'Preserve memory. A reasoning history you can return to.'],
  ['Derivatives', 'Shared outputs. Reports, summaries, and frameworks you can use.'],
  ['AI in the margin', 'Quiet support. A witness, not a master. Humans stay at the center.'],
  ['Human upliftment', 'The foundation: dignity, learning, hope, courage, service, justice.'],
] as const

const doctrine = [
  'Restraint is real power.',
  'The chooser may act, but must not claim the seat of final judgment.',
  'Consequences unfold within a reality authored by the Creator.',
  'Witness records; it does not authorize, sanctify, or intervene.',
  'Therefore, act with humility, clarity, and accountability — and refrain from overclaim.',
] as const

export function HomeSections() {
  return (
    <div className="space-y-20">
      <section className="rounded-3xl border border-gold/25 bg-[radial-gradient(circle_at_top,rgba(212,179,106,0.16),transparent_42%),linear-gradient(#1c1916,#12100e)] px-5 py-12 sm:px-10 sm:py-16">
        <p className="text-xs uppercase tracking-[0.28em] text-gold" lang="ar" dir="rtl">
          حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ
        </p>
        <p className="mt-3 font-serif text-lg text-gold-bright">Allah Alone is Enough.</p>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-cream sm:text-6xl">
          Understand complex situations. Choose the next clear step.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream/90">
          Artiais is the AI infrastructure platform for ARTIore — the technical foundation powering clarity-first
          reasoning. ARTIore helps people understand complex situations, make grounded decisions, and take practical
          next steps — without overwhelm, gatekeeping, or false certainty.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          Every response maps evidence, assumptions, trade-offs, practical next steps, and limits. The system is a
          witness, not a verdict. No data collected. No magic in the system.
        </p>
        <div className="mt-8 h-px w-40 bg-gold" />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <SiteLink
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink"
            href={links.artioreTry}
          >
            Try ARTIore
          </SiteLink>
          <SiteLink
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-gold/60 px-5 py-2 text-sm font-semibold text-gold-bright"
            href={links.frameworkHtml}
          >
            Grand Directional Prompt Framework
          </SiteLink>
          <SiteLink
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-gold/60 px-5 py-2 text-sm font-semibold text-gold-bright"
            href={links.eternia}
          >
            Eternia Aurora Sovereign Engine
          </SiteLink>
          <SiteLink
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-cream"
            href={links.email}
          >
            Email ARTIore
          </SiteLink>
          <SiteLink
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-gold/60 px-5 py-2 text-sm font-semibold text-gold-bright"
            href="/field-manual"
          >
            Field Manual
          </SiteLink>
          <SiteLink
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-gold/60 px-5 py-2 text-sm font-semibold text-gold-bright"
            href="/field-manual/pocket-booklet"
          >
            Pocket Booklet
          </SiteLink>
          <SiteLink
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-gold/60 px-5 py-2 text-sm font-semibold text-gold-bright"
            href="/field-manual/carousels"
          >
            Carousels
          </SiteLink>
          <SiteLink
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-gold/60 px-5 py-2 text-sm font-semibold text-gold-bright"
            href="/investigations/digital-exposure/"
          >
            Digital Safety Investigation
          </SiteLink>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-cream">Five sections. Every response.</h2>
        <p className="mt-3 max-w-3xl text-muted">Structured reasoning without false certainty. Final judgment stays with you.</p>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {five.map(([label, title, body]) => (
            <li className="rounded-2xl border border-white/10 p-5" key={label}>
              <p className="font-serif text-gold">{label}</p>
              <h3 className="mt-2 font-serif text-2xl text-cream">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 font-serif text-xl text-gold-bright">The system is a witness, not a verdict.</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-gold/25 p-6">
          <h2 className="font-serif text-3xl text-cream">The witness principle</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            “To witness is not to judge. To record is not to authorize.” Artiore illuminates patterns, surfaces
            consequences, and maps possibilities. The authority to choose stays with the human.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm uppercase tracking-[0.16em] text-gold">Witness does</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                <li>Records patterns</li>
                <li>Maps consequences</li>
                <li>Surfaces tradeoffs</li>
                <li>Illuminates blind spots</li>
                <li>Maintains transparency</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.16em] text-gold">Witness does not</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                <li>Claim final judgment</li>
                <li>Authorize actions</li>
                <li>Sanctify choices</li>
                <li>Override human agency</li>
                <li>Promise certainty</li>
              </ul>
            </div>
          </div>
          <SiteLink className="mt-5 inline-block text-gold-bright underline underline-offset-4" href="/philosophy">
            Read the charter
          </SiteLink>
        </article>
        <article className="rounded-2xl border border-gold/25 p-6">
          <h2 className="font-serif text-3xl text-cream">Allah Alone is Enough.</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            “Allah is sufficient for us, and He is the best Disposer of affairs.” Artiore is built on that premise:
            Allah alone is sufficient. Not the system. Not the algorithm. Not the intelligence.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The system clarifies your options. It maps consequences. It surfaces blind spots. Your trust — your
            tawakkul — belongs to Allah alone. Not to the algorithm. Not to the analysis. Not to the clarity itself.
            Use the tool. Seek clarity. Make your choice. Then place your trust where it has always belonged.
          </p>
        </article>
      </section>

      <section>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <h2 className="font-serif text-3xl text-cream">Six layers, one purpose</h2>
          <SiteLink className="inline-flex min-h-11 items-center text-gold-bright underline underline-offset-4" href="/how-it-works">
            Read the six-layer framework
          </SiteLink>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {layers.map(([title, body], index) => (
            <article className="rounded-2xl border border-white/10 p-5" key={title}>
              <p className="text-xs uppercase tracking-[0.16em] text-gold">{index + 1}</p>
              <h3 className="mt-2 font-serif text-xl text-cream">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-cream/90">Technology serves humanity. Never the reverse.</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-gold/30 bg-gold/5 p-6" id="framework">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Published here</p>
          <h2 className="mt-3 font-serif text-3xl text-cream">Grand Directional Prompt Framework V1.1</h2>
          <p className="mt-4 leading-relaxed text-muted">
            A cognitive charter and operating protocol for an AI dedicated to knowledge, reasoning, and human
            advancement. Zero-Drift Edition. Created by Zain Ul Abdin. The HTML edition stays at its public address.
          </p>
          <SiteLink
            className="mt-6 inline-flex min-h-11 items-center rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink"
            href={links.frameworkHtml}
          >
            Read the prompt framework V1.1
          </SiteLink>
        </article>
        <article className="rounded-2xl border border-gold/30 bg-gold/5 p-6" id="eternia">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">In the browser</p>
          <h2 className="mt-3 font-serif text-3xl text-cream">Eternia Aurora Sovereign Engine</h2>
          <p className="mt-4 leading-relaxed text-muted">
            A local-first generative ambient instrument. Shape evolving rhythms, cosmic tones, and spacious
            soundscapes in your browser. It is a single-file instrument: everything runs in the page you open, with
            no server and no account.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <SiteLink
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink"
              href={links.eternia}
            >
              Play Eternia
            </SiteLink>
            <SiteLink
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-gold/50 px-5 py-2 text-sm font-semibold text-gold-bright"
              href="/engine"
            >
              About the engine
            </SiteLink>
          </div>
        </article>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-cream">Three platforms</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <article className="rounded-2xl border border-white/10 p-5">
            <h3 className="font-serif text-2xl text-cream">Artiore</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The flagship reasoning platform. Dual-mode reasoning — Executive Edition and Clarity Edition — with
              balanced perspectives, calibrated confidence, and actionable next steps.
            </p>
            <SiteLink className="mt-4 inline-block text-gold-bright underline underline-offset-4" href={links.artiore}>
              artiore.com
            </SiteLink>
          </article>
          <article className="rounded-2xl border border-gold/30 p-5">
            <h3 className="font-serif text-2xl text-cream">Artiais</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              AI infrastructure platform. The technical foundation powering Artiore’s reasoning capabilities: AI
              systems architecture, reasoning-engine infrastructure, computational resources, and model orchestration.
            </p>
            <SiteLink className="mt-4 inline-block text-gold-bright underline underline-offset-4" href="/about">
              About this site
            </SiteLink>
          </article>
          <article className="rounded-2xl border border-white/10 p-5">
            <h3 className="font-serif text-2xl text-cream">Artiore Consortium</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A collaborative network advancing clarity-first reasoning and ethical AI development.
            </p>
            <SiteLink className="mt-4 inline-block text-gold-bright underline underline-offset-4" href={links.consortium}>
              artioreconsortium.com
            </SiteLink>
          </article>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-cream">Five-line doctrine</h2>
        <ol className="mt-6 space-y-3">
          {doctrine.map((line, index) => (
            <li className="flex gap-4 text-lg leading-relaxed text-cream/90" key={line}>
              <span className="font-serif text-gold">{index + 1}</span>
              <span>{line}</span>
            </li>
          ))}
        </ol>
        <SiteLink className="mt-5 inline-block text-gold-bright underline underline-offset-4" href="/doctrine">
          The Eternal Loop
        </SiteLink>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article>
          <h2 className="font-serif text-3xl text-cream">What Artiore is</h2>
          <p className="mt-4 leading-relaxed text-muted">
            A reasoning partner. A cognitive guide. A translator across disciplines. A clarity engine that turns chaos
            into steps, maps, and checklists.
          </p>
        </article>
        <article>
          <h2 className="font-serif text-3xl text-cream">What Artiore is not</h2>
          <ul className="mt-4 space-y-2 text-muted">
            <li>Not a final authority</li>
            <li>Not a substitute for doctors, lawyers, or financial professionals</li>
            <li>Not a replacement for your judgment or responsibility</li>
            <li>Not a tool for harm, evasion, or privacy invasion</li>
          </ul>
        </article>
      </section>

      <section className="rounded-2xl border border-white/10 p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-gold">Founder’s account</p>
        <h2 className="mt-3 font-serif text-3xl text-cream">UAE dossier, 2025–2026</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          Zain Ul Abdin reports experiencing digital victimization in the UAE during 2025–2026 and turning to AI for
          help. He says that concerns about possible DNS interference made it harder to know what to trust. That
          experience became Artiore’s central reason to break complexity. Technical causes remain under review; the
          dossier separates reported experiences from unverified explanations.
        </p>
        <SiteLink className="mt-5 inline-block text-gold-bright underline underline-offset-4" href="/dossier">
          Read the UAE dossier
        </SiteLink>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl text-cream">From the blog</h2>
          <SiteLink className="text-gold-bright underline underline-offset-4" href="/blog">
            All essays
          </SiteLink>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {blogSummaries.map((post) => (
            <article className="rounded-2xl border border-white/10 p-5" key={post.path}>
              <p className="text-xs uppercase tracking-[0.16em] text-gold">
                {post.category} · {post.date}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-cream">
                <SiteLink className="hover:text-gold-bright" href={post.path}>
                  {post.title}
                </SiteLink>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{post.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
