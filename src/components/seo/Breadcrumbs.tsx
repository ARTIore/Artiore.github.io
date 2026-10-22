import { breadcrumbItems } from '../../content/urls'
import { SiteLink } from '../content/SiteLink'

export function Breadcrumbs({ path, current }: { path: string; current: string }) {
  const items = breadcrumbItems(path, current)
  if (items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li className="inline-flex min-h-11 items-center gap-2" key={`${item.path}-${item.name}`}>
              {index > 0 ? (
                <span aria-hidden="true" className="text-gold">
                  /
                </span>
              ) : null}
              {last ? (
                <span className="text-cream">{item.name}</span>
              ) : (
                <SiteLink
                  className="inline-flex min-h-11 items-center text-gold-bright underline decoration-gold/40 underline-offset-4"
                  href={item.path}
                >
                  {item.name}
                </SiteLink>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
