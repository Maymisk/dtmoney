import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 0 12rem;

    button {
        height: 3rem;

        background: var(--light-blue);
        color: #fff;

        font-size: 1rem;

        border: 0;
        border-radius: 0.25rem;

        padding: 0 2rem;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
