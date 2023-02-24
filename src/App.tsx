import { RoutesApp } from './routes';

import GlobalStyle from './styles/global';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {

    return (
        <ThemeContextProvider>
            <GlobalStyle />
            <RoutesApp />
        </ThemeContextProvider>
    )
}

export default App
