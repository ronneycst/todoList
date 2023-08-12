import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-700"]};
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
    height: 12.5rem;
    
    img{
        justify-content: center;
        margin-right: 10px;
    }
`
export const NewTaskFormContainer = styled.form`
    height: 3.375rem;
    width: 100%;
    max-width: 46rem;
    display: flex;
    gap: 0.5rem;
    padding: 0.1rem;
    position: absolute;
    bottom: calc(-3.375rem/2);

`
export const NewTaskInput = styled.input`
    background-color: ${props => props.theme["gray-500"]};
    color: ${props => props.theme["gray-100"]};
    height: 100%;
    flex: 1;
    border: 1px solid ${props => props.theme["gray-700"]};
    border-radius: 0.5rem;
    padding: 0 1rem;
    font-size: 1rem;
    
`
export const ButtonCreateNewTask = styled.button`
    background-color:${props => props.theme["blue-dark"]};
    color: ${props => props.theme["gray-100"]};
    border-radius: 0.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border: none;
    gap: 0.375rem;
    font-weight: 700;
    font-size: 0.875rem;
`