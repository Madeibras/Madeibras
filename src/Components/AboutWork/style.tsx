import styled from "styled-components";

const Media = {
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
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 25px;
    border-bottom: 5px solid #A6CE39;
    font-family: 'Poppins';

    ${Media.Tablet}{
        padding: 25px;
        border-right: 5px solid #A6CE39;
        border-bottom: none;
    }

    &:nth-child(3){
        border: none;
    }

    img{
        width: 120px;
        height: 120px;
    }

    
`

export const Description = styled.section`
    text-align: center;
    color: #fff;


    h2{
        font-size: 3rem;
        padding-top: 2rem;

        ${Media.MobileL}{
            font-size: 2rem;
        }
    }

    p{
        opacity: 0.8;
        font-size: 1.4rem;
        padding-top: 3rem;

        ${Media.MobileL}{
            font-size: 1.2rem;
        }
    }
`