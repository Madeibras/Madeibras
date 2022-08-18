import styled from "styled-components";

const Media = {
    Tablet:  "@media(min-width: 768px)",
    MobileL: "@media(min-width: 425px)",
    MobileM: "@media(min-width: 375px)",
    MobileS: "@media(min-width: 320px)"
}

export const Container = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${Media.Tablet}{
        width: 100%;
        flex-direction: row;
    }
`

export const Box = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${Media.Tablet}{
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        padding: 0 0 0 80px;
        z-index: 15;
    }
`

export const H1 = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 3.5rem;
    margin-top: 1rem;

    ${Media.Tablet}{
        font-size: 2.2rem;
    }
`

export const Vetor = styled.img`
    width: 100%;
    margin-top: 2rem;
`