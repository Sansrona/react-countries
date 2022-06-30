import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { all } from '../api';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';

export const HomePage = ({ setCountries, countries }) => {
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const navigate = useNavigate();


    const handleSearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter(c => c.region.includes(region));
        }

        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
        }

        setFilteredCountries(data);
    }

    useEffect(() => {
        if (!countries.length)
            all().then(({ data }) => { setCountries(data) });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        handleSearch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countries]);

    return (
        <>

            <Controls onSearch={handleSearch} />
            <List>
                {filteredCountries.map((country => {
                    const c = {
                        img: country.flags.png,
                        name: country.name,
                        info: [
                            { title: 'Population', description: country.population.toLocaleString() },
                            { title: 'Region', description: country.region },
                            { title: 'Capital', description: country.capital },
                        ]
                    };
                    return <Card key={country.name} onClick={() => navigate(`/country/${country.name}`)} {...c} />
                }))}
            </List>
        </>
    )
}
