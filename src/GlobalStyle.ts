import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    body{
        background-color: #F8F6F6;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Open-Sans, Helvetica, Sans-Serif;
        list-style: none;
        outline: none;
        border: none;
        font-style: normal;
    }
    button {
        border: unset;
        background-color: unset;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: inherit; 
    }

    /* width */
    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #6FB742;   
        border-radius: 20px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #79962B;
    }

`

export default GlobalStyle;
