import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { isStaticPath, toPublicPath } from '../../content/urls'

function safeHref(href: string) {
  if (
    href.startsWith('/') ||
    href.startsWith('mailto:') ||
    href.startsWith('https://') ||
    href.startsWith('http://')
  ) {
    return href
  }
  return '/'
}

function isSpaPath(href: string) {
  return (
    href.startsWith('/') &&
    !href.endsWith('.html') &&
    !href.endsWith('.pdf') &&
    !isStaticPath(href)
  )
}

type SiteLinkProps = {
  href: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

export function SiteLink({ href, className, children, onClick }: SiteLinkProps) {
  const safe = safeHref(href)
  const publicHref = isSpaPath(safe) ? toPublicPath(safe) : safe
  if (isSpaPath(safe)) {
    return (
      <Link className={className} onClick={onClick} to={publicHref}>
        {children}
      </Link>
    )
  }

  const external = publicHref.startsWith('http')
  return (
    <a
      className={className}
      href={publicHref}
      onClick={onClick}
      rel={external ? 'noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {children}
    </a>
  )
}

export function InlineText({ text }: { text: string }) {
  const nodes: ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
    const index = match.index ?? 0
    if (index > last) nodes.push(text.slice(last, index))
    nodes.push(
      <SiteLink className="text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright" href={match[2]} key={`${match[2]}-${index}`}>
        {match[1]}
      </SiteLink>,
    )
    last = index + match[0].length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return <>{nodes}</>
}
