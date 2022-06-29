import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://restcountries.com/v2/'
});

export const all = () => {
    return instance.get('all?fields=name,capital,flags,population,region');
};

export const getCountryByName = (name) => {
    return instance.get(`name/${name}`);
}

export const filterByCode = (codes) => {
    return instance.get(`alpha?codes=${codes.join(',')}`);
}