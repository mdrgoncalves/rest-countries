import { useState } from 'react';

import * as S from './styles';

import { Input } from "../../components/Input"
import { Filter } from '../../components/Filter';
import { Countries } from '../../components/Countries';

export const Home: React.FC = () => {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("Filter");

    return (
        <S.Home>
            <S.Inputs>
                <Input
                    placeholder="Search for a country..."
                    search={search}
                    setSearch={setSearch}
                />
                <Filter 
                    filter={filter}
                    setFilter={setFilter}
                />
            </S.Inputs>
            <Countries 
                search={search}
                filter={filter}
            />
        </S.Home>
    )
}