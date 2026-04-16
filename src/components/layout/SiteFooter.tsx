import { Link } from 'react-router-dom'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 md:px-10">
        <p className="max-w-2xl text-balance text-lg text-white">See what the world doesn't show you.</p>
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-zinc-400">
          <span>ARTIore · Human intuition + AI precision</span>
          <Link to="/access" className="text-teal-200 hover:text-teal-100">
            Access / Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
