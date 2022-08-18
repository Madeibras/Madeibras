import styled from "styled-components";

const Media = {
    Tablet:  "@media(min-width: 768px)",
    MobileL: "@media(min-width: 425px)",
    MobileM: "@media(min-width: 375px)",
    MobileS: "@media(min-width: 320px)"
}

export const Icons = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;

    ${Media.Tablet}{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    a{
        width: 100%;
        color: #6FB742;
        font-size: 3rem;
        cursor: pointer;
        display: flex;
        align-items: center;

        ${Media.Tablet}{
           margin-right: 25%;

        }

        &:hover{
            transition: all 0.2s ease-in;
            opacity: 0.5;
        }
    }

`