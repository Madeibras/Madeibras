import styled from 'styled-components'
import {ICookies} from './Types/Cookes'

const Media = {
    Tablet: "@media(max-width: 768px)",
    MobileL: "@media(max-width: 575px)"
}

export const Box = styled.div`
    font-family: 'Poppins';
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 100%;
    height: auto;
    background-color: #000;
    opacity: 0.85;
    z-index: 30;
    padding: 22px;

    ${Media.Tablet}{
        flex-direction: column;
    }
`

export const Privacy = styled.div`
    width: 100%;
    color: #fff;

    p{
        color: #fff;
        
        a{
            color: #52dbf3;
            text-decoration: underline;
        }
    }
`

export const BoxButton = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${Media.Tablet}{
        justify-content: space-around;
        margin-top: 40px;
    }

    ${Media.MobileL}{
        display: flex;
        flex-direction: column;
        margin-top: 0;
    }
`

export const Button = styled.button<ICookies>`
    cursor: pointer;
    width: auto;
    color: ${props => props.primary ? "#FFF": "#000"};
    background-color: ${props => props.primary ? "#000" : "#fff"};
    border: ${props => props.primary ? "2px solid #FFF" : ""};
    padding: 16px;
    border-radius: 5px;
    margin: 0 16px;

    ${Media.Tablet}{
        width: 230px;
    }


    ${Media.MobileL}{
       width: 80%;
       margin-top: 40px;
    }

    &:hover{
        transition: all 0.3s ease-in-out;
        color: ${props => props.primary ? "#FFF": "#000"};
        background-color: ${props => props.primary ? "#292727" : "#d1d0d0"};
        border: ${props => props.primary ? "2px solid #FFF" : ""};
    }
`