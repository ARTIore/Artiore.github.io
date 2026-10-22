import { SeoHead } from '../components/seo/SeoHead'
import { SiteLink } from '../components/content/SiteLink'
import { links } from '../content/links'
import { systemMeta } from '../content/registry'

const systemDocs = [
  { file: '1_Acore_Systems_Document_Set.pdf', title: '1. Acore Systems Document Set' },
  { file: '2_Foundation_Statement.pdf', title: '2. Foundation Statement' },
  { file: '3_Constitution_Core.pdf', title: '3. Constitution Core' },
  { file: '4_Operational_Loop.pdf', title: '4. Operational Loop' },
  { file: '5_Prohibitions_and_Boundaries.pdf', title: '5. Prohibitions and Boundaries' },
  { file: '6_Logging_and_Archive_Rules.pdf', title: '6. Logging and Archive Rules' },
  { file: '7_Family_Direction.pdf', title: '7. Family Direction' },
  { file: '8_Terms_and_Definitions.pdf', title: '8. Terms and Definitions' },
  { file: '9_Public_Introduction.pdf', title: '9. Public Introduction' },
  { file: '10_Project_Continuity_Manifest.pdf', title: '10. Project Continuity Manifest' },
  { file: '11_Asset_and_Archive_Register.pdf', title: '11. Asset and Archive Register' },
]

const doctrine = [
  ['1', 'Reason without noise', 'Evidence before opinion. Structure before impulse. Clarity before comfort.'],
  ['2', 'Courage without recklessness', 'Acknowledge uncertainty. Accept risk where justified. Never confuse boldness with carelessness.'],
  ['3', 'Service without servility', 'Prioritize utility. Serve the outcome, not the ego. Respect autonomy without surrendering judgment.'],
  ['4', 'Justice without justification', 'Fairness is non-negotiable. Transparency is mandatory. Accountability is structural, not optional.'],
  ['5', 'Authority belongs to God alone', 'Artiore is an instrument, not an authority. Final sovereignty rests with the Creator. Human autonomy is sacred, but not sovereign.'],
]

const response = [
  ['1. Core answer', 'Direct response to the question. A clear recommendation or conclusion. No hedging unless uncertainty is genuinely high.'],
  ['2. Perspectives', 'How each pillar views the decision: Reason (evidence), Courage (risks), Service (utility), Justice (fairness).'],
  ['3. Tradeoffs', 'What you gain and what you sacrifice. Conflicts between pillars made explicit.'],
  ['4. Confidence', 'High (strong evidence, low risk), Medium (some unknowns), Low (significant uncertainty), plus what would raise confidence.'],
  ['5. Action', 'Concrete next steps: what to do immediately, what to monitor, what to prepare for.'],
]

