import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
    h2 {
        margin-bottom: 1.5rem;
    }

    input {
        width: 100%;
        height: 4rem;

        padding: 0 1.5rem;

        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: #e7e9ee;

        font-size: 1rem;
        font-weight: 400;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type='submit'] {
        width: 100%;
        height: 4rem;

        padding: 0 1.5rem;
        margin-top: 1.5rem;

        background: var(--green);
        color: #fff;

        font-weight: 600;
        font-size: 1rem;

        border: 0;
        border-radius: 0.25rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;

    margin-block: 1rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const radioBoxColors = {
    green: '#33cc95',
    red: '#e52e4d'
};

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    padding: 1rem 2rem;

    border: 1px solid #d7d7d7;
    border-radius: 0.25;

    background: ${props =>
        props.isActive
            ? transparentize(0.9, radioBoxColors[props.activeColor])
            : 'transparent'};

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        font-size: 1rem;
        color: var(--text-title);
    }
`;
