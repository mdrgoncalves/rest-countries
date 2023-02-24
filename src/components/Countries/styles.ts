import styled from "styled-components";

export const Countries = styled.div`

    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin: 0 2rem;

    @media screen and (min-width: 768px) {
        margin: 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 3.5rem;
    }

    @media screen and (min-width: 1300px) {
        grid-template-columns: repeat(6, 1fr);
    }
`