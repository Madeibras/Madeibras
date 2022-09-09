import styled from "styled-components";
import { Iprops } from "./Types/IProps";

const Media = {
    Tablet:  "@media(max-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileM: "@media(min-width: 375px)",
    MobileS: "@media(min-width: 320px)"
}


export const Button = styled.button<Iprops>`
    cursor: pointer;
    width: ${(props) => props.primary ? "200px" : "210px"};
    height: ${(props) => props.primary ? "60px" : "80px"};
    border-radius: ${(props) => props.primary ? "0.6rem" : "5rem"};
    font-size: 1.2rem;   
    background-color: ${(props => props.backgroundColor)};
    color: ${(props => props.txtColor)};
    z-index: 5;

    &:hover{
        transition: all 0.3s ease-in-out;
        background-color: ${(props) => props.backgroundHover};
    }

    ${Media.Tablet}{
        width: ${(props) => props.primary ? "100%": "50%"};
    }    

    ${Media.MobileL}{
        width: ${(props) => props.primary ? "100%" : "70%"};
    }

    
    ${Media.MobileS}{
        font-size: 1rem;
    }
`