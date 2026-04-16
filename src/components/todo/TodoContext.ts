import { createContext, useContext } from 'react'

type TodoActionsContextValue = {
  onDelete: (id: string) => void
  onStartEdit: (id: string) => void
  onToggleComplete: (id: string) => void
}

export const TodoActionsContext = createContext<TodoActionsContextValue | null>(null)

export function useTodoActions() {
  const context = useContext(TodoActionsContext)

  if (!context) {
    throw new Error('useTodoActions must be used within TodoApp')
  }

  return context
}
