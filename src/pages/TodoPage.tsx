import { TodoApp } from '../components/todo/TodoApp'
import { SeoHead } from '../components/seo/SeoHead'

export default function TodoPage() {
  return (
    <>
      <SeoHead description="A persistent to-do list with filtering and task tracking." path="/todo" title="Todo" />
      <TodoApp />
    </>
  )
}
