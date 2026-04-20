import { useState } from 'react'

type TodoFormProps = {
  initialDescription?: string
  initialTitle?: string
  isEditing: boolean
  onCancelEdit: () => void
  onSubmit: (title: string, description: string) => void
}

export function TodoForm({
  initialDescription = '',
  initialTitle = '',
  isEditing,
  onCancelEdit,
  onSubmit,
}: TodoFormProps) {
  const [title, setTitle] = useState(initialTitle)
  const [description, setDescription] = useState(initialDescription)
  const [error, setError] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const normalizedTitle = title.trim()
    if (!normalizedTitle) {
      setError('Task title is required.')
      return
    }

    setError('')
    onSubmit(normalizedTitle, description.trim())

    if (!isEditing) {
      setTitle('')
      setDescription('')
    }
  }

  return (
    <form className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4" onSubmit={handleSubmit}>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-200" htmlFor="todo-title">
          Title
        </label>
        <input
          className="w-full rounded-lg border border-white/20 bg-[#0a0f18] px-3 py-2 text-slate-100 outline-none transition focus:border-teal-300"
          id="todo-title"
          maxLength={120}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="What needs to be done?"
          value={title}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-200" htmlFor="todo-description">
          Description (optional)
        </label>
        <textarea
          className="w-full rounded-lg border border-white/20 bg-[#0a0f18] px-3 py-2 text-slate-100 outline-none transition focus:border-teal-300"
          id="todo-description"
          maxLength={300}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Add context for this task"
          rows={3}
          value={description}
        />
      </div>

      {error && <p className="text-sm text-rose-300">{error}</p>}

      <div className="flex flex-wrap gap-2">
        <button
          className="rounded-lg border border-teal-300/60 bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-100 transition hover:bg-teal-400/20"
          type="submit"
        >
          {isEditing ? 'Save Task' : 'Add Task'}
        </button>

        {isEditing && (
          <button
            className="rounded-lg border border-white/25 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/40 hover:text-white"
            onClick={onCancelEdit}
            type="button"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}
