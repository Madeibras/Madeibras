import styled from "styled-components";


const Media = {
    MobileL: "@media(max-width: 500px)",
    MobileS: "@media(max-width: 320px)"
}

export const Box = styled.div`
    display: flex;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overflow-x: auto;
    padding: 14px;
    gap: 24px;
`

export const Card = styled.div`
    min-width: 500px;
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
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    span{
        font-size: 1.4rem;
        font-weight: 700;

        ${Media.MobileL}{
            font-size: 1.2rem;
        }

        ${Media.MobileS}{
            font-size: 1rem;
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
    background-color: #A6CE39;
    color: #fff;

    p{
        font-size: 1.3rem;
        padding: 16px;
        font-weight: 500;

        ${Media.MobileL}{
            font-size: 1.2rem;
        }

        
    }
`