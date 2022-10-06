import styled from "styled-components";
import 'animate.css';

const Media = {
    Laptop:  "@media(max-width: 1374px)",
    Tablet:  "@media(max-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileM: "@media(max-width: 375px)",
    MobileS: "@media(max-width: 320px)"
}

export const Container = styled.section`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    overflow: hidden;
    background-color: ${(props) => props.theme.body};
   

    ${Media.Tablet}{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 10%;
    }

    img:nth-child(3){
        position: absolute;
        top: 0;
        left: 25%;
        
        ${Media.Tablet}{
            width: 400px;
            top: 40%;
            left: -5%;
        }

        ${Media.MobileL}{
            width: 300px;
            top: 55%;
            left: -10%;
        }

        ${Media.MobileM}{
            width: 300px;
            top: 55%;
        }

        ${Media.MobileS}{
            width: 250px;
            top: 65%;
        }
    }   

    img:nth-child(4){
        position: absolute;
        left: 17%;
        bottom: 10%;

        ${Media.Laptop}{
            left: 22%;
        }
        
        ${Media.Tablet}{
            top: 30%;
            left: 68%;
        }
        
        ${Media.MobileL}{
            top: 40%;
            left: 75%;
        }

        ${Media.MobileM}{
            top: 45%;
        }

        ${Media.MobileS}{
            top: 50%;
            left: 70%;
        }
    }

    img:nth-child(5){
        position: absolute;
        left: 2%;
        bottom: 30%;
        opacity: 1;

        ${Media.Laptop}{
            left: 2%;
            top: 50%;
        }
        
        ${Media.Tablet}{
            top: 15%;
            left: 8%;
        }
        
        ${Media.MobileL}{
            top: 15%;
            left: 8%;
        }

        ${Media.MobileM}{
            top: 20%;
            left: 8%;
        }

        ${Media.MobileS}{
            top: 22%;
            left: 2%;
        }
    }
`

export const Box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin: 0 auto;
    z-index: 15;
    margin-left: 5%;
    font-family: 'Poppins';

    animation: fadeInLeft 1.2s ease-in-out;

    ${Media.Tablet}{
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const H1 = styled.h1`
    width: 100%;
    margin-bottom: 3rem;
    font-size: 3rem;

    background: -webkit-radial-gradient(bottom, ${(props) => props.theme.primaryGradient} 0%, ${(props) => props.theme.secondGradient} 100%);
    background: radial-gradient(to top, ${(props) => props.theme.primaryGradient} 0%, ${(props) => props.theme.secondGradient} 100%);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 

    ${Media.Laptop}{
        font-size: 2rem;
    }

    ${Media.Tablet}{
        font-size: 2.4rem;
        text-align: center;
    }

    ${Media.MobileL}{
        font-size: 2rem;
    }
`

export const Description = styled.p`
    width: 90%;
    font-size: 1rem;
    margin-bottom: 3.5rem;
    font-weight: 500;
    color: ${(props) => props.theme.color};

    span{
        color: #8AAB30;
        font-weight: 700;
    }

    ${Media.Laptop}{
        text-align: left;
    }

    ${Media.Tablet}{
        text-align: center;
        font-size: 1.4rem;
    }

    ${Media.MobileL}{
        font-size: 1.2rem;
    }

    ${Media.MobileM}{
        font-size: 1rem;
    }
`

export const Vetor = styled.img`
    width: 50%;
    animation: fadeInRight 1.2s ease-in-out;

    z-index: 10;
    ${Media.Tablet}{
        width: 100%;
        margin-top: 2rem;
    }
`