import { createContext } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

import usePersistedState from "../utils/usePersistedState";

export const ThemeContext = createContext({} as any);

export const ThemeContextProvider = ({ children }: any) => {

    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}