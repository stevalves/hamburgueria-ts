import styled from "styled-components";

export const StCard = styled.li`
  min-width: 250px;
  border: 2px solid var(--color-grey100);
  border-radius: 8px;
  margin-right: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover img {
    transform: scale(1.1);
    transition: 300ms;
  }

  &:hover {
    border: 2px solid var(--color-primary);
    transition: 300ms;
  }

  img {
    background-color: transparent;
    border-radius: 8px;
  }

  & > div:nth-child(1) {
    width: 100%;
    height: 55%;
    background-color: var(--color-grey0);

    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 8px;
  }

  & > div:nth-child(2) {
    height: 45%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 1rem;
    gap: .5rem;
  }

  h2 {
    font-weight: 700;
    font-size: var(--font-heading3);
    color: var(--color-grey600);
  }

  h4 {
    font-weight: 400;
    font-size: var(--font-caption);
    color: var(--color-grey300);
  }

  h3 {
    font-weight: 600;
    font-size: var(--font-body);
    color: var(--color-primary);
  }

  button {
    font-weight: 600;
    font-size: var(--font-heading3);
    color: var(--color-grey0);

    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;

    width: max-content;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.5rem;
  }

  button:hover {
    background-color: var(--color-primary50);
    border: 2px solid var(--color-primary50);
    transition: 300ms;
  }

  @media (min-width: 720px) {
    min-width: 215px;
    width: 30%;
    max-width: 30%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;
