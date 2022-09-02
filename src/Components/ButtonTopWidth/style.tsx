import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0%{
        transform: translateY(20px);
    }

    100% {
        transform: translate(0);
    }

`

export const Button = styled.button`
    width: 70px;
    height: 70px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    bottom: 40px;
    left: 40px;
    color: #F4F4F4;
    vertical-align: middle;
    background-color: #69ff0b;
    animation: ${animation} 0.5s;
    box-shadow: 0px 4px 2px #c5c4c4;
    border-radius: 50px;
    font-size: 2.5rem;

    &:hover{
        width: 68px;
        height: 68px;
        transition: all 0.2s ease-in;
        color: #a1ff0b;
        background-color: #f3f3f3;
    }

    z-index: 30;
`
