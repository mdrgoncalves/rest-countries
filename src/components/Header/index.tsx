import { useContext } from 'react';

import * as S from './styles';
import { BsMoon, BsMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {

    const { toggleTheme, theme } = useContext(ThemeContext);
    const { title } = theme;

    return (
        <S.Header>
            <Link to='/'>
                <h1>Where in the world?</h1>
            </Link>
            <button onClick={toggleTheme}>
                {title === 'light' ? <BsMoon /> : <BsMoonFill />}
                Dark Mode
            </button>
        </S.Header>
    )
}