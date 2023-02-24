import styled from "styled-components";

export const Header = styled.header `

    background: ${props => props.theme.colors.elements};
    box-shadow: ${props => props.theme.colors.boxShadow};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.text};
    }

    h1, button {
        font-size: 1rem;
    }

    h1 {
        font-weight: 800;
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: transparent;
        border: none;
        font-weight: 600;
    }

    @media screen and (min-width: 768px) {
        padding: 1.5rem 3.5rem;
    }
`;

