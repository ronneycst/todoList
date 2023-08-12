import {CheckCircle,Trash,Circle} from 'phosphor-react'
import { CheckBoxButton, DeleteButton, TaskContainer } from './styles'

interface Task{
    id: string,
    description: string,
    completed: boolean
}
interface TaskProps{
    task: Task
    handleRemoveTask: (taskId: string) => void,
    handleCompleteTask:(taskId: string) => void
}

export function Task({task,handleRemoveTask,handleCompleteTask}: TaskProps ){
    
    return(
        <TaskContainer>
            <CheckBoxButton variant={task.completed ? true : false} onClick={() => handleCompleteTask(task.id)}>
                {!task.completed ?<Circle size={24} /> : <CheckCircle size={24}/>} 
            </CheckBoxButton>
            <p>{task.description}</p>
            <DeleteButton onClick={() => handleRemoveTask(task.id)}>
                <Trash size={24}/>
            </DeleteButton>
        </TaskContainer>
    )
}