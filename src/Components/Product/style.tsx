import styled from "styled-components";

interface IProps{
    isActive: boolean
}

const Media = {
    Laptop: "@media(max-width: 1750px)",
    MobileL: "@media(max-width: 425px)",
    MobileS: "@media(max-width: 320px)"
}

export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 30px;
    justify-content: space-around;
    align-items: center;
    padding: 30px;

    ${Media.MobileL}{
        padding: 16px;
    }

    ${Media.Laptop}{
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
`

export const Box = styled.div<IProps>`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.card};
    
    border-radius: 25px;
    font-family: 'Poppins';

    animation: fadeInUp 1.3s ease-in-out;

    ${({isActive}) => isActive ? `
         box-shadow: 6px 6px 4px #6FB742;
    `: `
        box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
    `}

    img{
        width: 100%;
        height: 100%;

        ${Media.MobileL}{
            width: 180px;
            height: 120px;
            border-radius: 10px;
        }

        ${Media.MobileS}{
            width: 140px;
            height: 90px;
            border-radius: 8px;
        }
    }


    ${Media.MobileL}{
        width: 90%;
        flex-direction: row;
        transform: scaleX(-1);
        border-radius: 10px;
    }
`

export const Title = styled.h2`
    width: 100%;
    text-align: center;
    background-color: #384044;
    color: #FFFF;
    padding: 10px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    ${Media.MobileL}{
        font-size: 1rem;
        background: none;
        color: #384044;
        transform: scaleX(-1);
    }
`

export const Button = styled.button`
    border-radius: 22rem;
    width: 60%;
    height: 70px;
    font-size: 1.4rem;
    background-color: #6FB742;
    cursor: pointer;
    color: #fff;
    margin-top: 5%;
    margin-bottom: 5%;

    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: #589134;
    }

    ${Media.MobileL}{
        display: none;
    }
`