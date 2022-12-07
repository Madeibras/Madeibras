import styled from "styled-components";

const Media = {
    Tablet: "@media(max-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileM: "@media(max-width: 375px)"
}

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 80%;
    margin: auto;
`

export const Box = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
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
    padding-right: 20px;

    ${Media.Tablet}{
        padding: 10px;
    }

   img{
        position: relative;
        width: 85vw;
        height: 100%;

        ${Media.Tablet}{
            height: 50vh;
        }

        ${Media.MobileL}{
            width: 80vw;
            height: 45vh;
        }
   } 
`

export const divBtns = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #474242;
    box-shadow: border-box;
   border-radius: 0 0 10px 10px;
    
    button{
        font-size: 2rem;
        margin: 10px 20px 0 10px;
        cursor: pointer;
        color: #e5e3e3;
        
    }

    button:nth-child(1):hover{
        color: red;
    }

    button:nth-child(2):hover{
        color: #45d725;
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

    ${Media.Tablet}{
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