import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background: var(--primary-1);
  background: linear-gradient(
    90deg,
    var(--primary-1) 52%,
    var(--orange-3) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;

  .initial {
    margin-top: -16rem;
    width: 80%;
    height: 650px;
    background-color: var(--white-2);
    border-radius: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (min-width: 700px) {
      margin-top: -11rem;
      height: 500px;
    }

    @media (min-width: 768px) {
      height: 380px;
    }

    span {
      margin-top: 2rem;
      font-family: "Poppins" sans-serif;
      font-weight: 400;
      font-size: 1rem;

      @media (min-width: 768px) {
        margin-top: 1rem;
        font-size: 1.7rem;
      }
    }

    .section {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 100%;

      @media (min-width: 700px) {
        flex-direction: row;
        justify-content: center;
      }
    }

    .form {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        div {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          input {
            font-family: "Poppins" sans-serif;
            padding: 0.5rem;
            border-radius: 0.5rem;
            outline: none;
            transition: 0.5s;
            border: none;
          }

          @media (min-width: 768px) {
            flex-direction: row;
          }
        }

        .message {
          font-family: "Poppins" sans-serif;
          padding: 1rem;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          height: 8rem;
          grid-column: 1 / 3;
          outline: none;
          transition: 0.5s;
          resize: none;
        }

        button {
          border: none;
          padding: 0.8rem;
          border-radius: 0.5rem;
          font-family: "Poppins" sans-serif;
          font-size: 1rem;
          transition: 0.5s;

          &:disabled {
            opacity: 0.5;
          }

          &:not(:disabled):hover {
            background-color: var(--primary-2);
          }
        }
      }
    }

    .img {
      display: flex;
      align-items: center;
      width: 40%;

      img {
        width: 90%;
      }

      @media (min-width: 768px) {
        width: 30%;

        img {
          width: 80%;
        }
      }
    }
  }
`;
