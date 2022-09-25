import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background: var(--primary-3);
  background: linear-gradient(
    90deg,
    var(--primary-3) 5%,
    var(--primary-1) 43%,
    var(--blue-1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.section`
  display: flex;
  height: 65px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  span {
    font-size: 0.8rem;
    font-family: "Poppins" sans-serif;
    color: var(--white-3);
  }
`;
