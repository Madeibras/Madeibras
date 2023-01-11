import styled from "styled-components";

const Media = {
    MobileL: "@media(max-width: 425px)"
}

export const SubTitle = styled.h2`
    font-family: 'Poppins';
    text-align: center;
    font-size: 2rem;
    margin: 20px;
    color: ${props => props.theme.color};
`

export const Cards = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    ${Media.MobileL} {
        justify-content: center;
        flex-direction: column
    }
`