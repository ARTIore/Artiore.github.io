export function SacredGeometry() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full border border-teal-300/20" />
      <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full border border-amber-300/20" />
      <div className="absolute left-1/2 top-28 h-48 w-48 -translate-x-1/2 rounded-full border border-white/15" />
    </div>
  )
}
