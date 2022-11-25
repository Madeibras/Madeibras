import styled from "styled-components";
import 'animate.css';

const Media = {
    Laptop:  "@media(max-width: 1024px)",
    Tablet:  "@media(max-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileM: "@media(max-width: 375px)",
    MobileS: "@media(max-width: 320px)"
}


export const Footer = styled.footer`
    min-width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins';
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeInDown 1s ease-in;
    background-color: #6FB742;

    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    ${Media.Laptop}{
        flex-direction: column;
        
    }
`

export const terms = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.color};

    ${Media.Laptop}{
        flex-direction: column;
    }
`

export const Pagaments = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;

    ${Media.Laptop}{
        width: 100%;
        margin-top: 2%;
    }

    div{
        p{
            font-size: 0.8rem; 
        }

        img{
            width: 45px;
            padding-right: 5px;
        }
        
    }
`

export const Img = styled.img`
    width: 260px;

    ${Media.Laptop}{
        order: -1;
    }
`

export const Icons = styled.ul`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    padding-bottom: 2rem;


    a{
        color: #fff;
        font-size: 2rem;
        padding-left: 2rem;
        cursor: pointer;

        &:hover{
            transition: all 0.2s ease-in;
            opacity: 0.5;
        }
    }

    a:nth-child(1){
        padding-left: 0;
    }

    ${Media.Laptop}{
        padding-bottom: 0;
    }
`