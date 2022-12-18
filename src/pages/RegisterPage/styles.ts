import styled from "styled-components";

export const StRegisterPage = styled.main`
    padding: 2rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    margin-top: 2.5vh;

    @media (min-width: 720px) {
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        margin-top: 0;
        padding: 0 1rem;
        width: 100vw;
        height: 100vh;
        gap: 2.5rem;
    }
`