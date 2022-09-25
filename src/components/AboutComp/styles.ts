import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
 0% {
		opacity: 0;
		transform: translateX(250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

const appearFromLeft = keyframes`
 0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

const appearFromCenter = keyframes`
0% {
		opacity: 0;
		transform: scale(0.6);
	}

	100% {
		opacity: 1;
		transform: scale(1);
	}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: var(--primary-1);
`;

export const ContainerAbout = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 3rem;

  .initial {
    width: 100%;
    height: 550px;
    display: flex;
    background-color: var(--white-2);
    justify-content: center;
    flex-direction: column;
    align-items: center;
    animation: ${appearFromLeft} 2s ease 0s 1 normal backwards;

    div {
      width: 70%;
      display: flex;
      justify-content: flex-start;
      margin-top: 3rem;
      margin-bottom: 2rem;

      img {
        margin-top: 1rem;
        width: 250px;
      }
    }

    span {
      width: 70%;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--primary-3);
      margin-bottom: 2rem;
    }
  }

  .finale {
    width: 100%;
    height: 400px;
    display: flex;
    background-color: var(--blue-1);
    justify-content: center;
    flex-direction: column;
    align-items: center;
    animation: ${appearFromRight} 2s ease 0s 1 normal forwards;

    div {
      width: 70%;
      height: 0;
      display: flex;
      justify-content: flex-start;
      margin-top: 0rem;
    }

    span {
      width: 70%;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--primary-3);
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 375px) {
    .initial {
      div {
        margin-bottom: 5rem;
        img {
          margin-top: 0rem;
        }
      }
    }
  }

  @media (min-width: 621px) {
    flex-direction: row;

    .initial {
      width: 50%;
      height: 600px;
    }

    .finale {
      width: 50%;
      height: 600px;

      div {
        height: 45px;
        margin-top: 3rem;
      }
    }
  }

  @media (min-width: 914px) {
    margin-top: 0;
  }
`;

export const ContainerPrizes = styled.section`
  width: 90%;
  height: 660px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 8rem;
  margin-bottom: 8rem;
  background-color: var(--white-2);
  animation: ${appearFromCenter} 1s ease 0s 1 normal backwards;

  div {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: space-evenly;

    img {
      width: 200px;
    }

    span {
      text-align: center;
      width: 80%;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      color: var(--primary-3);
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 768px) {
    height: 550px;
    div {
      flex-direction: row;
      span {
        width: 50%;
        font-size: 1.2rem;
        margin-bottom: 0rem;
      }
    }
  }
`;
