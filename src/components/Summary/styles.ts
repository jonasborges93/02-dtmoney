import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    @media screen and (max-width: 1024px){
        grid-template-columns: repeat(1,1fr);
    }

    @media screen and (max-width:768px){
        gap: 1rem;
    }

    div{
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            line-height: 3rem;
            font-weight: 500;
        }

        &:last-child{
            background-color: var(--green);
            color: #fff;
        }
    }
`;