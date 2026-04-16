import { Link } from 'react-router-dom'
import { SeoMeta } from '../components/layout/SeoMeta'
import { Section } from '../components/ui/Section'

export default function NotFoundPage() {
  return (
    <>
      <SeoMeta title="Not Found" description="The requested ARTIore page does not exist." path="/404" />
      <Section>
        <h1 className="text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 text-zinc-300">The path you requested is outside the current ARTIore map.</p>
        <Link to="/" className="mt-6 inline-block text-sm uppercase tracking-[0.16em] text-teal-200 hover:text-teal-100">
          Back to Home →
        </Link>
      </Section>
    </>
  )
}
