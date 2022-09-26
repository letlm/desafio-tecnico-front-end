import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 850px;
  background-color: var(--primary-3);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 575px) {
    height: 700px;
  }

  @media (min-width: 693px) {
    height: 600px;
  }

  @media (min-width: 885px) {
    height: 400px;

    section {
      max-width: 1200px;
    }
  }

  section {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .initial {
      font-size: 1.3rem;
      color: var(--white-2);
    }

    div {
      width: 100%;
      height: 100%;
      align-items: center;
      display: flex;
      flex-direction: column;

      .infos {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;

        span {
          width: 250px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 0.2rem;
          background-color: var(--white-2);
        }
      }

      .about {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        button {
          width: 180px;
          height: 50px;
          font-size: 0.9rem;
          background-color: var(--white-2);
          border: none;
          color: var(--primary-3);
          z-index: 1;
          overflow: hidden;
          position: relative;
          font-family: "Poppins", sans-serif;
        }

        button:hover {
          background-color: var(--primary-2);
          border: 1px solid var(--primary-3);
          color: var(--white-1);
        }

        button:after {
          content: "";
          background: var(--primary-1);

          position: absolute;
          z-index: -1;
          left: -20%;
          right: -20%;
          top: 0;
          bottom: 0;
          transform: skewX(-45deg) scale(0, 1);
          transition: all 0.5s;
        }

        button:hover:after {
          transform: skewX(-45deg) scale(1, 1);
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }
      }

      @media (min-width: 693px) {
        .infos {
          span {
            height: 150px;
            width: 20%;
          }
        }
      }

      @media (min-width: 885px) {
        flex-direction: row;

        .infos {
          width: 80%;
        }

        .about {
          width: 20%;

          justify-content: flex-start;
        }
      }

      @media (min-width: 1178px) {
        .infos {
          span {
            width: 200px;
            height: 200px;
          }
        }
      }
    }
  }
`;
