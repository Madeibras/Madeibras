import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap');

    html {
        scroll-behavior: smooth;
    }

    body{
        background-color: ${props => props.theme.body};
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        outline: none;
        border: none;
        font-style: normal;
        text-decoration: none;
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
