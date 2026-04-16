import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24', className)}>
      {children}
    </section>
  )
}
