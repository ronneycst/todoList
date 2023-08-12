import { css, styled } from "styled-components";

export const TaskContainer = styled.div`
    width: 100%;
    background: ${props => props.theme["gray-500"]};

    border: 1px solid ${props => props.theme["gray-400"]};
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    
    p{
        font-size: 0.875rem;
        line-height: 1.18rem;
        color: ${props => props.theme["gray-100"]};
        margin-right: auto;

    }
    
`

export const DeleteButton = styled.button`
    border: none;
    background: none;
    color: ${props => props.theme["gray-300"]};

`
interface CompletedTasksProps {
    variant: false | true
}

export const CheckBoxButton = styled.button<CompletedTasksProps>`
    border: none;
    background: none;
    color: ${props => props.theme.blue};

    ${(props) =>
    props.variant &&
    css`
      color: ${(props) => props.theme.green};
    `}
`