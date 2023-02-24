import { ReactNode, ButtonHTMLAttributes } from 'react';

import * as S from './styles';
import { BsArrowLeft } from 'react-icons/bs';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    backIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    backIcon: useBack,
    ...rest
}) => {

    return (
        <S.Button
            {...rest}
        >
            {useBack && <BsArrowLeft />}
            {children}
        </S.Button>
    )
}