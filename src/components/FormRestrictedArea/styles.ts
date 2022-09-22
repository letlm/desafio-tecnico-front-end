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
      font-family: "Poppins" sans-serif;
      font-size: 0.9rem;
    }

    span,
    a {
      font-family: "Poppins" sans-serif;
      font-size: 0.8rem;
    }
  }
`;

export const ContainerForm = styled.form`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input {
    padding: 10px;
    border: none;
    border-radius: 30px;
    background-color: var(--yellow-2);
    font-family: "Poppins" sans-serif;
    font-size: 0.9rem;

    transition: all ease-in-out 0.5s;

    &::-webkit-input-placeholder {
      font-weight: 100;
      color: var(--primary-3);
    }
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 30px;
    width: 100px;
    transition: 0.5s;
    font-family: "Poppins" sans-serif;
    font-size: 0.9rem;

    &:hover {
      color: var(--white-1);
      background-color: var(--primary-1);
      cursor: pointer;
    }
  }
`;
