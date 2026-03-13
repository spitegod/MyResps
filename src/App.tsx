import { useState } from "react"

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<{ task: string }[]>([])

  const onCreateBtnHandler = () => {
    setTasks([...tasks, { task }])
    setTask('')
  }

  return (
    <>
      <h1>MyResps</h1>
      <p>Create your task</p>
      <div>
        <input id='input_task' placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)}></input>
        <button onClick={onCreateBtnHandler}>Create</button>
      </div>
      <h2>Created Tasks</h2>
      {tasks.map((taskItem, index) => (
        <div key={index}>
          <p>{taskItem.task}</p>
        </div>
      ))}
    </>
  )
}

export default App
