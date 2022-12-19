import styled from "styled-components";

export const Modal = styled.dialog`
  & {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .modalContent {
    background-color: white;
    margin: 10rem 1rem 0 1rem;
    border-radius: 8px;
  }

  .modalHeader {
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 8px 8px 0 0;
    h2 {
      font-weight: 700;
      font-size: var(--font-heading3);
      color: var(--color-grey0);
    }
    button {
      background-color: transparent;
      border: none;
      svg {
        width: 2.5ch;
        height: 2.5ch;
        color: var(--color-grey0);
      }
    }
  }
  .modalBody {
    padding: 1rem;
  }

  .totalAmount {
    display: flex;
    justify-content: space-between;
    margin: 1ch 0;
    h4 {
      font-weight: 600;
      font-size: var(--font-body);
      color: var(--color-grey600);
    }

    h5 {
      font-weight: 600;
      font-size: var(--font-body);
      color: var(--color-grey300);
    }
  }

  .modalBody > button {
    width: 100%;
    padding: 1.5ch 0;
    border-radius: 4px;
    border: none;
    background-color: var(--color-grey100);
    color: var(--color-grey300);
    font-size: var(--font-headline);
    font-weight: 600;
  }

  .modalBody>ul{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-height: 250px;
    overflow-y: auto;
  }

  span {
    display: block;
    text-align: center;
    padding: 2rem 0;
    font-weight: 600;
    font-size: var(--font-heading2);
    color: var(--color-grey600);
  }

  hr{
    margin: 1.5ch 0;
  }

  @media (min-width: 720px) {
    .modalContent {
        max-width: 600px;
        margin: 10rem auto 0 auto;
    }
  }
`;
