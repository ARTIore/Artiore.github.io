import type { ReactNode } from 'react'

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-amber-300/30 bg-amber-400/10 p-5 text-sm text-amber-100">
      {children}
    </div>
  )
}
