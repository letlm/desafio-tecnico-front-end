import styled from "styled-components";

interface ImgDivs {
  imgUrl: string;
}

export const Container = styled.div`
  width: 100%;
  height: 900px;
  background-color: var(--primary-1);
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1200px;
  }
`;

export const ContextInfos = styled.div<ImgDivs>`
  background: url(${(props) => props.imgUrl}) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  .sob {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .text {
      width: 90%;
      border-radius: 0.3rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .title {
        font-size: 1.3rem;
        font-family: "Poppins", sans-serif;
        color: var(--white-2);
        margin-bottom: 10px;
      }

      .subtitle {
        font-size: 1.1rem;
        font-family: "Poppins", sans-serif;
        color: var(--white-1);
      }
    }

    button {
      width: 200px;
      height: 45px;
      background-color: var(--primary-1);
      border: 1px solid var(--primary-1);
      color: var(--white-2);
      font-size: 1rem;
      font-weight: 400;
      border-radius: 0.2rem;
      font-family: "Poppins", sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;

      letter-spacing: 1px;

      text-transform: uppercase;

      @media (min-width: 420px) {
        font-size: 1rem;
      }

      @media (min-width: 730px) {
        width: 30%;
      }
    }

    button::before {
      content: "";
      border-radius: 5px;
      display: block;
      position: absolute;
      z-index: 0;
      bottom: 0;
      left: 0;
      height: 0px;
      width: 100%;
      background: var(--primary-3);
      background: linear-gradient(
        90deg,
        var(--primary-3) 5%,
        var(--primary-1) 43%,
        var(--blue-1) 100%
      );
      transition: 0.2s;
    }

    button .btnText {
      position: relative;
    }

    button .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3em;
      width: 3em;
      position: absolute;
      top: 3em;
      right: 0;
      opacity: 0;
      transition: 0.4s;
    }

    button:hover::before {
      height: 100%;
    }

    button:hover .icon {
      top: 0;
      opacity: 1;
    }
  }
`;
