import styled from "styled-components";

export const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2ch;
  margin-top: 1rem;
  border: 2px solid var(--color-grey0);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 2ch 1ch;
  min-width: 400px;
  width: 450px;
  max-width: 720px;
  height: max-content;

  div {
    display: flex;
    justify-content: space-between;
    h3 {
      font-weight: 700;
      font-size: var(--font-heading3);
      color: var(--color-grey600);
    }
    a {
        color: var(--color-grey300);
        font-weight: 500;
        font-size: var(--font-headline);
    }
  }

  p {
    font-weight: 400;
    font-size: var(--font-body);
    color: var(--color-grey300);
    text-align: center;
  }
`;
