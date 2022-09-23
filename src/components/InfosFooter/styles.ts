import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  width: 90%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-top: 8rem;
  }

  .context {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .infos {
      height: 200px;
      width: 100%;

      @media (min-width: 768px) {
        width: 70%;
      }

      .title {
        font-family: "Poppins" sans-serif;
        font-weight: 500;
        font-size: 1rem;
        color: var(--orange-3);
        text-transform: uppercase;
        letter-spacing: 4px;
      }

      div {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;

        span {
          color: var(--black);
          font-family: "Poppins" sans-serif;
          font-weight: 600;
          font-size: 1.2rem;
        }

        .newsletter {
          display: flex;
          flex-direction: row;

          .input {
            font-family: inherit;
            width: 100%;
            border: none;
            border-bottom: 2px solid var(--white-3);
            outline: 0;
            font-size: 1rem;
            color: var(--primary-2);
            padding: 7px 0;
            background: transparent;

            &::placeholder {
              color: var(--orange-3);
            }

            @media (min-width: 768px) {
              width: 400px;
            }
          }

          button {
            border: none;
            background-color: transparent;
            color: var(--orange-3);
          }
        }
      }
    }

    .img {
      width: 180px;
      height: 200px;
      display: flex;
      justify-content: flex-start;
      margin-bottom: -40px;

      @media (min-width: 768px) {
        width: 30%;
        justify-content: center;
        align-items: center;
        margin-bottom: 0px;
      }
    }
  }

  .useful {
    width: 100%;
    display: flex;
    flex-direction: column;

    .image {
      width: 100%;
      display: flex;
      justify-content: flex-start;

      img {
        width: 40px;
        margin-bottom: 10px;
      }
    }

    .all {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: space-between;

      @media (min-width: 768px) {
        flex-direction: row;
        gap: 3rem;
      }
    }

    .left {
      display: flex;
      flex-direction: column;

      img {
        width: 40px;
        margin-bottom: 10px;
      }
      span {
        width: 100%;
        font-size: 1rem;
        font-family: "Poppins" sans-serif;
      }

      .email {
        margin-top: 10px;
        color: var(--white-2);
      }

      @media (min-width: 768px) {
        span {
          width: 250px;
        }
      }
    }

    .center-left {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      a {
        color: var(--black);
        font-size: 1rem;
        font-family: "Poppins" sans-serif;
      }

      @media (min-width: 768px) {
        flex-direction: column;
        gap: 0;
      }
    }

    .center-right {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      flex-wrap: wrap;

      a {
        color: var(--black);
        font-size: 1rem;
        font-family: "Poppins" sans-serif;
      }

      .dropdown {
        position: relative;
      }

      .content {
        display: none;
        position: absolute;
        width: 180px;
        border-radius: 0 1rem 1rem 1rem;
        background-color: var(--orange-1);
        z-index: 1;
        height: 150px;
      }

      .content .select {
        font-size: 1rem;
        color: var(--black);
        font-weight: 500;
        display: block;
        padding: 2px;
        text-align: start;
      }

      .content .select:hover {
        font-weight: 900;
        background-color: var(--grey-0);
        transition: 0.5s;
      }

      .dropdown:hover .content {
        display: block;
      }

      @media (min-width: 768px) {
        flex-direction: column;
        gap: 0;
        flex-wrap: nowrap;
      }
    }

    .right {
      display: flex;
      flex-direction: column;

      .address {
        display: flex;
        flex-direction: column;

        span {
          color: var(--black);
          font-size: 1rem;
          font-family: "Poppins" sans-serif;
        }
      }

      .social {
        width: 60%;
        display: flex;
        justify-content: space-between;

        button {
          margin-top: 10px;
          border: none;
          background-color: transparent;
        }
      }
    }
  }
`;
