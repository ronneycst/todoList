import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import {useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';

export interface TaskProps{
  description: string,
  id:  string,
  completed: boolean
}

export function App() {
  const[tasks,setTasks] = useState<TaskProps[]>([ ])

  const handleTaskAddtion = (taskTitle: string) => {
    console.log(taskTitle)

    const newTask = [...tasks,{
       description:taskTitle,
       id: uuidv4(),
       completed: false
    }]
    setTasks(newTask)
  }
  
  const handleRemoveTask = (taskId: string) =>{
    console.log(taskId)
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks)
  }

  const handleCompleteTask = (taskId: string) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };
  
  useEffect(() =>{
    calcTaskCompleted();
  },[tasks])

  const [tasksCompleted, setTasksCompleted] = useState<TaskProps[]>([])

  const calcTaskCompleted = () => {
    setTasksCompleted(tasks.filter((task) => task.completed === true))
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
        <Header handleTaskAddtion={handleTaskAddtion}/>
        <Tasks handleRemoveTask={handleRemoveTask} tasks={tasks} handleCompleteTask={handleCompleteTask} tasksCompleted={tasksCompleted}/>
    </ThemeProvider>
  )
}
