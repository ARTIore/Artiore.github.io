import { SeoHead } from '../components/seo/SeoHead'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SiteLink } from '../components/content/SiteLink'
import { links } from '../content/links'
import { engineMeta } from '../content/meta'

const layers = [
  {
    title: 'Starwave',
    body: 'The public Sovereign Engine page says this layer entrains you: low-frequency oscillation aimed at calm focus.',
  },
  {
    title: 'Aurora',
    body: 'The same page says Aurora builds equity. It asks for active positive inputs to keep its glow, and it is described as a check on cynicism. Offering a kind word is logged as an action, not only a thought.',
  },
  {
    title: 'Witness',
    body: '“It does not decide. It audits.” The page says Witness measures what you have done — level and streak — not how you feel.',
  },
  {
    title: 'Cipher',
    body: 'The page calls Cipher the numeric anchor. It says you enter 4 digits, and it gives 2626 and 1313 as examples of digits that filter noise.',
  },
]

export default function EnginePage() {
  return (
    <>
      <SeoHead
        crumbName={engineMeta.crumbName}
        description={engineMeta.description}
        kind={engineMeta.kind}
        path={engineMeta.path}
        title={engineMeta.headTitle}
      />
      <Breadcrumbs current={engineMeta.crumbName} path={engineMeta.path} />
      <article className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Sovereign engine</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-cream sm:text-5xl">Eternia Aurora Sovereign Engine</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-cream/90">
          Eternia · Aurora is a local-first generative ambient instrument by Artiore. Shape evolving rhythms, cosmic
          tones, and spacious soundscapes in your browser. It is a single-file, local-first instrument: everything
          runs in the page you open, with no server and no account.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <SiteLink
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink"
            href={links.eternia}
          >
            Play it in the browser
          </SiteLink>
          <SiteLink
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-gold/50 px-5 py-2 text-sm font-semibold text-gold-bright"
            href={links.githubEternia}
          >
            Source on GitHub
          </SiteLink>
        </div>
        <p className="mt-4 break-all text-sm text-muted">{links.eternia}</p>

        <section className="mt-12">
          <h2 className="font-serif text-3xl text-cream">What the Sovereign Engine page says</h2>
          <p className="mt-4 leading-relaxed text-muted">
            artiore.com/engine calls the instrument a four-layer behavioral instrument. Its own line: “Not a mystical
            relic. Not a magic 8-ball.” Abstract ideas — focus, intent, discipline — are put into mechanics,
            accountability, and compounding metrics. The system-documentation page describes the same four names as
            stages of a written response. Those are two published accounts. This page keeps the instrument account.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {layers.map((layer) => (
              <article className="rounded-2xl border border-gold/20 p-5" key={layer.title}>
                <h3 className="font-serif text-2xl text-cream">{layer.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{layer.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 leading-relaxed text-cream/90">
            Stable means cleared to execute. Hold means rebuild equity first. The live page also exposes presets
            named Focus, Calm, Energy, and Balance, plus layer mute, phase, tempo, and volume. Those controls live in
            the instrument, not on this page.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-cream">Related on this site</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <SiteLink className="inline-flex min-h-11 items-center text-gold-bright underline underline-offset-4" href="/how-it-works">
                Six-layer framework
              </SiteLink>
            </li>
            <li>
              <SiteLink className="inline-flex min-h-11 items-center text-gold-bright underline underline-offset-4" href={links.frameworkHtml}>
                Grand Directional Prompt Framework V1.1
              </SiteLink>
            </li>
            <li>
              <SiteLink className="inline-flex min-h-11 items-center text-gold-bright underline underline-offset-4" href="/system-documentation">
                System documentation
              </SiteLink>
            </li>
          </ul>
        </section>
      </article>
    </>
  )
}
