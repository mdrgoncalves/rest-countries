import * as S from './styles';

interface CountryProps {
    name: string;
    population: number;
    region: string;
    capital: string | undefined;
    flags: {
        svg: string;
        png: string;
    }
}

export const Country: React.FC<CountryProps> = ({
    name,
    population,
    region,
    capital,
    flags
}) => {

    const countryName = name.toLowerCase().replace(/\s+/g, "");

    return (
        <S.Container
            to={{ pathname: `/country/${countryName}` }}
        >
            <img src={flags.svg} alt={`${name} flag`} />
            <S.Details>
                <h2>{name}</h2>
                <div>
                    <p><b>Population:</b> {population.toLocaleString()}</p>
                    <p><b>Region:</b> {region}</p>
                    {capital
                        ? <p><b>Capital:</b> {capital}</p>
                        : <p><b>Capital:</b> Unknown</p>
                    }
                </div>
            </S.Details>
        </S.Container>
    )
}