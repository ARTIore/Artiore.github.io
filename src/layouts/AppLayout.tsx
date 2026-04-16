import { Outlet } from 'react-router-dom'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(251,191,36,0.1),transparent_40%),linear-gradient(to_bottom,#030303,#09090b)]" />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
