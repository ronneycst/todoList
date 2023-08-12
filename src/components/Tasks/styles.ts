import { styled } from "styled-components";

export const TasksContainer = styled.section`
    width: 100%;
    max-width: 46rem;
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 5.625rem;
    padding: 0 ;
    
`
export const TasksHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;

    div{
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }

    span{
        background: ${props => props.theme["gray-400"]};
        color: ${props => props.theme["gray-200"]};
        padding: 3px 9px;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: 700;
    }
`
export const TaskList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top : 1.5rem ;
`

export const PurpleParagraph = styled.p`
    font-weight: bold;
    color: ${props => props.theme.purple};
`
export const BlueParagraph = styled.p`
    font-weight: bold;
    color: ${props => props.theme.blue};
    font-size: 0.875rem;
    gap: 0.8rem;
    
`