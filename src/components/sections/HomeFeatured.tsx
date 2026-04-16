import { Link } from 'react-router-dom'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import { Tag } from '../ui/Tag'

export function HomeFeatured() {
  return (
    <Section>
      <Card className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Tag>Featured dossier</Tag>
          <h2 className="mt-4 text-2xl font-semibold text-white">Mapping invisible decision systems</h2>
          <p className="mt-3 max-w-2xl text-zinc-300">
            A narrative case study on how hidden incentives shape visible outcomes—and how clarity-first analysis can restore agency.
          </p>
        </div>
        <Link to="/case-studies" className="text-sm uppercase tracking-[0.16em] text-teal-200 hover:text-teal-100">
          Read case studies →
        </Link>
      </Card>
    </Section>
  )
}
