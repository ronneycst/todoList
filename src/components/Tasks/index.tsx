import { Task } from "../Task";
import { BlueParagraph, PurpleParagraph, TaskList, TasksContainer, TasksHeader } from "./styles";

interface Task{
    id:string,
    description:string,
    completed: boolean
}
interface Props{
    handleRemoveTask: (id:string) => void
    tasks: Task[]
    handleCompleteTask:(taskId: string) =>void
    tasksCompleted: Task[]
}

export function Tasks({tasks,handleRemoveTask,handleCompleteTask,tasksCompleted}: Props){
     
    return(
        <TasksContainer>
            <TasksHeader>
                <div>
                    <BlueParagraph>Tarefas criadas</BlueParagraph>
                    <span >{tasks && tasks.length}</span>
                    </div>
                <div>
                <PurpleParagraph>Concluídas</PurpleParagraph>
                    <span>{tasksCompleted && tasksCompleted.length} de {tasks &&tasks.length}</span>
                </div>
            </TasksHeader>
            <TaskList>
                {tasks && tasks.map((task) => {
                        return(
                            <Task key={task.id} task={task} handleRemoveTask= {handleRemoveTask} handleCompleteTask={handleCompleteTask}/> 
                        )
                    }
                )}
            </TaskList>
        </TasksContainer>
    )
}