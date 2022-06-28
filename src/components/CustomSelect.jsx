import React from 'react'
import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--colors-text)',
            padding: '0.25rem',
            borderRadius: 'var(--radii)',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '50px',
        }),
        option: (provided, state) => ({
            ...provided,
            color:'var(--colors-text)',
            backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)'
        }),
    }
})`
    width: 200px;
    border-radius: var(--radii);
    border: none;


    & > * {
        box-shadow: var(--shadow);
    }

    & input {
        margin-left: .25rem
    }

    & * {
        color: var(--colors-text) !important;
    }

    & > div[id]{
        background-color: transparent;
    }
`;
