export function SignalMap() {
  return (
    <div aria-hidden className="grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-zinc-950/60 p-6">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="relative h-6">
          <span className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-teal-300" />
          <span className="absolute left-2 top-1/2 h-px w-[calc(100%-0.75rem)] -translate-y-1/2 bg-white/15" />
        </div>
      ))}
    </div>
  )
}
