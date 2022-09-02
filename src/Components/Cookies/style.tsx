import styled from 'styled-components'
import {ICookies} from './Types/Cookes'


export const Box = styled.div`
    font-family: 'Poppins';
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 100%;
    height: 180px;
    background-color: #000;
    opacity: 0.85;
    z-index: 30;
`

export const Privacy = styled.div`
    width: 50%;
    color: #fff;

    p{
        color: #fff;
    }
`

export const BoxButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button<ICookies>`
    cursor: pointer;
    color: ${props => props.primary ? "#FFF": "#000"};
    background-color: ${props => props.primary ? "#000" : "#fff"};
    border: ${props => props.primary ? "2px solid #FFF" : ""};
    padding: 16px;
    border-radius: 5px;
    margin: 0 16px;

    &:hover{
        transition: all 0.3s ease-in-out;
        color: ${props => props.primary ? "#FFF": "#000"};
        background-color: ${props => props.primary ? "#292727" : "#d1d0d0"};
        border: ${props => props.primary ? "2px solid #FFF" : ""};
    }
`