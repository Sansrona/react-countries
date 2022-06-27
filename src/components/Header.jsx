import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { Container } from './Container';

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0; 
`;
const Title = styled.a.attrs({ href: '/' })`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
    text-decoration: none;
`;
const ModeSwitch = styled.div`
    display: flex;
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    text-transform: capitalize;
`
const Header = () => {
    const [theme, settheme] = useState('light');

    const toggleTheme = () => {
        settheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>
                        Where is the world?
                    </Title>
                    <ModeSwitch onClick={toggleTheme}>
                        {theme === 'light' ?
                            <IoMoonOutline size='14px' /> :
                            <IoMoon size='14px' />
                        }
                        <span style={{ marginLeft: '0.75rem' }}>{theme} Mode</span>
                    </ModeSwitch>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}

export default Header