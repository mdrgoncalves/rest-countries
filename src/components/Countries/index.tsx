import { useEffect, useState } from 'react';
import data from '../../../data/data.json';

import * as S from './styles';
import { Country } from './Country';

interface CountriesProps {
    search: string;
    filter: string;
}

export const Countries: React.FC<CountriesProps> = ({
    search,
    filter
}) => {

    const [countries, setCountries] = useState(data);

    useEffect(() => {
        let filteredData = data;

        if (filter !== 'Filter') {
            filteredData = filteredData.filter(country => 
                country.region === filter
            );
        }

        if (search) {
            filteredData = filteredData.filter(country => 
                country.name
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );
        }

        setCountries(filteredData);
    }, [search, filter]);
    
    return (
        <S.Countries>
            {countries.map(({ name, population, region, capital, flags }, index) => (
                <Country
                    key={index}
                    name={name}
                    population={population}
                    region={region}
                    capital={capital}
                    flags={flags}
                />
            ))}
        </S.Countries>
    )
}