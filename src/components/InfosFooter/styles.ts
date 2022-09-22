import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 850%;
  display: flex;
  justify-content: space-between;
`;

export const ContextLeft = styled.div`
  width: 33%;
  display: flex;
  align-items: flex-start;

  .logo {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
    }
  }

  .company {
    width: 30%;
    h3 {
      font-family: "Poppins" sans-serif;
      font-weight: 300;
    }

    display: flex;
    flex-direction: column;
  }
`;

export const ContextCenter = styled.div`
  background-color: blue;
  width: 33%;
`;

export const ContextRight = styled.div`
  background-color: green;
  width: 33%;
`;
