import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background: var(--primary-1);
  background: linear-gradient(
    90deg,
    var(--primary-1) 52%,
    var(--orange-3) 100%
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
