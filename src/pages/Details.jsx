import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { getCountryByName } from '../api';
import { Button } from '../components/Button';
import { Info } from '../components/Info';


export const Details = () => {
    const [country, setCountry] = useState(null);
    const { name } = useParams();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        getCountryByName(name).then(({ data }) => setCountry(data[0]));
    }, [name])

    return (
        <div>
            <Button onClick={goBack}>
                <IoArrowBack /> Back
            </Button>
            <Info {...country} push={navigate} />
        </div>
    )
}
