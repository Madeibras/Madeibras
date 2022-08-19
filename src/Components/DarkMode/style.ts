import styled from "styled-components";

const Media = {
    Tablet:  "@media(max-width: 768px)",
    TabletL: "@media(min-width: 625px)",
    MobileL: "@media(min-width: 425px)",
    MobileM: "@media(min-width: 375px)",
}

export const BoxDarkMode = styled.button`
    text-align: center;
    width: auto;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 1.5rem;
    color: #6FB742;
    cursor: pointer;

    &:hover{
        transition: all 0.2s ease-in;
        opacity: 0.8;
    }

    ${Media.Tablet}{
        padding-top: 25px;
        padding-bottom: 25px;
        font-size: 2.5rem;
        color: #fff;
    }
`