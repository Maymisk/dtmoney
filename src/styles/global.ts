import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #5429cc;

        --light-blue: #6933ff;

        --text-title: #363F5F;
        --text-body: #969cb3;

        --shape: #ffffff;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);

    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    :disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-content {
        width: 100%;

        max-width: 576px;

        background: var(--shape);

        position: relative;

        padding: 3rem;
    }

    .react-modal-overlay {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        background: rgb(0, 0, 0, 0.5);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border: 0;

        background: transparent;
       
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }

    }
`;
