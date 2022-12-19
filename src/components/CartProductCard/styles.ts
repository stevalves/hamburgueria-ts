import styled from "styled-components";

export const StCartCard = styled.li`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  min-height: 100px;
  max-height: 150px;

  &>div{
    display: flex;
  }
  &>button {
    height: max-content;
    color: var(--color-grey300);
    border: none;
    padding: .5ch;
    background-color: transparent;
  }
  .prodImg {
    min-width: 100px;
    max-width: 100px;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: var(--color-grey100);
    overflow: hidden;
    border-radius: 8px;
    img {
        width: 100%;
        transform: scale(1.1);

    }
  }
  .prodName {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: .25rem 0;
    margin-left: 1ch;
    h2{
        font-size: var(--font-heading3);
        color: var(--color-grey600);
        font-weight: 700;
    }

  }

  .addRem {
    display: flex;
    align-items: center;
    border: 1px solid var(--color-grey100);
    width: max-content;
    border-radius: 4px;
    button {
        color: var(--color-negative);
        height: 24px;
        width: 24px;
        border-radius: 4px;
        background-color: var(--color-grey100);
        border: none;
    }
    h5 {
        padding: 0 1.5ch;
    }
  }
`;
