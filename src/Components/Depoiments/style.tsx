import styled from "styled-components";


const Media = {
    MobileL: "@media(max-width: 500px)",
    MobileS: "@media(max-width: 320px)"
}

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    animation: fadeInUp 1s ease-in-out alternate;
`

export const Box = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overflow-x: auto;
    padding: 14px;
    gap: 24px;

    

      &::-webkit-scrollbar{
        height: 0px;
    }
`

export const Card = styled.div`
    min-width: 500px;
    height: 100%;
    scroll-snap-align: start;
    box-shadow: 6px 6px 2px #cccbcb;
    font-family: 'Poppins';

    ${Media.MobileL}{
        min-width: 320px;
    }

    ${Media.MobileS}{
        min-width: 280px;
    }
`


export const Header = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.headerCard};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    span{
        font-size: 1.4rem;
        font-weight: 700;
        color: ${(props) => props.theme.color};

        ${Media.MobileL}{
            font-size: 1.2rem;
        }

        ${Media.MobileS}{
            font-size: 0.9rem;
        }
    }
`

export const Star = styled.div`
    i{
        font-size: 1.4rem;
        color: #FFDB20;
        
        ${Media.MobileL}{
            font-size: 1.2rem;
        }

        ${Media.MobileS}{
            font-size: 1rem;
        }
    }
`

export const Depoiment = styled.div`
    width: 100%;
    height: 280px;
    background-color: ${(props) => props.theme.cardDepoiment};
    color: #fff;

    ${Media.MobileL}{
        height: 300px;
    }

    p{
        font-size: 1.3rem;
        padding: 26px 16px;
        font-weight: 500;

        ${Media.MobileL}{
            font-size: 1rem;
        }
    }
`

export const Buttons = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 30%;
    color: ${(props) => props.theme.color};

    ${Media.MobileL}{
        display: none;
    }

    button{
        font-weight: 600;
        cursor: pointer;
        font-size: 5rem;
        opacity: 0.4;

        &:hover:nth-child(1){
            opacity: 1;
        }

        &:hover:nth-child(2){
            opacity: 1;
        }
    }
`