import styled, { keyframes } from "styled-components";

const Media = {
    MobileM: "@media(max-width: 375px)"
}

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

    ${Media.MobileM}{
        width: 50px;
        height: 50px;
        font-size: 2rem;
        left: 20px;
    }

    &:hover{
        width: 68px;
        height: 68px;
        transition: all 0.2s ease-in;
        color: #a1ff0b;
        background-color: #f3f3f3;

        ${Media.MobileM}{
            width: 52px;
            height: 52px;
            font-size: 2rem;
            left: 20px;
        }
    }

    z-index: 30;
`
