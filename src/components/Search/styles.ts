import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 2.1rem;
  text-align: center;
  background-color: var(--white-2);
  width: 200px;
  border-radius: 30px;

  &:hover,
  &:focus {
    box-shadow: 0 0 1em var(--black);
  }

  &:focus {
    outline: none;
    background-color: var(--white-1);
  }

  .input {
    font-family: "Poppins" sans-serif;
    font-size: 0.9rem;
    background-color: var(--white-2);
    border: none;
    color: var(--primary-1);
    padding: 0.7rem 1rem;
    border-radius: 30px;
    width: 180px;
    height: 2.1rem;
    transition: all ease-in-out 0.5s;
    margin-right: -18px;

    &::-webkit-input-placeholder {
      font-weight: 100;
      color: var(--primary-2);
    }
  }

  .input:focus + .button {
    background-color: #f0eeee;
  }

  .button {
    border: none;
    background-color: #f4f2f2;

    &:hover {
      cursor: pointer;
    }
  }

  .search {
    margin-right: -20px;
    height: 1.3em;
    width: 1.3em;
    fill: #b4b4b4;
  }
`;
