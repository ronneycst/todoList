import { ButtonCreateNewTask, HeaderContainer, NewTaskFormContainer, NewTaskInput } from "./styles";
import Logo from '../../assets/logo.svg'
import { PlusCircle } from "phosphor-react";
import {useState,ChangeEvent} from 'react'

interface Props{
    handleTaskAddtion: (title: string) => void
}
export function Header({handleTaskAddtion} : Props){

    const [inputData,setInputData] = useState('')

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setInputData(e.target.value)
    }

    const handleAddTaskClick = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (inputData.trim() === '') {
            return
        }
        
        handleTaskAddtion(inputData)
        setInputData("")
    }

    return(
        <HeaderContainer>
            <img src={Logo} alt="ignite" />
            <NewTaskFormContainer onSubmit={handleAddTaskClick}>
                <NewTaskInput value={inputData} placeholder="Adicione uma nova tarefa" onChange={handleInputChange}/>
                <ButtonCreateNewTask type="submit">
                    Criar
                    <PlusCircle size={24} />
                </ButtonCreateNewTask>
            </NewTaskFormContainer>
        </HeaderContainer>
    )
}