import { useNavigate, useParams } from 'react-router-dom';

import * as S from './styles';

import data from '../../../data/data.json';

import { Button } from "../../components/Button"
import { useEffect } from 'react';

export const Detail: React.FC = () => {

    const navigate = useNavigate();
    const { name } = useParams();

    const country = data.find(
        country => country.name.toLowerCase().replace(/\s+/g, "") === name
    );

    const {
        name: countryName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
        flags,
        nativeName
    } = country!;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <S.Detail>
            <Button
                backIcon
                onClick={() => navigate(-1)}
            >
                Back
            </Button>
            <S.ContentWrapper>
                <img src={flags.svg} alt={`${countryName} flag`} />
                <S.DetailsWrapper>
                    <div>
                        <h2>{countryName}</h2>
                        <p><b>Native Name:</b> {nativeName}</p>
                        <p><b>Population:</b> {population.toLocaleString()}</p>
                        <p><b>Region:</b> {region}</p>
                        <p><b>Sub Region:</b> {subregion}</p>
                        <p><b>Capital:</b> {capital}</p>
                    </div>
                    <div>
                        <p><b>Top Level Domain:</b> {topLevelDomain}</p>
                        <p><b>Currencies:</b> {currencies?.map(currency => currency.name).join(", ")}</p>
                        <p><b>Languages:</b> {languages.map(language => language.name).join(", ")}</p>
                    </div>
                    <div>
                        <p><b>Border Countries:</b></p>
                        {borders ? (
                            <S.BordersFlex>
                                {borders.map((border) => {
                                    const borderCountry = data.find(country => country.alpha3Code === border);
                                    if (!borderCountry) return null;
                                    return (
                                        <Button
                                            key={borderCountry.name}
                                            onClick={
                                                () => navigate(`/country/${borderCountry.name.toLowerCase().replace(/\s+/g, "")}`)
                                            }
                                        >
                                            {borderCountry.name}
                                        </Button>
                                    );
                                })}
                            </S.BordersFlex>
                        ) : (
                            <p>None</p>
                        )}
                    </div>
                </S.DetailsWrapper>
            </S.ContentWrapper>
        </S.Detail>
    )
}