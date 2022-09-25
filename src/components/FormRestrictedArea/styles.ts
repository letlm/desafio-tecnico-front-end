import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    margin-bottom: 1.5rem;
  }

  section {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    button {
      border: none;
      background-color: transparent;
      font-family: "Poppins", sans-serif;
      font-size: 0.9rem;
    }

    span,
    a {
      font-family: "Poppins", sans-serif;
      font-size: 0.8rem;
    }
  }
`;

export const ContainerForm = styled.form`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input {
    padding: 0.5rem;
    border: none;
    border-radius: 0.2rem;
    background-color: var(--blue-1);
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
    width: 100%;
    transition: all ease-in-out 0.5s;

    &::-webkit-input-placeholder {
      font-weight: 100;
      color: var(--primary-3);
    }
  }

  button {
    padding: 0.5rem;
    border: none;
    border-radius: 0.2rem;
    width: 150px;
    transition: 0.5s;
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
    background-color: var(--primary-1);
    color: var(--white-1);

    &:hover {
      color: var(--white-1);
      background-color: var(--primary-3);
      cursor: pointer;
    }
  }
`;
