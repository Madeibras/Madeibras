import styled from "styled-components";

const Media = {
    Tablet:  "@media(max-width: 767px)",
    MobileL: "@media(min-width: 425px)",
    MobileM: "@media(min-width: 375px)",
    MobileS: "@media(min-width: 320px)",
}

export const Li = styled.li `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: 'Poppins';

    &:hover{
        transition: all 0.2s ease-in;
        border-bottom: 2px solid #6FB742;
    }

    ${Media.Tablet}{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.6rem;
        margin-bottom: 1.6rem;
        color: #fff;
    }

    
`

export const Span = styled.span`
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #6FB742;

    a{
        color: #6FB742;

        ${Media.Tablet}{
            font-size: 2rem;
            color: #fff;
        }

        ${Media.MobileS}{
            font-size: 1.2rem;
        }

    }
`

export const Icon = styled.i`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25em;
    padding-right: 0.5rem;
    color: #6FB742;

    ${Media.Tablet}{
        font-size: 2rem;
        color: #fff;
    }

    ${Media.MobileS}{
        font-size: 1.5rem;
    }
`