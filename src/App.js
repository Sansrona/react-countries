import { useState, useEffect } from 'react'

import { Custom } from './components/Custom';
import Header from './components/Header';
import { Main } from './components/Main';

import { all } from './api';
import { List } from './components/List';
import { Card } from './components/Card';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    all().then(({ data }) =>
      setCountries(data)
    );
  }, []);

  return (
    <>
      <Header></Header>
      <Main>
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
            return <Card key={country.name} {...c} />
          }))}
        </List>
      </Main>

    </>
  );
}

export default App;
