import styled, { keyframes } from "styled-components";

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

  .oters {
    width: 100%;
    height: 500px;
    background-color: var(--blue-1);
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    @media (min-width: 768px) {
      div {
        flex-direction: row;
      }
    }

    div {
      width: 90%;
      height: 90%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      span {
        width: 250px;
        height: 200px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        border-radius: 0.2rem;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        background-color: var(--white-2);
        animation: ${appearFromCenter} 1s ease 0s 1 normal backwards;

        &:hover {
          &:hover {
            box-shadow: 10px 10px 69px -2px var(--primary-3);
          }
        }
      }
    }
  }
`;
