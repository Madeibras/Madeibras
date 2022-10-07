import styled from "styled-components";
import 'animate.css';

interface IProps {
    primary?: boolean
    boxShadowColor?: string
}

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

export const Box = styled.div<IProps>`
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
    box-shadow: 5px 5px 10px  ${(props) => props.boxShadowColor};
    
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

    img{
        width: 100%;
        height: 90PX;
        animation: fadeInDown;
        animation-duration: 1s;

        ${Media.Laptop}{
            width: 100%;
        }

        ${Media.Tablet}{
            width: 130px;
        }

        ${Media.MobileL}{
            width: 100px;
        }
    }
`

export const BoxImg = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
`

export const Description = styled.section<IProps>`
    position: relative;
    text-align: center;
    animation: fadeInDown;
    animation-duration: 1s;

    h2{
        position: relative;
        font-size: 2.8rem;
        padding-top: 1rem;
        display: ${(props) => props.primary ? "none" : "hidden"};

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

    h3{
        position: relative;
        font-size: 1.6rem;
        padding-top: 1rem;

        ${Media.Laptop}{
            font-size: 2rem;
        }

        ${Media.Tablet}{
            font-size: 1.7rem;
        }

        ${Media.MobileL}{
            font-size: 1.6rem;
        }

        strong{
            position: absolute;
            bottom: -5px;
        }
    }

    p{
        width: 100%;
        padding: 10px;
        margin: auto;
        opacity: 0.8;
        font-size: 1rem;
        padding-top: 1rem;

        ${Media.Laptop}{
            width: 80%;
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