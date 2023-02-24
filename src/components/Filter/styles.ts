import styled from "styled-components";

export const Select = styled.div`

    padding: 0rem 1rem;
    box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.06);
    border-radius: 0.25rem;
    background: ${props => props.theme.colors.elements};
    width: 50%;

    select {
        border: none;
        background: transparent;
        width: 100%;
        padding: 0.875rem 0;

        &:focus {
            outline: none;
        }

        & option {
            background: ${props => props.theme.colors.elements};
        }
    }

    @media screen and (min-width: 768px) {
        width: 15%;
    }
`;