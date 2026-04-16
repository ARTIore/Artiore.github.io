import { SeoHead } from '../components/seo/SeoHead'
import { useLocale } from '../context/useLocale'

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

export default function SystemDocsPage() {
  const { copy, locale } = useLocale()
  const page = copy.pages.systemDocs
  const viewLabel = locale === 'fr' ? 'Ouvrir le document' : 'Open document'

  return (
    <>
      <SeoHead description={page.lead} path="/system-documentation" title={page.title} />
      <section className="space-y-8">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-teal-300/80">{copy.siteTitle}</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">{page.title}</h1>
          <p className="max-w-3xl text-lg text-slate-300">{page.lead}</p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {systemDocs.map((document) => (
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6" key={document.file}>
              <h2 className="text-xl font-semibold text-white">{document.title}</h2>
              <p className="mt-2 break-all text-sm text-slate-400">{document.file}</p>
              <a
                className="mt-4 inline-flex rounded-full border border-teal-300/40 bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-100 transition hover:border-teal-200 hover:bg-teal-300/20"
                href={`/system-docs/${document.file}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {viewLabel}
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
