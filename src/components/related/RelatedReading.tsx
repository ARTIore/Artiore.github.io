import { SiteLink } from '../content/SiteLink'
import { placementsFor, type RelatedPlacement } from '../../content/related-reading'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

export function RelatedReading({ placement }: { placement: RelatedPlacement }) {
  const headingId = `related-${placement.id}`
  return (
    <nav aria-labelledby={headingId} className="mt-10 max-w-[68ch]" dir={placement.dir} lang={placement.lang}>
      <h2 className="font-serif text-2xl text-cream" id={headingId}>
        {placement.heading}
      </h2>
      <ul className="mt-4 space-y-4">
        {placement.links.map((link) => (
          <li key={`${placement.id}-${link.href}`}>
            <SiteLink className={linkClass} href={link.href}>
              {link.label}
            </SiteLink>
            {link.note ? <p className="mt-1 text-sm leading-relaxed text-muted">{link.note}</p> : null}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function RelatedReadingFor({ sourcePath, ids }: { sourcePath: string; ids?: string[] }) {
  const placements = placementsFor(sourcePath).filter((item) => !ids || ids.includes(item.id))
  if (placements.length === 0) return null
  return (
    <>
      {placements.map((placement) => (
        <RelatedReading key={placement.id} placement={placement} />
      ))}
    </>
  )
}
