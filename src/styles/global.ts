import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        outline: 0;
        box-sizing: border-box;
        

        ::-webkit-scrollbar {
            width: 8px;
            height: 10px;
        }
        ::-webkit-scrollbar-thumb{
            background: var(--primary-3);
            border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
            background-color: var(--primary-1)
        }
    }

    :root {
        --black: #000000;
        --white-1: #FFFFFF;
        --white-2: #EBF1F1;
        --white-3: #BFC4C8;
        --primary-1: #213B89;
        --primary-2: #8CA2D3;
        --primary-3: #1C203E;
        --blue-1: #5198C7;
        --blue-2: #0382C3;
        --green-1: #6CBC89;
        --green-2: #59B67E;
        --green-3: #0FA883;
        --green-3: #0B8967;
        --yellow-1: #FDC83E;
        --yellow-2: #F49C13;
        --orange-1: #EF785A;
        --orange-2: #E87E21;
        --orange-3: #D25515;
        --red-1: #E0201C;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: var(--primary-3);
        background: linear-gradient(
        90deg,
        var(--primary-3) 5%,
        var(--primary-1) 43%,
        var(--blue-1) 100%
        );
    }

    button {
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    a{ 
        text-decoration: none;
    }

    .container {
        width: 100%;
        margin: 0 auto;
        min-width: 300px;
        padding: 0 1 rem;
    }

    .toastify-color-progress-light {
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        background-color: var(--white-2);
        box-shadow: 10px 10px 69px -2px rgba(9,9,8,0.47);
        color: var(--primary-3);
        z-index: 9999;
    }

    .Toastify__progress-bar-theme--light {
        background: var(--primary-1);
    }

    .children {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
