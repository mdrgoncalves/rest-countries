import styled from "styled-components";

export const Detail = styled.div`

    padding: 2rem 1.5rem;

    h2 {
        margin: 0rem 0 1.5rem 0;
    }

    @media screen and (min-width: 992px) {
        padding: 3.5rem;
    }
`

export const ContentWrapper = styled.div`

    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    img {
        width: 100%;
        min-height: 60vw;
    }

    @media screen and (min-width: 992px) {
        display: grid;
        grid-template-columns: min-content 1fr;
        column-gap: 7rem;

        img {
            width: 35vw;
            min-height: 25vw;
        }
    }
`

export const DetailsWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 2rem;

    p {
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
    }

    @media screen and (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, min-content);
        margin-top: 2rem;

        & div:first-child {
            grid-area: 1 / 1 / 1 / 1;
        }

        & div:nth-child(2) {
            grid-area: 1 / 2 / 1 / 2;
            align-self: center;
        }

        & div:nth-child(3) {
            grid-area: 2 / 1 / 2 / 2;
            grid-column: span 2;
        }
    }
`

export const BordersFlex = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
`