import type { TodoFilter } from '../../types/todo'

type TodoFiltersProps = {
  currentFilter: TodoFilter
  onFilterChange: (filter: TodoFilter) => void
}

const filters: Array<{ label: string; value: TodoFilter }> = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
]

export function TodoFilters({ currentFilter, onFilterChange }: TodoFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          className={`rounded-full border px-3 py-1 text-sm transition ${
            currentFilter === filter.value
              ? 'border-teal-300/80 bg-teal-400/10 text-teal-100'
              : 'border-white/20 text-slate-300 hover:border-white/40 hover:text-white'
          }`}
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          type="button"
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
