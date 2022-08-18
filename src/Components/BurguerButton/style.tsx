import styled from "styled-components"

const Media = {
    Tablet:  "@media(min-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileM: "@media(max-width: 375px)",
    MobileS: "@media(min-width: 320px)"
}


export const BoxButton = styled.div`
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    overflow: hidden;

    ${Media.Tablet}{
        display: none;
    }

    span{
        position: absolute;
        width: 40px;
        height: 3px;
        border-radius: 40px;
        background-color: #000;
        transition: 0.5s ;
    }

    span:nth-child(1){
        transform: translate(0, -12px); 
    }

    span:nth-child(2){
        transform: translate(0, 12px); 
    }  

    .hamburguer.open span:nth-child(1){
        transform: rotate(45deg);
    }

    .hamburguer.open span:nth-child(1){
        opacity: 0;
    }

    .hamburguer.open span:nth-child(3){
        transform: rotate(-45deg);
    }
`