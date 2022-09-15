import styled from "styled-components";
import 'animate.css';

const Media = {
    Tablet:  "@media(max-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileS: "@media(max-width: 320px)"
}

export const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 10%;
    overflow: hidden;
    background-color: ${(props) => props.theme.body};
   

    ${Media.Tablet}{
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 10%;
    }
`

export const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin: 0 auto;
    z-index: 15;
    margin-left: 5%;
    font-family: 'Poppins';

    animation: fadeInLeft 1.2s ease-in-out;

    ${Media.Tablet}{
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const H1 = styled.h1`
    margin-bottom: 3.5rem;
    font-size: 2.2rem;

    background: -webkit-radial-gradient(bottom, ${(props) => props.theme.primaryGradient} 0%, ${(props) => props.theme.secondGradient} 100%);
    background: radial-gradient(to top, ${(props) => props.theme.primaryGradient} 0%, ${(props) => props.theme.secondGradient} 100%);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 

    ${Media.Tablet}{
        font-size: 2.4rem;
        text-align: center;
    }

    ${Media.MobileL}{
        font-size: 1.4rem;
    }

`

export const Vetor = styled.img`
    width: 100%;
    animation: fadeInRight 1.2s ease-in-out;

    ${Media.Tablet}{
        margin-top: 2rem;
    }
`