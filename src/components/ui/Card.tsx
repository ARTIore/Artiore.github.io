import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <article className={cn('rounded-2xl border border-white/10 bg-zinc-900/70 p-6 shadow-[0_0_60px_-30px_rgba(45,212,191,0.45)]', className)}>
      {children}
    </article>
  )
}
