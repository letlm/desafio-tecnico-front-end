import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 30rem;
  background-color: var(--primary-1);
  display: flex;
  flex-direction: column;
`;

export const Line = styled.section`
  display: flex;
  height: 15%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  span {
    font-size: 0.8rem;
    font-family: "Poppins" sans-serif;
    color: var(--white-3);
  }
`;
