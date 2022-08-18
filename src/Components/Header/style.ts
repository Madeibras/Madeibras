import styled from "styled-components";

const Media = {
    Tablets:  "@media(max-width: 768px)",
    Tablet:  "@media(min-width: 768px)",
    MobileL: "@media(max-width: 535px)",
    MobileM: "@media(max-width: 375px)",
    MobileS: "@media(min-width: 320px)"
}

export const Header = styled.header`
    position: relative;
    max-width: 100%;
    min-height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    
`

export const BoxImg = styled.div`
    width: 50%;
    height: 85px;

    img:nth-child(1){
        position: relative;
        width: 80%;
        z-index: -1;
    }

    img:nth-child(2){
        width: 28%;
        margin-top: 5px;
        margin-left: 4%;
        position: absolute;
        z-index: 10;
        left: 0;
    }



    ${Media.Tablet}{
        background-size: 80% 100%;
        
        img:nth-child(1){
            position: relative;
            width: 90%;
            z-index: -1;

         
        }
        
        img:nth-child(2){
            position: absolute;
            width: 25%;
            margin-top: 5px;
            z-index: 10;
        }
    }
`