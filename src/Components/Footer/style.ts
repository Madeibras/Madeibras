import styled from "styled-components";
import 'animate.css';

const Media = {
    Tablet:  "@media(min-width: 768px)",
    MobileL: "@media(min-width: 425px)",
    MobileM: "@media(min-width: 375px)",
    MobileS: "@media(min-width: 320px)"
}


export const Footer = styled.footer`
    min-width: 100%;
    color: #fff;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: #6FB742;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins';
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadeInDown 1s ease-in;

    ${Media.Tablet}{
        flex-direction: row;
    }
`

export const Img = styled.img`
    width: 260px;

    ${Media.Tablet}{
        width: 200px;
    }
`

export const Icons = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    padding-bottom: 2rem;


    a{
        color: #fff;
        font-size: 2rem;
        padding-left: 2rem;
        cursor: pointer;

        &:hover{
            transition: all 0.2s ease-in;
            opacity: 0.5;
        }
    }

    a:nth-child(1){
        padding-left: 0;
    }

    ${Media.Tablet}{
        width: 45%;
    }
`