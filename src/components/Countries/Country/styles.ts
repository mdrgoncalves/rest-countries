import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`

    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.06);
    color: ${props => props.theme.colors.text};
    text-decoration: none;

    img {
        width: 100%;
        height: 165px;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        object-fit: cover;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
    }
`

export const Details = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: ${props => props.theme.colors.elements};
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    padding: 1.5rem 1rem 2rem 1.5rem;

    h2 {
        font-size: 1rem;
    }

    p {
        font-size: 0.875rem;
    }
`