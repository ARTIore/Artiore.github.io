import type { TodoStats as TodoStatsType } from '../../types/todo'

type TodoStatsProps = {
  stats: TodoStatsType
}

export function TodoStats({ stats }: TodoStatsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <p className="text-xs uppercase tracking-wider text-slate-400">Total</p>
        <p className="mt-1 text-2xl font-semibold text-white">{stats.total}</p>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <p className="text-xs uppercase tracking-wider text-slate-400">Completed</p>
        <p className="mt-1 text-2xl font-semibold text-teal-200">{stats.completed}</p>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <p className="text-xs uppercase tracking-wider text-slate-400">Pending</p>
        <p className="mt-1 text-2xl font-semibold text-amber-200">{stats.pending}</p>
      </div>
    </div>
  )
}
