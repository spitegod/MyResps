import type { TaskItem } from "../App"

type TaskProps = {
  task: TaskItem
  onDelete: () => void
}

export function Task({ task, onDelete }: TaskProps) {
  return (
    <div>
      <p>{task.task}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}
