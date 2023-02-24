import { SelectHTMLAttributes } from 'react';

import * as S from './styles';

interface FilterProps extends SelectHTMLAttributes<HTMLSelectElement> {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const Filter: React.FC<FilterProps> = ({
    filter,
    setFilter,
    ...rest
}) => {

    const filterLabels = {
        Africa: "Africa",
        Americas: "Americas",
        Asia: "Asia",
        Europe: "Europe",
        Oceania: "Oceania"
    }
    
    return (
        <S.Select>
            <select
                defaultValue={filter}
                onChange={e => setFilter(e.target.value)}
                {...rest}
            >
                <option 
                    value="Filter" 
                    disabled 
                    hidden
                >
                    Filter by Region
                </option>
                {Object.entries(filterLabels).map(([value, label]) => (
                    <option
                        key={value}
                        value={value}
                    >
                        {label}
                    </option>
                ))}
            </select>
        </S.Select>
    )
}