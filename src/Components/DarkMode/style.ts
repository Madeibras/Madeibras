import styled from "styled-components";

const Media = {
    Tablet:  "@media(min-width: 768px)",
    TabletL: "@media(min-width: 625px)",
    MobileL: "@media(min-width: 425px)",
    MobileM: "@media(min-width: 375px)",
}

export const BoxDarkMode = styled.button`
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    font-size: 2.5rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-content: center;
    cursor: pointer;

    ${Media.Tablet}{
        text-align: center;
        width: auto;
        padding-top: 0;
        padding-bottom: 0;
        font-size: 2rem;
        color: #000;
    }
`