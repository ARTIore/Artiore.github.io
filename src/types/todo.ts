export type TodoFilter = 'all' | 'active' | 'completed'

export interface TodoTask {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: string
  updatedAt: string
}

export interface TodoStats {
  total: number
  completed: number
  pending: number
}
