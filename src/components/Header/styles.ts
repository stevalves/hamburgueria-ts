import styled from "styled-components";

export const StHeader = styled.header`
  display: flex;
  width: 100vw;
  height: 10vh;
  padding: 0 1rem;
  background-color: var(--color-grey0);
  box-shadow: 0 0 2px 4px var(--color-grey100);

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  }

  .flexAdj {
    display: flex;
  }

  input {
    border: none;
    background-color: transparent;
    display: none;
    outline: unset;
    padding: 0 2ch;
    color: var(--color-grey600);
    font-size: var(--font-body);
    font-weight: 500;
  }

  input::placeholder{
    color: var(--color-grey100);
  }

  .searchDiv {
    display: flex;
  }

  svg {
    width: 4ch;
    height: 4ch;
    color: var(--color-grey300);
  }

  svg:hover {
    color: var(--color-primary);
    transition: .2s;
  }
  button {
    margin-left: 2ch;
    border: none;
    background-color: transparent;
  }

  .cartButton {
    display: flex;
    justify-content: flex-end;
    span {
      position: absolute;
      font-weight: 400;
      font-size: 10px;
      color: var(--color-grey0);
      padding: 2px 4px;
      background-color: var(--color-primary);
      border-radius: 4px;
    }
  }

  @media (min-width: 720px) {
    .searchDiv {
      display: flex;
      border: 1px solid var(--color-grey300);
      border-radius: 8px;

      input {
        display: flex;
      }
    }
  }
`;
