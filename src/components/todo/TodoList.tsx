import { TodoItem } from './TodoItem'
import type { TodoTask } from '../../types/todo'

type TodoListProps = {
  editingTaskId: string | null
  tasks: TodoTask[]
}

export function TodoList({ editingTaskId, tasks }: TodoListProps) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-white/20 p-8 text-center text-slate-400">
        No tasks in this filter yet.
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TodoItem isEditing={task.id === editingTaskId} key={task.id} task={task} />
      ))}
    </ul>
  )
}
