import styled from "styled-components";

const Media = {
    MobileS: "@media(max-width: 425px)"
}

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overflow-x: auto;

    &::-webkit-scrollbar{
        height: 0px;
    }
`

export const CardImg = styled.div`
    width: 100%;
    scroll-snap-align: start;

   img{
        width: 100vw;
        height: 100vh;

        ${Media.MobileS}{
            width: 95vw;
            height: 45vh;
            padding-right: 12px;
        }
   }
`

export const Buttons = styled.div`
    position: absolute;
    width: 100%;
    top: 50%;
    bottom: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f4f4f4;

    z-index: 10;

    ${Media.MobileS}{
        display: none;
    }
`

export const BtnLeft = styled.button`
    font-size: 6rem;
    cursor: pointer;

    &:hover{
        transition: all 0.2s ease;
        font-size: 6.2rem;
    }
`

export const BtnRight = styled.button`
    font-size: 6rem;
    cursor: pointer;

    
    &:hover{
        transition: all 0.2s ease;
        font-size: 6.2rem;
    }
`