import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .spanTitle {
    font-size: 1.3rem;
    font-weight: 400;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .whats {
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      color: var(--green-3);
    }
  }
`;

export const ContainerTel = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .name {
    font-weight: 600;
    font-size: 1.1rem;
  }

  .number {
    background-color: var(--yellow-1);
    border-radius: 0.25rem;
  }
`;
