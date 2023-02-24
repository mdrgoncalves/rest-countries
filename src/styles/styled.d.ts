import 'styled-components';

declare module 'styled-components' {

    export interface DefaultTheme {
        title: string;

        colors: {
            background: string;
            elements: string;
            text: string;
            input: string;
            boxShadow: string;
        }
    }
}