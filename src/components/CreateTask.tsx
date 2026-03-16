import { useState } from "react"

type CreateTaskProps = {
  onCreateTask: (task: string) => void
}

export function CreateTask({ onCreateTask }: CreateTaskProps) {
  const [task, setTask] = useState("")

  const onCreateBtnHandler = () => {
    onCreateTask(task)
    setTask("")
  }

  return (
    <div>
      <input
        id="input_task"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={onCreateBtnHandler}>Create</button>
    </div>
  )
}
