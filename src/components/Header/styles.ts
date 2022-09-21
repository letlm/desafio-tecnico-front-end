import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 4rem;
  background-color: var(--primary-1);
  border-bottom: 1px solid var(--primary-3);

  ul {
    width: 85%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-around;

    img {
      width: 35px;
    }

    .header {
      width: 80%;
      display: flex;
      justify-content: flex-end;
      gap: 3rem;
    }
  }
`;

export const NavContainer = styled.li`
  a {
    color: var(--white-2);
    transition: 0.5s;

    &:hover {
      color: var(--primary-2);
      transition: 0.5s;
    }
  }
`;
