import { SeoHead } from '../components/seo/SeoHead'
import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SiteLink } from '../components/content/SiteLink'
import { links } from '../content/links'
import { contactMeta } from '../content/meta'

const groups = [
  {
    title: 'Email',
    items: [
      { label: links.emailAddress, href: links.email, note: 'The address published with X, LinkedIn, and Discord.' },
    ],
  },
  {
    title: 'Social',
    items: [
      { label: 'X · Artiore', href: links.x, note: 'https://x.com/Artiore' },
      { label: 'LinkedIn · ARTIore', href: links.linkedinCompany, note: 'https://www.linkedin.com/company/artiore/' },
      { label: 'LinkedIn · Zain Ul Abdin', href: links.linkedinZain, note: 'https://linkedin.com/in/zain-ul-abdin-artiore' },
      { label: 'Discord', href: links.discord, note: 'https://discord.gg/ZTFDuuAmB' },
      { label: 'Instagram · artiore.consortium', href: links.instagram, note: 'https://instagram.com/artiore.consortium' },
      { label: 'Instagram · mypapabigger', href: links.instagramSecond, note: 'https://instagram.com/mypapabigger' },
    ],
  },
  {
    title: 'Ecosystem',
    items: [
      { label: 'artiore.com', href: links.artiore, note: 'The reasoning platform.' },
      { label: 'Try ARTIore', href: links.artioreTry, note: 'The live reasoning page.' },
      { label: 'Artiore Consortium', href: links.consortium, note: 'The consortium network. Its own domain is not published yet.' },
      { label: 'GitHub · ARTIore', href: links.github, note: 'https://github.com/ARTIore' },
      { label: 'This site’s source', href: links.githubSite, note: 'Artiore.github.io' },
      { label: 'Play Eternia', href: links.eternia, note: 'Local-first instrument in the browser.' },
      { label: 'Eternia source', href: links.githubEternia, note: 'github.com/ARTIore/eternia-aurofa-soverign-engine' },
      { label: 'Prompt Framework V1.1', href: links.frameworkHtml, note: 'Hosted on this domain at /framework.html.' },
    ],
  },
]

export default function ContactPage() {
  return (
    <>
      <SeoHead
        crumbName={contactMeta.crumbName}
        description={contactMeta.description}
        kind={contactMeta.kind}
        path={contactMeta.path}
        title={contactMeta.headTitle}
      />
      <Breadcrumbs current={contactMeta.crumbName} path={contactMeta.path} />
      <article className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Contact</p>
        <h1 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">Reach ARTIore</h1>
        <p className="mt-5 text-lg leading-relaxed text-cream/90">
          There is no demo login on this site. Write, or use the live pages below. Access on artiore.com is described
          as full access to the reasoning engine, the protocol, the doctrine, and the companion — not a private
          credential.
        </p>
        <div className="mt-10 space-y-10">
          {groups.map((group) => (
            <section key={group.title}>
              <h2 className="font-serif text-2xl text-gold-bright">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li className="rounded-2xl border border-gold/20 p-4" key={item.href}>
                    <SiteLink className="text-lg text-cream underline decoration-gold/40 underline-offset-4" href={item.href}>
                      {item.label}
                    </SiteLink>
                    <p className="mt-1 break-all text-sm leading-relaxed text-muted">{item.note}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </article>
    </>
  )
}
