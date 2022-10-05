import styled from "styled-components";

const Media = {
    Tablet:  "@media(max-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileM: "@media(min-width: 375px)",
    MobileS: "@media(min-width: 320px)"
}

export const Container = styled.div`
    max-width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 16px;
    margin: auto;
    font-family: 'Poppins';
    margin-bottom: 10%;
    animation: bounceInUp 1.5s ease-in-out;
    
    ${Media.Tablet}{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input{
        background-color: ${(props) => props.theme.card};
        color: ${(props) => props.theme.color};
        
        &::placeholder{
            color: ${(props) => props.theme.description};
        }
    }

    textarea{
        background-color: ${(props) => props.theme.card};
        color: ${(props) => props.theme.color};
        
        &::placeholder{
            color: ${(props) => props.theme.description};
        }
    }
`

export const BoxImg = styled.div`
    width: 50%;

    img{
        border-radius: 15px;
        object-fit: cover;
        width: 100%;
        height: 450px;

        ${Media.MobileM}{
            height: 400px;
        }
    }

    ${Media.Tablet}{
        width: 100%;
    }
`

export const Form = styled.form`
    width: 50%;
    height: 100%;

    ${Media.Tablet}{
        width: 100%;
    }
`

export const IsValid = styled.p`
    font-family: 'Poppins';
    color: #ff5739;
`