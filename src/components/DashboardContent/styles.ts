import styled from "styled-components";

interface ImgDivs {
  imgUrl: string;
}

export const Container = styled.div`
  width: 100%;
  height: 900px;
  background-color: var(--primary-3);
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
      width: 40%;
      height: 45px;
      background-color: var(--primary-1);
      border: 1px solid var(--primary-1);
      color: var(--white-2);
      font-size: 1rem;
      font-weight: 400;
      border-radius: 0.3rem;
      font-family: "Poppins", sans-serif;

      @media (min-width: 420px) {
        font-size: 1rem;
        width: 30%;
      }
    }
  }
`;
