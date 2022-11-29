import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width:768px){
        flex-wrap: wrap;
        align-items: flex-start;
        flex-direction: column;

        padding: 2rem 1rem 10rem;
    }

    button{
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;

        @media screen and (max-width:768px){
            margin-top: 3rem;
        }

        &:hover{
            filter: brightness(0.9);
        }
    }
`;