import { Link, Navigate } from 'react-router-dom'
import { SeoMeta } from '../components/layout/SeoMeta'
import { Section } from '../components/ui/Section'
import { secondaryPageContent, type SecondaryPageKey } from '../content/site'

type SecondaryPageProps = {
  pageKey: SecondaryPageKey
}

export default function SecondaryPage({ pageKey }: SecondaryPageProps) {
  const page = secondaryPageContent[pageKey]

  if (!page) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <SeoMeta title={page.title} description={page.description} path={`/${pageKey}`} />
      <Section>
        <p className="text-xs uppercase tracking-[0.24em] text-teal-200">ARTIore</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold text-white md:text-5xl">{page.headline}</h1>
        <p className="mt-5 max-w-3xl text-lg text-zinc-300">{page.summary}</p>
        <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 text-zinc-300">
          This page is ready for production content templates (blog, dossiers, docs, and resources) while preserving ARTIore’s core design language.
        </div>
        <Link to="/" className="mt-8 inline-block text-sm uppercase tracking-[0.16em] text-teal-200 hover:text-teal-100">
          Return home →
        </Link>
      </Section>
    </>
  )
}
