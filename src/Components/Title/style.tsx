import styled from "styled-components";

const Media = {
    MobileL: "@media(max-width: 556px)",
    MobileS: "@media(max-width: 375px)"
}

export const Container = styled.div`
    position: relative;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;
    margin-bottom: 7rem;   
`

export const Icon = styled.img`
    width: 35px;
    height: 35px;
`

export const Txt = styled.span`
    font-family: 'Poppins';
    font-size: 1.5rem;
    font-weight: 600;
    border-bottom: 4px solid #000;
    
    &::selection{
            color: #fff;
            background-color: #41b123;
        }

    ${Media.MobileL} {
        font-size: 1.2rem;
    }
`