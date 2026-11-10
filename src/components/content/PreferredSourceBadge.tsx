import { useLocation } from 'react-router-dom'

const href = 'https://www.google.com/preferences/source?q=artiore.com'
const alt = 'Add ARTIore as a preferred source on Google'

/** Official Google artwork. English and French only; Arabic and Urdu packs were not in the download. */
export function PreferredSourceBadge({ className = '' }: { className?: string }) {
  const { pathname } = useLocation()
  const french = pathname === '/field-manual/fr' || pathname.startsWith('/field-manual/fr/')
  const base = french
    ? '/preferred-source/google-preferred-source-dark-fr'
    : '/preferred-source/google-preferred-source-dark-en'
  return (
    <a
      className={`inline-flex max-w-full rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${className}`}
      dir="ltr"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        alt={alt}
        className="h-auto w-[min(100%,220px)]"
        decoding="async"
        height={french ? 106 : 107}
        src={`${base}.png`}
        srcSet={`${base}.png 1x, ${base}@2x.png 2x`}
        width={338}
      />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}
