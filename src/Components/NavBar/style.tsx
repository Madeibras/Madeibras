import styled from "styled-components";

const Media = {
    Tablet:  "@media(max-width: 767px)",
    MobileL: "@media(min-width: 425px)",
    MobileM: "@media(min-width: 375px)",
    MobileS: "@media(min-width: 320px)",
}

export const Ul = styled.ul`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-content: center;  

    ${Media.Tablet}{
        position: fixed;
        width: 60%;
        height: 100vh;
        top: 70px;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #6FB742;
        z-index: 10;
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;
    }

    ${Media.MobileS}{
        width: 80%;
    }
` 

export const Li = styled.li `
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${Media.Tablet}{
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        color: #fff;
    }
`

export const Span = styled.span`
    font-size: 1.15rem;
    display: flex;
    justify-content: flex-start;

    ${Media.Tablet}{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
    }
`

export const Icon = styled.i`
    font-size: 1.25em;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Media.Tablet}{
        font-size: 2rem;
    }
`