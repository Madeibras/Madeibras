import styled from "styled-components";

const Media = {
    Tablet:  "@media(max-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileM: "@media(min-width: 375px)",
    MobileS: "@media(min-width: 320px)"
}

export const Container = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 16px;
    font-family: 'Poppins';
    margin-bottom: 10%;

    ${Media.Tablet}{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const BoxImg = styled.div`
    width: 50%;

    img{
        border-radius: 15px;
        object-fit: cover;
        max-width: 100%;
        height: 450px;
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