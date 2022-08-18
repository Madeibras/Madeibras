import styled from "styled-components";
import { Iprops } from "./Types/IProps";

const Media = {
    Tablet:  "@media(min-width: 768px)",
    MobileL: "@media(min-width: 425px)",
    MobileM: "@media(min-width: 375px)",
    MobileS: "@media(min-width: 320px)"
}


export const Button = styled.button<Iprops>`
    cursor: pointer;
    width: 180px;
    height: 60px;
    border-radius: 4rem;
    box-shadow: 4px 6px #ccc;
    background-color: ${(props => props.backgroundColor)};
    color: ${(props => props.txtColor)};

    &:hover{
        transition: all 0.3s ease-in-out;
        background-color: ${(props) => props.backgroundHover};
    }

    ${Media.Tablet}{
        width: 210px;
        height: 80px;
        font-size: 1.2rem;
    }

    z-index: 9;
`