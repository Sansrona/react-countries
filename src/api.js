import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://restcountries.com/v2/'
});

export const all = () => {
    const data = instance.get('all');
    return data;
};

export const getCountryByName = (name) => {
    const data = instance.get(`name/${name}`);
    return data;
}

export const filterByCode = (codes) => {
    const data = instance.get(`alpha?codes=${codes.join(',')}`);
    return data;
}