import { SeoHead } from '../components/seo/SeoHead'
import { SiteLink } from '../components/content/SiteLink'
import { links } from '../content/links'

const waysHome = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' },
  { label: 'Framework', href: '/how-it-works' },
  { label: 'Prompt Framework V1.1', href: links.frameworkHtml },
  { label: 'Engine', href: '/engine' },
  { label: 'Blog', href: '/blog' },
]

export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        description="This address is not a page on artiais.com."
        noindex
        path="/404"
        title="Page not found | ARTIore"
      />
      <article className="mx-auto max-w-2xl py-8">
        <p className="text-xs uppercase tracking-[0.22em] text-gold">404</p>
        <h1 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">This page is not here.</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          The address does not match a page on artiais.com. Nothing was redirected. You can go back to a page that
          does exist.
        </p>
        <ul className="mt-8 space-y-3">
          {waysHome.map((item) => (
            <li key={item.href}>
              <SiteLink className="text-lg text-gold-bright underline underline-offset-4" href={item.href}>
                {item.label}
              </SiteLink>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}
