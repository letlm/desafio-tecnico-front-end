import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 200px;
  background: var(--orange-3);
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .title {
      width: 100%;
      font-family: "Poppins" sans-serif;
      font-weight: 600;
      text-align: center;
      letter-spacing: 1px;
      color: var(--primary-3);
      font-size: 1.4rem;
    }
  }
`;
