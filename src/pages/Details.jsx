import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { getCountryByName } from '../api';


export const Details = () => {
    const [country, setCountry] = useState(null);
    const { name } = useParams();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        getCountryByName(name).then(({ data }) => setCountry(data));
    }, [name])

    console.log(country);

    return (
        <div>
            <button onClick={goBack}>
                <IoArrowBack /> Back
            </button>
            Details {name}</div>
    )
}
