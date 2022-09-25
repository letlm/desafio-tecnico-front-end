import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 500px;
  background: var(--primary-3);
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 768px) {
    height: 400px;
  }

  section {
    margin-top: 4rem;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .title {
      width: 100%;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      text-align: center;
      letter-spacing: 1px;
      color: var(--blue-1);
      font-size: 1.4rem;
    }
  }
`;
