import styled from "styled-components";

export const Input = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 1.5rem;
    width: 100%;
    height: 2rem;
    box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.06);
    background: ${props => props.theme.colors.elements};
    border-radius: 0.25rem;

    input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        padding: 1rem 0;

        &:focus {
            outline: none;
        }
    }

    @media screen and (min-width: 768px) {
        width: 35%;
    }
`