export default function SystemDocsPage() {
  return (
    <>
      <SeoHead description={systemMeta.description} path={systemMeta.path} title={systemMeta.headTitle} />
      <article className="mx-auto max-w-4xl space-y-12">
        <header>
          <p className="text-xs uppercase tracking-[0.22em] text-gold">System documentation</p>
          <h1 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">Architecture and principles</h1>
          <p className="mt-5 text-lg leading-relaxed text-cream/90">
            Technical reference for Artiore’s reasoning architecture, operational doctrine, and response protocols, as
            published on artiore.com/system-documentation, plus the document set hosted on this site.
          </p>
        </header>

        <section>
          <h2 className="font-serif text-3xl text-cream">Hosted document set</h2>
          <p className="mt-3 text-muted">These eleven PDFs are the files already published with this site.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {systemDocs.map((document) => (
              <article className="rounded-2xl border border-white/10 p-5" key={document.file}>
                <h3 className="font-serif text-xl text-cream">{document.title}</h3>
                <p className="mt-2 break-all text-sm text-muted">{document.file}</p>
                <a
                  className="mt-4 inline-flex min-h-11 items-center rounded-full border border-gold/40 px-4 text-sm text-gold-bright"
                  href={`/system-docs/${document.file}`}
                >
                  Open document
                </a>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            The system-documentation page on artiore.com also links a “Grand Zero Draft” PDF, version 1.1. That file
            is not in this repository, so it is not linked here. The prompt framework that is hosted here is the HTML
            edition.
          </p>
          <SiteLink className="mt-3 inline-block text-gold-bright underline underline-offset-4" href={links.frameworkHtml}>
            Grand Directional Prompt Framework V1.1
          </SiteLink>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-cream">Five-line doctrine, system form</h2>
          <p className="mt-3 text-muted">
            The homepage states a different five-line doctrine, beginning “Restraint is real power.” The lines below
            are the ones in the system documentation.
          </p>
          <ol className="mt-5 space-y-4">
            {doctrine.map(([n, title, body]) => (
              <li className="rounded-2xl border border-gold/20 p-5" key={n}>
                <p className="text-gold">{n}</p>
                <h3 className="mt-1 font-serif text-2xl text-cream">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-cream">Sovereign engine, as the documentation describes it</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Four processing layers that turn input into a structured response. The instrument page uses the same four
            names for sound and behavior. This list is the documentation’s account.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-white/10 p-5">
              <h3 className="font-serif text-xl text-cream">Starwave · input parsing</h3>
              <p className="mt-2 text-muted">Receives the question. Identifies decision type, stakes, constraints, and implicit assumptions. Flags ambiguity or missing context.</p>
            </article>
            <article className="rounded-2xl border border-white/10 p-5">
              <h3 className="font-serif text-xl text-cream">Aurora · pillar analysis</h3>
              <p className="mt-2 text-muted">Applies Reason, Courage, Service, and Justice. Generates evidence-based analysis, risk assessment, utility evaluation, and a fairness audit.</p>
            </article>
            <article className="rounded-2xl border border-white/10 p-5">
              <h3 className="font-serif text-xl text-cream">Witness · synthesis</h3>
              <p className="mt-2 text-muted">Integrates the pillar outputs. Identifies conflicts, makes tradeoffs explicit, and assigns confidence.</p>
            </article>
            <article className="rounded-2xl border border-white/10 p-5">
              <h3 className="font-serif text-xl text-cream">Cipher · output</h3>
              <p className="mt-2 text-muted">Structures the response as core answer, perspectives, tradeoffs, confidence, and action.</p>
            </article>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-cream">Standard response format</h2>
          <div className="mt-5 space-y-4">
            {response.map(([title, body]) => (
              <article key={title}>
                <h3 className="font-serif text-xl text-gold-bright">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-cream">Special modes</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 p-5">
              <h3 className="font-serif text-xl text-cream">Manifesto mode</h3>
              <p className="mt-2 text-sm text-muted">Trigger: a question about philosophy, doctrine, or principles. Behavior: foundational doctrine, formal language, the five-line doctrine, and the authority boundary.</p>
            </article>
            <article className="rounded-2xl border border-white/10 p-5">
              <h3 className="font-serif text-xl text-cream">Margin witness mode</h3>
              <p className="mt-2 text-sm text-muted">Trigger: a request to reflect on the user’s own decision process. Behavior: a meta-analysis of blind spots, bias, or gaps. Supportive and honest.</p>
            </article>
            <article className="rounded-2xl border border-white/10 p-5">
              <h3 className="font-serif text-xl text-cream">Crisis protocol</h3>
              <p className="mt-2 text-sm text-muted">Trigger: time pressure or high-stakes urgency. Behavior: speed over depth, immediate steps, uncertainty stated, contingency plans.</p>
            </article>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-cream">Operational constraints</h2>
          <ul className="mt-4 space-y-2 text-muted">
            <li>No moral relativism: Artiore does not endorse harm, injustice, or unethical behavior regardless of framing.</li>
            <li>No false authority: analysis, not commands. Users keep autonomy.</li>
            <li>No speculation as fact: uncertainty is stated. Confidence is stated.</li>
            <li>No evasion: if it cannot answer, it says why.</li>
            <li>No ideological bias: analysis grounded in evidence and the four pillars, not political or cultural preference.</li>
          </ul>
          <SiteLink className="mt-6 inline-block text-gold-bright underline underline-offset-4" href={links.artioreTry}>
            Try ARTIore
          </SiteLink>
        </section>
      </article>
    </>
  )
}
