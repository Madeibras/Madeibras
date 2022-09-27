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
    height: 300px;
    margin: 0 auto;
    border-radius: 20px;
    background-image: url('Assets/Card/BackgroundCard.png');
    background-size: cover;
    background-position: 25%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    opacity: 0.8;
    margin-bottom: 4rem;
   

    ${Media.Tablet}{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    ${Media.MobileS}{
        height: auto;
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
    border-bottom: 4px solid #A6CE39;

    ${Media.Tablet}{
        padding: 25px;
        border-bottom: none;

            &::before{
            position: absolute;
            right: -5px;
            content: '';
            width: 5px;
            height: 200px;
            background-color: #A6CE39;
        }
    }

    ${Media.MobileS}{
        padding: 20px;
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
        animation: fadeInDown;
        animation-duration: 1s;

        ${Media.Tablet}{
            width: 80px;
            height: 80px;
        }

        ${Media.MobileS}{
           
        }
    }

    
`

export const Description = styled.section`
    position: relative;
    text-align: center;
    color: #fff;
    animation: fadeInDown;
    animation-duration: 1s;

    h2{
        position: relative;
        font-size: 3rem;
        padding-top: 1rem;

       span{
        position: relative;
            &::before{
                content: '+';
                position: absolute;
                left: -30px;
            }
       }
        

        ${Media.Laptop}{
            font-size: 2rem;
        }

        ${Media.MobileL}{
            font-size: 2.4rem;
        }

        strong{
            position: absolute;
            bottom: -5px;
        }
    }

    p{
        opacity: 0.8;
        font-size: 1.4rem;
        padding-top: 1rem;

        ${Media.Laptop}{
            font-size: 1rem;
        }


        ${Media.MobileL}{
            font-size: 0.8rem;
        }
    }
`