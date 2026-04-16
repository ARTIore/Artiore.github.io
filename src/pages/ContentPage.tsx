import { SeoHead } from '../components/seo/SeoHead'
import { useLocale } from '../context/useLocale'

type ContentPageProps = {
  pageKey:
    | 'about'
    | 'philosophy'
    | 'framework'
    | 'engine'
    | 'dossier'
    | 'resources'
    | 'blog'
    | 'caseStudies'
    | 'applications'
    | 'implementation'
    | 'systemDocs'
    | 'apiDocs'
    | 'contact'
  path: string
}

export function ContentPage({ pageKey, path }: ContentPageProps) {
  const { copy } = useLocale()
  const page = copy.pages[pageKey]

  return (
    <>
      <SeoHead description={page.lead} path={path} title={page.title} />
      <section className="space-y-8">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-teal-300/80">{copy.siteTitle}</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">{page.title}</h1>
          <p className="max-w-3xl text-lg text-slate-300">{page.lead}</p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {page.sections.map((section) => (
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6" key={section.title}>
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-slate-300">{section.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
