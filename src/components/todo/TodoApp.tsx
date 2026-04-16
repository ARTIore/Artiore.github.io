import { useMemo, useRef, useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import type { TodoFilter, TodoStats, TodoTask } from '../../types/todo'
import { TodoActionsContext } from './TodoContext'
import { TodoFilters } from './TodoFilters'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { TodoStats as TodoStatsPanel } from './TodoStats'

function createTaskId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function isTodoTask(value: unknown): value is TodoTask {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const task = value as Record<string, unknown>
  return (
    typeof task.id === 'string' &&
    typeof task.title === 'string' &&
    typeof task.description === 'string' &&
    typeof task.completed === 'boolean' &&
    typeof task.createdAt === 'string' &&
    typeof task.updatedAt === 'string'
  )
}

export function TodoApp() {
  const [tasks, setTasks] = useLocalStorage<TodoTask[]>('todo.tasks.v1', [])
  const [filter, setFilter] = useState<TodoFilter>('all')
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null)
  const [importError, setImportError] = useState<string>('')
  const importInputRef = useRef<HTMLInputElement | null>(null)

  const editingTask = useMemo(
    () => tasks.find((task) => task.id === editingTaskId) ?? null,
    [editingTaskId, tasks],
  )

  const filteredTasks = useMemo(
    () =>
      tasks.filter((task) => {
        if (filter === 'active') {
          return !task.completed
        }

        if (filter === 'completed') {
          return task.completed
        }

        return true
      }),
    [filter, tasks],
  )

  const stats = useMemo<TodoStats>(
    () => ({
      total: tasks.length,
      completed: tasks.filter((task) => task.completed).length,
      pending: tasks.filter((task) => !task.completed).length,
    }),
    [tasks],
  )

  const handleSubmitTask = (title: string, description: string) => {
    setImportError('')

    if (editingTask) {
      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === editingTask.id
            ? {
                ...task,
                title,
                description,
                updatedAt: new Date().toISOString(),
              }
            : task,
        ),
      )
      setEditingTaskId(null)
      return
    }

    const now = new Date().toISOString()
    setTasks((currentTasks) => [
      {
        id: createTaskId(),
        title,
        description,
        completed: false,
        createdAt: now,
        updatedAt: now,
      },
      ...currentTasks,
    ])
  }

  const onToggleComplete = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
    )
  }

  const onDelete = (id: string) => {
    if (!window.confirm('Delete this task?')) {
      return
    }

    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
    setEditingTaskId((currentId) => (currentId === id ? null : currentId))
  }

  const onStartEdit = (id: string) => {
    setImportError('')
    setEditingTaskId(id)
  }

  const clearCompleted = () => {
    setTasks((currentTasks) => currentTasks.filter((task) => !task.completed))
    setEditingTaskId((currentId) =>
      currentId && tasks.some((task) => task.id === currentId && task.completed) ? null : currentId,
    )
  }

  const exportTasks = () => {
    const payload = JSON.stringify(tasks, null, 2)
    const blob = new Blob([payload], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `todo-backup-${new Date().toISOString().slice(0, 10)}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const importTasks = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    try {
      const text = await file.text()
      const parsed = JSON.parse(text) as unknown

      if (!Array.isArray(parsed) || !parsed.every(isTodoTask)) {
        setImportError('Invalid backup format. Please select a valid todo export file.')
        return
      }

      setTasks(parsed)
      setEditingTaskId(null)
      setImportError('')
    } catch {
      setImportError('Could not import file. Please ensure it is valid JSON.')
    } finally {
      if (importInputRef.current) {
        importInputRef.current.value = ''
      }
    }
  }

  return (
    <section className="mx-auto w-full max-w-4xl space-y-6">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-teal-300/80">Productivity</p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">To-Do List</h1>
        <p className="max-w-2xl text-slate-300">
          Add, organize, and track your tasks. Your data is saved automatically in your browser.
        </p>
      </header>

      <TodoForm
        key={editingTask?.id ?? 'new'}
        initialDescription={editingTask?.description}
        initialTitle={editingTask?.title}
        isEditing={Boolean(editingTask)}
        onCancelEdit={() => setEditingTaskId(null)}
        onSubmit={handleSubmitTask}
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <TodoFilters currentFilter={filter} onFilterChange={setFilter} />
        <div className="flex flex-wrap gap-2">
          <button
            className="rounded-lg border border-white/20 px-3 py-2 text-xs text-slate-200 transition hover:border-white/40 hover:text-white"
            onClick={exportTasks}
            type="button"
          >
            Export
          </button>
          <label className="cursor-pointer rounded-lg border border-white/20 px-3 py-2 text-xs text-slate-200 transition hover:border-white/40 hover:text-white">
            Import
            <input
              accept="application/json"
              className="hidden"
              onChange={importTasks}
              ref={importInputRef}
              type="file"
            />
          </label>
          <button
            className="rounded-lg border border-rose-300/30 px-3 py-2 text-xs text-rose-200 transition hover:border-rose-300/50 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={stats.completed === 0}
            onClick={clearCompleted}
            type="button"
          >
            Clear Completed
          </button>
        </div>
      </div>

      {importError && <p className="rounded-lg border border-rose-300/30 bg-rose-400/10 p-3 text-sm text-rose-200">{importError}</p>}

      <TodoStatsPanel stats={stats} />

      <TodoActionsContext.Provider value={{ onDelete, onStartEdit, onToggleComplete }}>
        <TodoList editingTaskId={editingTaskId} tasks={filteredTasks} />
      </TodoActionsContext.Provider>
    </section>
  )
}
