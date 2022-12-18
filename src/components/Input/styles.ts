import styled from "styled-components";

export const StInput = styled.fieldset`
  & {
    border: 2px solid var(--color-grey300);
    background-color: var(--color-grey0);
    border-radius: 8px;
    padding: 8px 1rem;
  }
  &:hover {
    border: 2px solid var(--color-grey600);
    transition: 0.3s;
  }

  label {
    color: var(--color-grey300);
    font-weight: 400;
    font-size: var(--font-caption);
    display: block;
    padding: 0 8px;
  }

  input {
    border: none;
    background-color: transparent;
    width: 100%;
    color: var(--color-grey300);
    font-size: var(--font-headline);
    padding-bottom: 8px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--color-grey300);
      font-size: var(--font-body);
    }
  }
`;
