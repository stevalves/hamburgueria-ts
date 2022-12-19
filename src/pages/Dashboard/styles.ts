import styled from "styled-components";

export const StDash = styled.div`
  main {
    width: 100vw;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem;
    margin-top: 1rem;
  }

  main>ul {
    display: flex;
    overflow-x: auto;

    @media (min-width: 720px) {
      flex-wrap: wrap;
      align-items: stretch;
      justify-content: space-between;
      min-width: 650px;
    }
  }
`;
