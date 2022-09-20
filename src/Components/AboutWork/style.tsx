import styled from "styled-components";
import 'animate.css';

const Media = {
    Laptop:  "@media(max-width: 1024px)",
    Tablet:  "@media(min-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileM: "@media(min-width: 375px)",
    MobileS: "@media(min-width: 320px)"
}


export const Container = styled.div`
    max-width: 90%;
    height: 100%;
    margin: 0 auto;
    border-radius: 40px;
    background-image: url('Assets/Card/BackgroundCard.png');
    background-size: cover;
    background-position: 30%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 50px 0 ;
    opacity: 0.8;
    margin-bottom: 4rem;
   

    ${Media.Tablet}{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
`

export const Box = styled.div`
    position: relative;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Poppins';
    padding: 40px 0;
    border-bottom: 8px solid #A6CE39;

    ${Media.Tablet}{
        padding: 25px;
        border-bottom: none;

            &::before{
            position: absolute;
            right: -10px;
            content: '';
            width: 10px;
            height: 350px;
            background-color: #A6CE39;
        }
    }


    &:nth-child(3){
        border: none;

        img{
            width: 170px;
        }

        &::before{
            display: none;
        }
    }

    img{
        width: 120px;
        height: 120px;
        animation: fadeInDown;
        animation-duration: 1s;
    }

    
`

export const Description = styled.section`
    
    text-align: center;
    color: #fff;
    animation: fadeInDown;
    animation-duration: 1s;

    h2{
        position: relative;
        font-size: 3rem;
        padding-top: 2rem;
        

        ${Media.Laptop}{
            font-size: 2rem;
        }

        ${Media.MobileL}{
            font-size: 2rem;
        }

        strong{
            position: absolute;
            bottom: -5px;
        }
    }

    p{
        opacity: 0.8;
        font-size: 1.4rem;
        padding-top: 1.2rem;

        ${Media.Laptop}{
            font-size: 1.2rem;
        }


        ${Media.MobileL}{
            font-size: 1.2rem;
        }
    }
`