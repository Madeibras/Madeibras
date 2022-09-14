import styled, { keyframes } from 'styled-components'

const Media = {
    MobileS: "@media(max-width: 375px)"
}

const animationInfinite = keyframes`
    from{
        transform: translate(2px, -3px) rotate(5deg);
    }   

    to{
        transform: translate(2px, 3px) rotate(-5deg);
    }
`

const animationSpan = keyframes`
    from {
        opacity: 0.2;
        transform: translateY(40px);
    }

    to{
       opacity: 1;
    }
`

export const Button = styled.div`
    font-family: 'Poppins';
    position: fixed;
    border-radius: 50%;

    padding: 8px;
    bottom: 30px;
    right: 30px;
    background-color: #6ff71b;
    animation: ${animationInfinite} 1s infinite alternate;
    z-index: 30;
    
   

    span{
            display: none;
    }
   

    &:hover{
        font-size: 3.8rem;
        transition: all 0.2s ease-in;
        background-color: #62d819;

        span{
            font-weight: 600;
            top: -50px;
            left: -30px;
            right: 0;
            position: fixed;
            color: #464343;
            font-size: 1.4rem;
            display: flex;
            animation: ${animationSpan} 0.3s ease-in-out;
        }
    }
`

export const Btn = styled.button`
    color: #F4F4F4;
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    ${Media.MobileS}{
        font-size: 3rem;
    }
`