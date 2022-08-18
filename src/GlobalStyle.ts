import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --background: #6FB742
        --font-white: #FFFFFF
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

`

export default GlobalStyle;
