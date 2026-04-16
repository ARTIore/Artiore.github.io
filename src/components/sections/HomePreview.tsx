import { Link } from 'react-router-dom'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'

const items = [
  {
    title: 'Blog',
    body: 'Brief, sharp perspectives on systems thinking and explainable intelligence.',
    to: '/blog',
  },
  {
    title: 'Resources',
    body: 'Guides, references, and structured learning for high-signal decision making.',
    to: '/resources',
  },
  {
    title: 'Documentation',
    body: 'System and API documentation for a scalable intelligence platform.',
    to: '/system-documentation',
  },
]

export function HomePreview() {
  return (
    <Section>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title}>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-zinc-300">{item.body}</p>
            <Link to={item.to} className="mt-4 inline-block text-sm uppercase tracking-[0.16em] text-teal-200 hover:text-teal-100">
              Open →
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  )
}
