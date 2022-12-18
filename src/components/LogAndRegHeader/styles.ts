import styled from "styled-components";

export const StLogAndRegHeader = styled.header`
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 3ch;

  h1 {
    color: var(--color-grey600);
    font-size: var(--font-title1);
    span {
      color: var(--color-secondary);
      font-size: var(--font-title3);
    }
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 2ch;
    border: 1px solid var(--color-grey100);
    border-radius: 5px;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    padding: 1ch;
    margin-top: 1rem;
    div {
      background: rgba(39, 174, 96, 0.1);
      border-radius: 5px;
      padding: 1rem;
      svg {
        width: 2em;
        height: 2em;
        color: var(--color-primary);
      }
    }
    p {
      color: var(--color-grey300);
      font-weight: 400;
      font-size: var(--font-headline);
      line-height: 22px;
      b {
        color: var(--color-grey600);
      }
    }
  }

  img {
    margin-top: 0.75rem;
    width: 50%;
    display: none;
  }

  @media (min-width: 720px) {
    img {
      display: inherit;
    }
    & > div {
      max-width: 450px;
    }
  }
`;
