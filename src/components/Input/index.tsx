import { InputHTMLAttributes } from 'react';

import * as S from './styles';
import { RxMagnifyingGlass } from 'react-icons/rx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const Input: React.FC<InputProps> = ({ 
    search,
    setSearch,
    ...rest 
}: InputProps) => {

    return (
        <S.Input>
            <RxMagnifyingGlass 
                size={20}
            />
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                {...rest}
            />
        </S.Input>
    )
}