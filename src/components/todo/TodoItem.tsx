import type { TodoTask } from '../../types/todo'
import { useTodoActions } from './TodoContext'

type TodoItemProps = {
  isEditing: boolean
  task: TodoTask
}

export function TodoItem({ isEditing, task }: TodoItemProps) {
  const { onDelete, onStartEdit, onToggleComplete } = useTodoActions()

  return (
    <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <input
            checked={task.completed}
            className="mt-1 size-4 accent-teal-400"
            onChange={() => onToggleComplete(task.id)}
            type="checkbox"
          />
          <div>
            <p className={`text-base font-medium ${task.completed ? 'text-slate-400 line-through' : 'text-white'}`}>
              {task.title}
            </p>
            {task.description && (
              <p className={`mt-1 text-sm ${task.completed ? 'text-slate-500' : 'text-slate-300'}`}>{task.description}</p>
            )}
          </div>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            className="rounded-lg border border-white/20 px-3 py-1 text-xs text-slate-200 transition hover:border-white/40 hover:text-white"
            onClick={() => onStartEdit(task.id)}
            type="button"
          >
            {isEditing ? 'Editing' : 'Edit'}
          </button>
          <button
            className="rounded-lg border border-rose-300/30 px-3 py-1 text-xs text-rose-200 transition hover:border-rose-300/50"
            onClick={() => onDelete(task.id)}
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}
