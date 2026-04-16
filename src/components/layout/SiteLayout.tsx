import { NavLink, Outlet } from 'react-router-dom'
import { navItems } from '../../content/navigation'
import { useLocale } from '../../context/useLocale'

export function SiteLayout() {
  const { locale, setLocale, copy } = useLocale()

  return (
    <div className="min-h-screen bg-[#05080f] text-[#f5f7fb]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(13,148,136,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(212,175,55,0.14),transparent_30%),linear-gradient(#05080f,#05080f)]" />
      <header className="relative z-10 border-b border-white/10 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="text-sm tracking-[0.25em] text-teal-300/70">{copy.siteTitle}</p>
            <p className="text-xs text-slate-400">{copy.tagline}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className={`rounded-full border px-3 py-1 text-xs ${locale === 'en' ? 'border-teal-300 text-teal-200' : 'border-white/30 text-slate-300'}`}
              onClick={() => setLocale('en')}
              type="button"
            >
              EN
            </button>
            <button
              className={`rounded-full border px-3 py-1 text-xs ${locale === 'fr' ? 'border-teal-300 text-teal-200' : 'border-white/30 text-slate-300'}`}
              onClick={() => setLocale('fr')}
              type="button"
            >
              FR
            </button>
          </div>
        </div>
        <nav className="mx-auto flex w-full max-w-7xl gap-2 overflow-x-auto px-6 pb-4 text-sm">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `rounded-full border px-3 py-1 transition ${
                  isActive
                    ? 'border-teal-300/70 bg-teal-400/10 text-teal-100'
                    : 'border-white/10 text-slate-300 hover:border-white/30 hover:text-white'
                }`
              }
              key={item.key}
              to={item.path}
            >
              {copy.nav[item.key]}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 text-sm text-slate-300">
          <p className="font-medium text-white">{copy.siteTitle}</p>
          <p className="max-w-4xl leading-relaxed text-slate-400">{copy.footerStatement}</p>
        </div>
      </footer>
    </div>
  )
}
