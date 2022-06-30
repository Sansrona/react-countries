import { useState, useEffect } from 'react'
import styled from 'styled-components';

import { filterByCode } from '../api';

const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media (min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }

    @media (min-width:1024px){
        grid-template-columns: minmax(400px, 600px) 1fr;
    }

`;

const InfoImage = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
`;

const InfoTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 1024px){
        flex-direction:row;
        gap: 4rem;
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    line-height: 1.8;

    & > b{
        font-weight: var(--fw-bold);
    }
`;

const Meta = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5;

    & > b{
        font-weight: var(--fw-bold);
    }
    @media (min-width: 767px){
        flex-direction: row;
        align-items: center;
    }
`;

const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Tag = styled.div`
    padding: 0 1rem;
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
    line-height:1.8;
    cursor: pointer;
`;

export const Info = (props) => {
    const {
        name, nativeName, flag,
        population, capital, region,
        subRegion, topLevelDomain,
        currencies = [], languages = [], borders = [], push } = props;

    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
        if (borders.length)
            filterByCode(borders).then(({ data }) => { setNeighbors(data.map(d => d.name)) })
    }, [borders]);

    return (
        <Wrapper>
            <InfoImage src={flag} alt={name}></InfoImage>
            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native name</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population</b> {population}
                        </ListItem>
                        <ListItem>
                            <b>Region</b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Sub Region</b> {subRegion}
                        </ListItem>
                        <ListItem>
                            <b>Capital</b> {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Top level domain</b> {topLevelDomain?.map(c =>
                                (<span key={c}>{c}</span>))}
                        </ListItem>
                        <ListItem>
                            <b>Currency</b> {currencies?.map(c =>
                                (<span key={c.code}>{c.name}</span>))}
                        </ListItem><ListItem>
                            <b>Language</b> {languages?.map(l =>
                                (<span key={l.name}>{l.name}</span>))}
                        </ListItem>
                    </List>
                </ListGroup>
                <Meta>
                    <b  style={{ marginRight: '.5rem' }}>Border countries</b>
                    {(!borders.length) ? (
                        <span> There is no border countries</span>) :
                        (
                            <TagGroup>
                                {neighbors.map(b => (
                                    <Tag key={b} onClick={() => { push(`/country/${b}`) }}>{b}</Tag>
                                ))}
                            </TagGroup>
                        )}
                </Meta>
            </div>
        </Wrapper>
    )
}
