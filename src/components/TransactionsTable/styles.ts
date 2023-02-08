import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;

        border-spacing: 0 1rem;

        th {
            color: var(--text-body);

            font-weight: 400;

            padding: 1rem 2rem;

            text-align: left;

            line-height: 1.5rem;
        }

        td {
            background: var(--shape);

            border: 0;
            border-radius: 0.25rem;

            padding: 1rem 2rem;

            color: var(--text-body);

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdrawal {
                color: var(--red);
            }
        }
    }
`;
