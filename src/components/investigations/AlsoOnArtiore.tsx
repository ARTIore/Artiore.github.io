const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

/** Normal follow link to a companion page on artiore.com. */
export function AlsoOnArtiore({ href }: { href: string }) {
  return (
    <p className="mt-10 max-w-[68ch] text-sm leading-relaxed text-cream/90">
      Also on artiore.com:{' '}
      <a className={linkClass} href={href} rel="noopener noreferrer" target="_blank">
        {href}
      </a>
    </p>
  )
}
