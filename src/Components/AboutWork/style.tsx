import styled from "styled-components";
import 'animate.css';

const Media = {
    Laptop:  "@media(max-width: 1024px)",
    Tablet:  "@media(max-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileM: "@media(max-width: 375px)",
    MobileS: "@media(max-width: 320px)"
}

export const H1 = styled.h1`
    width: 80%;
    margin: auto;
    text-align: center;
    font-size: 1.4rem;
    font-family: 'Poppins';
    margin-bottom: 3rem;
    font-weight: 500;
    color: ${(props) => props.theme.color};

    
    ${Media.Laptop}{
        font-size: 1.6rem;
    }

    ${Media.MobileL}{
        font-size: 1.4rem;
    }

    ${Media.MobileM}{
        font-size: 1.1rem;
    }
`

export const Container = styled.div`
    max-width: 90%;
    height: auto;
    margin: 0 auto;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    opacity: 0.8;
    margin-bottom: 4rem;
   

    ${Media.Laptop}{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

  
`

export const Box = styled.div`
    position: relative;
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Poppins';
    background-color: ${(props) => props.theme.card};
    color: ${(props) => props.theme.color};
    margin: 0 40px;
    border-radius: 20px;
    box-shadow: 5px 5px 10px #A6CE39;

    ${Media.Laptop}{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 40px 0;
    }

    ${Media.MobileL}{
        width: 90%;
        height: 280px;
    }

    ${Media.MobileM}{
        width: 100%;
        
    }
    &:nth-child(3){
        img{
            width: 140px;

            ${Media.Tablet}{
                width: 150px;
            }

            ${Media.MobileL}{
                width: 130px;
            }
        }
    }

    img{
        width: 65px;
        height: auto;
        animation: fadeInDown;
        animation-duration: 1s;

        ${Media.Laptop}{
            width: 80px;
        }

        ${Media.Tablet}{
            width: 70px;
        }

        ${Media.MobileL}{
            width: 65px;
        }
    }
`

export const Description = styled.section`
    position: relative;
    text-align: center;
    animation: fadeInDown;
    animation-duration: 1s;

    h2{
        position: relative;
        font-size: 2.8rem;
        padding-top: 1rem;

       span{
        position: relative;
            &::before{
                content: '+';
                position: absolute;
                left: -25px;
            }
       }
        

        ${Media.Laptop}{
            font-size: 2.5rem;
        }

        ${Media.Tablet}{
            font-size: 2.4rem;
        }

        ${Media.MobileL}{
            font-size: 1.8rem;
        }

        strong{
            position: absolute;
            bottom: -5px;
        }
    }

    p{
        width: 90%;
        margin: auto;
        opacity: 0.8;
        font-size: 1.2rem;
        padding-top: 1rem;

        ${Media.Laptop}{
            font-size: 1.5rem;
          
        }

        ${Media.Tablet}{
            font-size: 1.2rem;
        }

        ${Media.MobileL}{
            font-size: 0.9rem;
        }
    }
`