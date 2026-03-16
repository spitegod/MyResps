import { useState } from "react"
import "./App.css"
import { CreateTask } from "./components/CreateTask"
import { Task } from "./components/Task"

export type TaskItem = {
  task: string
}

function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([])

  const onCreateTask = (task: string) => {
    const trimmedTask = task.trim()

    if (!trimmedTask) {
      return
    }

    setTasks((prevTasks) => [...prevTasks, { task: trimmedTask }])
  }

  const onDeleteTask = (indexToDelete: number) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToDelete),
    )
  }

  return (
    <>
      <h1>MyResps</h1>
      <p>Create your task</p>
      <CreateTask onCreateTask={onCreateTask} />
      <h2>Created Tasks</h2>
      {tasks.map((taskItem, index) => (
        <Task
          key={`${taskItem.task}-${index}`}
          task={taskItem}
          onDelete={() => onDeleteTask(index)}
        />
      ))}
    </>
  )
}

export default App
