import styled from "styled-components";

export const Home = styled.div`

    padding: 1.5rem 1rem;

    @media screen and (min-width: 768px) {
        padding: 2.5rem 3.5rem;
    }
`

export const Inputs = styled.div`

    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-bottom: 2.5rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`