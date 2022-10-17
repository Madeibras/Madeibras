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

    
    ${Media.MobileL} {
          margin-top: 4rem;
        margin-bottom: 4rem;  
    }
`

export const Icon = styled.img`
    width: 35px;
    height: 35px;
`

export const Txt = styled.span`
    font-family: 'Poppins';
    font-size: 1.9rem;
    font-weight: 600;
    color: ${(props) => props.theme.color};
    border-bottom: 4px solid ${(props) => props.theme.color};
    
    &::selection{
            color: #fff;
            background-color: #41b123;
        }

    ${Media.MobileL} {
        font-size: 1rem;
    }
`