import styled from "styled-components";

export const Button = styled.button`

    background: ${props => props.theme.colors.elements};
    color: ${props => props.theme.colors.text};
    box-shadow: ${props => props.theme.colors.boxShadow};
    border-radius: 0.1rem;
    padding: 0.35rem 1.5rem;
    border: none;
    font-size: 0.875rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        background: ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.elements};
        font-weight: 600;
    }
`