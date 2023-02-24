import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Nunito Sans', sans-serif;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        scroll-behavior: smooth;
    }

    input, textarea, select, button {
        font-family: 'Nunito Sans', sans-serif;
        color: ${props => props.theme.colors.text};

        &::placeholder {
            color: ${props => props.theme.colors.text};
        }
    }

    button {
        cursor: pointer;
    }
`