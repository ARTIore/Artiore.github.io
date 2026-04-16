import { Link, NavLink } from 'react-router-dom'
import { primaryNav } from '../../content/site'
import { cn } from '../../lib/cn'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link to="/" className="text-sm font-semibold tracking-[0.2em] text-white">
          ARTIore
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {primaryNav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'text-xs uppercase tracking-[0.16em] text-zinc-400 transition hover:text-zinc-200',
                  isActive && 'text-teal-200',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
