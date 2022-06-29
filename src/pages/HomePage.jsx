import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { all } from '../api';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Custom } from '../components/Custom';

export const HomePage = ({ countries, setCountries }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!countries.length) all().then(({ data }) =>
            setCountries(data)
        );
    }, []);

    return (
        <>

            <Custom />
            <List>
                {countries?.map((country => {
                    const c = {
                        img: country.flags.png,
                        name: country.name,
                        info: [
                            { title: 'Population', description: country.population },
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
