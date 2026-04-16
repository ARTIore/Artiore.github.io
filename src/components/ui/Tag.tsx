import type { ReactNode } from 'react'

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-teal-300/40 bg-teal-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-teal-200">
      {children}
    </span>
  )
}
