import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 94vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: var(--primary-1);
  background: linear-gradient(
    90deg,
    var(--primary-1) 52%,
    var(--orange-3) 100%
  );
`;

export const Context = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 4rem;

  img {
    width: 46%;
  }

  .border {
    width: 45%;
    height: 500px;
    background-color: white;
  }
`;

export const Line = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  .return {
    bottom: 0;
    right: 0;
    position: fixed;
    margin-right: 15px;
    margin-bottom: 10px;
    background-color: transparent;
    border: none;
    color: var(--orange-2);
    z-index: 2000;
    transition: 0.5s;

    &:hover {
      transform: scale(1.5);
      color: var(--orange-2);
    }
  }

  .whats {
    bottom: 0;
    left: 0;
    position: fixed;
    margin-left: 15px;
    margin-bottom: 10px;
    background-color: transparent;
    border: none;
    color: var(--orange-2);
    z-index: 2000;
    transition: 0.5s;

    &:hover {
      transform: scale(1.4);
      color: var(--orange-2);
    }
  }
`;
