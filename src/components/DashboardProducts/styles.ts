import styled from "styled-components";

interface Img {
  imgUrl: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--white-2);
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    margin-top: 4rem;
    margin-bottom: 4rem;
    width: 98%;
    height: 90%;
    background-color: var(--white-2);
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 342px) {
      width: 90%;
    }

    .products {
      margin-top: 3rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: row;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .btnMore {
      width: 100%;

      .more {
        width: 180px;
        height: 35px;
        font-size: 0.9rem;
        background-color: var(--primary-3);
        border: none;
        color: var(--white-2);
        z-index: 1;
        overflow: hidden;
        position: relative;
        font-family: "Poppins", sans-serif;
      }
    }

    button:hover {
      background-color: var(--primary-2);
      border: 1px solid var(--primary-3);
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
`;

export const ContextProducts = styled.div`
  width: 300px;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white-2);
  border: 1px solid var(--primary-3);
  transition: 0.5s;

  &:hover {
    box-shadow: 10px 10px 69px -2px var(--primary-2);
  }

  .title {
    width: 90%;
    height: 40px;
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .img {
    width: 190px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    width: 90%;
    height: 95px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    .description {
      font-family: "Poppins", sans-serif;
      font-size: 0.9rem;
      max-width: 290px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .price {
      margin-top: 0.5rem;
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 500;
    }
  }

  button {
    width: 180px;
    height: 35px;
    font-size: 0.9rem;
    background-color: var(--primary-1);
    border: none;
    color: var(--white-2);
    z-index: 1;
    overflow: hidden;
    position: relative;
    font-family: "Poppins", sans-serif;
  }

  button:hover {
    background-color: var(--white-3);
    color: var(--primary-3);
    border: 1px solid var(--primary-3);
  }

  button:after {
    content: "";
    background: var(--white-3);
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
`;

export const ProductImg = styled.div<Img>`
  background: url(${(props) => props.imgUrl}) no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
`;
