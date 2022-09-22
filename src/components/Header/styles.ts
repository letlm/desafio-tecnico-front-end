import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
  background: var(--primary-1);
  background: linear-gradient(
    90deg,
    var(--primary-1) 52%,
    var(--orange-3) 100%
  );

  ul {
    width: 95%;
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
      gap: 1rem;
    }

    button {
      background-color: transparent;
      border: none;
      color: var(--white-2);

      &:hover {
        color: var(--primary-2);
        transition: 0.5s;
      }
    }
  }
`;

export const NavContainer = styled.li`
  width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  a {
    color: var(--white-2);
    transition: 0.5s;
    margin-bottom: 2rem;
    font-size: 1.5rem;

    &:hover {
      color: var(--primary-2);
      transition: 0.5s;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;

    a {
      font-size: 1rem;
      margin-bottom: 0;
    }
  }
`;
