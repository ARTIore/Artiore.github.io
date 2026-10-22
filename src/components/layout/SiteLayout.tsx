import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { links } from '../../content/links'
import { footerPages, primaryNav, type NavLinkItem } from '../../content/navigation'
import { normalizePath, toPublicPath } from '../../content/urls'
import { SiteLink } from '../content/SiteLink'

const linkClass =
  'inline-flex min-h-11 items-center whitespace-nowrap rounded-full border px-3 py-2 text-sm transition'

function itemClass(active: boolean) {
  return `${linkClass} ${
    active
      ? 'border-gold bg-gold/15 text-gold-bright'
      : 'border-white/10 text-cream/80 hover:border-gold/40 hover:text-cream'
  }`
}

function NavAnchor({ item, onClick }: { item: NavLinkItem; onClick?: () => void }) {
  if (item.href.endsWith('.html') || item.href.startsWith('http') || item.href.startsWith('mailto:')) {
    return (
      <SiteLink className={itemClass(false)} href={item.href} onClick={onClick}>
        {item.label}
      </SiteLink>
    )
  }
  return (
    <NavLink className={({ isActive }) => itemClass(isActive)} onClick={onClick} to={toPublicPath(item.href)}>
      {item.label}
    </NavLink>
  )
}

export function SiteLayout() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMenuPath, setOpenMenuPath] = useState(location.pathname)
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null)

  if (openMenuPath !== location.pathname) {
    setOpenMenuPath(location.pathname)
    setMenuOpen(false)
    setDesktopOpen(null)
  }

  useEffect(() => {
    if (!menuOpen && !desktopOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setDesktopOpen(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [desktopOpen, menuOpen])

  return (
    <div className="min-h-screen bg-ink text-cream">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        href="#main"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-40 border-b border-gold/20 bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <NavLink className="min-w-0" end to="/">
            <span className="block font-serif text-2xl tracking-[0.14em] text-gold">ARTIore</span>
            <span className="block text-xs text-muted">Clarity-first reasoning</span>
          </NavLink>
          <button
            aria-controls="site-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 items-center whitespace-nowrap rounded-full border border-gold/40 px-4 text-sm text-gold-bright xl:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        <nav aria-label="Primary" className="mx-auto hidden max-w-6xl items-center gap-1 px-6 pb-3 xl:flex">
          {primaryNav.map((item) => {
            if ('href' in item) {
              return <NavAnchor item={item} key={item.label} />
            }
            const childActive = item.children.some((child) => normalizePath(child.href) === normalizePath(location.pathname))
            const expanded = desktopOpen === item.label
            return (
              <div
                className="relative"
                key={item.label}
                onMouseEnter={() => setDesktopOpen(item.label)}
                onMouseLeave={() => setDesktopOpen(null)}
              >
                <button
                  aria-expanded={expanded}
                  aria-haspopup="true"
                  className={itemClass(childActive || expanded)}
                  onClick={() => setDesktopOpen(expanded ? null : item.label)}
                  type="button"
                >
                  {item.label}
                </button>
                {expanded ? (
                  <div className="absolute left-0 top-full z-20 min-w-64 pt-2" role="group" aria-label={item.label}>
                    <div className="rounded-2xl border border-gold/30 bg-ink-2 p-2 shadow-2xl">
                      {item.children.map((child) => (
                        <div key={child.href}>
                          <NavAnchor item={child} onClick={() => setDesktopOpen(null)} />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            )
          })}
        </nav>

        <nav
          aria-label="Primary"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-gold/20 px-4 py-4 xl:hidden"
          hidden={!menuOpen}
          id="site-menu"
        >
            <div className="space-y-5">
              {primaryNav.map((item) => {
                if ('href' in item) {
                  return (
                    <div key={item.label}>
                      <NavAnchor item={item} />
                    </div>
                  )
                }
                return (
                  <section key={item.label}>
                    <p className="px-1 text-xs uppercase tracking-[0.18em] text-gold">{item.label}</p>
                    <div className="mt-2 flex flex-col items-start gap-2">
                      {item.children.map((child) => (
                        <NavAnchor item={child} key={child.href} />
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>
          </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:py-16" id="main" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="border-t border-gold/20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-serif text-3xl text-gold">ARTIore</p>
            <p className="mt-3 font-serif text-lg text-gold-bright">Allah Alone is Enough.</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Clarity-first reasoning. The system is a witness, not a verdict. No magic in the system.
            </p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-gold">Pages</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {footerPages.map((item) => (
                <li key={item.href}>
                  <SiteLink className="inline-flex min-h-11 items-center text-cream/85 hover:text-gold-bright" href={item.href}>
                    {item.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-gold">Contact</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="inline-flex min-h-11 items-center break-all text-cream/85 hover:text-gold-bright" href={links.email}>
                  {links.emailAddress}
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center text-cream/85 hover:text-gold-bright" href={links.x} rel="noreferrer" target="_blank">
                  X · Artiore
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center text-cream/85 hover:text-gold-bright" href={links.linkedinCompany} rel="noreferrer" target="_blank">
                  LinkedIn · company
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center text-cream/85 hover:text-gold-bright" href={links.linkedinZain} rel="noreferrer" target="_blank">
                  LinkedIn · Zain Ul Abdin
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center text-cream/85 hover:text-gold-bright" href={links.discord} rel="noreferrer" target="_blank">
                  Discord
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center text-cream/85 hover:text-gold-bright" href={links.instagram} rel="noreferrer" target="_blank">
                  Instagram · ArtioreConsortium
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-gold">Ecosystem</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="inline-flex min-h-11 items-center text-cream/85 hover:text-gold-bright" href={links.artiore} rel="noreferrer" target="_blank">
                  artiore.com
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center text-cream/85 hover:text-gold-bright" href={links.artioreTry} rel="noreferrer" target="_blank">
                  Try ARTIore
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center text-cream/85 hover:text-gold-bright" href={links.consortium} rel="noreferrer" target="_blank">
                  artioreconsortium.com
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center text-cream/85 hover:text-gold-bright" href={links.eternia}>
                  Eternia Aurora Sovereign Engine
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center text-cream/85 hover:text-gold-bright" href={links.github} rel="noreferrer" target="_blank">
                  GitHub · ARTIore
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center break-all text-cream/85 hover:text-gold-bright" href={links.githubEternia} rel="noreferrer" target="_blank">
                  Eternia source
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="border-t border-white/10 px-4 py-6 text-center text-xs text-muted">
          © 2026 ARTIORE. Allah Alone is Enough.
        </p>
      </footer>
    </div>
  )
}
