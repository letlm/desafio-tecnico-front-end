import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 9999;

  section {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .btnOpen {
    background: transparent;
    border: none;
    margin-top: 5px;
    color: var(--primary-2);
    -webkit-transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;

    &:hover {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`;

export const Box = styled.div`
  width: 80vw;
  height: 100vh;
  background: var(--primary-3);
  background: linear-gradient(
    90deg,
    var(--primary-3) 5%,
    var(--primary-1) 43%,
    var(--blue-1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  nav {
    width: 68px;
    height: 80vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        height: 8vh;
        width: 150px;
      }

      button {
        margin-bottom: 1.8rem;
        color: var(--primary-2);
        background: transparent;
        border: none;
        -webkit-transition: -webkit-transform 0.5s ease;
        transition: transform 0.5s ease;

        &:hover {
          color: var(--primary-3);
          -webkit-transform: scale(1.2);
          transform: scale(1.2);
        }
      }
    }
  }
`;
