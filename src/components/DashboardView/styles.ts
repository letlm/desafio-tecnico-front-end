import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 1100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: var(--primary-3);
  background: linear-gradient(
    90deg,
    var(--primary-3) 5%,
    var(--primary-1) 43%,
    var(--blue-1) 100%
  );

  @media (min-width: 1000px) {
    height: 94vh;
  }
`;

export const Context = styled.div`
  margin-top: 10px;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-evenly;

  .animation {
    width: 100%;
    height: 450px;
    background-color: var(--white-2);
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--white-2);
    transition: 0.5s;

    &:hover {
      box-shadow: 10px 10px 69px -2px var(--primary-2);
    }

    .anime {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        width: 90%;
        font-family: "Poppins", sans-serif;
        letter-spacing: 2px;
        font-weight: 500;
        font-size: 1rem;
        color: var(--primary-1);
        text-align: center;
      }
    }
  }

  .initial {
    width: 90%;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    .title {
      width: 90%;
      display: flex;
      flex-direction: column;

      img {
        width: 200px;
        margin-bottom: 2rem;
      }

      span {
        padding: 0.25rem;
        color: var(--white-2);
        font-weight: 400;
        font-size: 1.1rem;
        font-family: "Poppins", sans-serif;
        letter-spacing: 1px;
      }
    }

    .box {
      width: 100%;
      display: flex;
      flex-direction: column;

      span {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: var(--white-2);
        font-size: 0.9rem;
        word-wrap: break-word;
        font-family: "Poppins", sans-serif;

        :nth-child(1) {
          border-radius: 0.1rem 0.1rem 0 0;
          background-color: var(--blue-1);
        }
        :nth-child(2) {
          background-color: var(--blue-2);
        }
        :nth-child(3) {
          background-color: var(--primary-1);
        }
        :nth-child(4) {
          border-radius: 0 0 0.1rem 0.1rem;
          background-color: var(--primary-3);
        }
      }
    }
  }

  @media (min-width: 425px) {
    margin-top: 0px;

    .animation {
      width: 90%;
    }

    .initial {
      align-items: center;

      .title {
        img {
          width: 300px;
        }
      }
      .box {
        flex-direction: row;

        span {
          width: 25%;
          height: 144px;

          :nth-child(1) {
            border-radius: 0.1rem 0 0 0.1rem;
          }

          :nth-child(4) {
            border-radius: 0 0.1rem 0.1rem 0;
          }
        }
      }
    }
  }

  @media (min-width: 914px) {
    margin-top: 0px;
    flex-direction: row;
    .animation {
      width: 40%;
    }

    .initial {
      width: 60%;

      .box {
        span {
          width: 25%;
          height: 164px;
          font-size: 1rem;

          :nth-child(1) {
            border-radius: 0;
          }
        }
      }
    }
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
    color: var(--blue-2);
    z-index: 2000;
    transition: 0.5s;

    &:hover {
      transform: scale(1.5);
      color: var(--blue-1);
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
    color: var(--blue-2);
    z-index: 2000;
    transition: 0.5s;

    &:hover {
      transform: scale(1.4);
      color: var(--blue-1);
    }
  }
`;
