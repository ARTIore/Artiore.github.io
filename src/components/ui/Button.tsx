import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'ghost'

type CommonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
}

type LinkButtonProps = CommonProps & { to: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>
type NativeButtonProps = CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

function styles(variant: Variant) {
  return cn(
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition duration-300',
    variant === 'primary'
      ? 'bg-teal-400/90 text-black hover:bg-teal-300'
      : 'border border-white/20 bg-white/5 text-white hover:border-teal-300/50 hover:bg-white/10',
  )
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const variant = props.variant ?? 'primary'
  if ('to' in props) {
    const { children, className, to, ...rest } = props
    return (
      <Link to={to} className={cn(styles(variant), className)} {...rest}>
        {children}
      </Link>
    )
  }

  const { children, className, ...rest } = props
  return (
    <button className={cn(styles(variant), className)} {...rest}>
      {children}
    </button>
  )
}
