import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: var(--primary-1);
  background: linear-gradient(
    90deg,
    var(--primary-1) 52%,
    var(--orange-3) 100%
  );

  .oters {
    width: 100%;
    height: 500px;
    background-color: var(--orange-3);
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    @media (min-width: 768px) {
      div {
        flex-direction: row;
      }
    }

    div {
      width: 90%;
      height: 90%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      span {
        width: 250px;
        height: 200px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        border-radius: 0.2rem;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        background-color: var(--white-2);
      }
    }
  }
`;
