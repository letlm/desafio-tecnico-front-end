import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    background-color: var(--white-2);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 700px;
    margin-top: 0rem;

    .right {
      width: 50%;
      height: 100%;
    }
  }
`;

export const ContainerForm = styled.form`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0rem;
  background-color: var(--primary-1);
  align-items: center;

  @media (min-width: 630px) {
    height: 400px;
  }

  @media (min-width: 768px) {
    gap: 1rem;
    width: 50%;
    height: 100%;

    span {
      width: 80%;
      max-width: 800px;
      margin-left: 0rem;
      margin-top: -3rem;
      margin-bottom: 4rem;
    }

    div {
      max-width: 800px;
    }
  }

  span {
    width: 90%;

    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    color: var(--white-2);
  }

  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .primary,
    .secondary {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;

      input,
      select {
        border: none;
        width: 48%;
        padding: 0.4rem;
        border: none;
        border-radius: 0.2rem;
        background-color: var(--white-1);
        font-family: "Poppins", sans-serif;
        width: 100%;
        transition: all ease-in-out 0.5s;

        &::-webkit-input-placeholder {
          font-weight: 100;
          color: var(--primary-3);
        }
      }

      @media (min-width: 630px) {
        flex-direction: row;
      }
    }

    .terciary {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      input,
      textarea {
        border: none;
        width: 100%;
        padding: 0.4rem;
        border: none;
        border-radius: 0.2rem;
        background-color: var(--white-1);
        font-family: "Poppins", sans-serif;
        width: 100%;
        transition: all ease-in-out 0.5s;

        &::-webkit-input-placeholder {
          font-weight: 100;
          color: var(--primary-3);
        }
      }
    }

    button {
      padding: 0.5rem;
      border: none;
      border-radius: 0.2rem;
      width: 90%;
      transition: 0.5s;
      font-family: "Poppins", sans-serif;
      font-size: 0.9rem;

      &:hover {
        color: var(--white-1);
        background-color: var(--orange-3);
        cursor: pointer;
      }
    }
  }
`;
