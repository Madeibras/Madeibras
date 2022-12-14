import styled from "styled-components";

const Media = {
    Laptop: "@media(max-width: 1020px)",
    MobileS: "@media(max-width: 425px)"
}

interface IProps {
    Color?: string
    ColorBorder?: string
}

export const Container = styled.div`
    min-width: 100%;
    min-height: auto;
    background-color: ${(props) => props.theme.card};
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 16px;

    margin-top: 10%;

    ${Media.Laptop}{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 100px;
    }
`

export const Iframe = styled.div`
    width: 100%;
    height: auto;
    animation: flash 1s ease-in;

    iframe{
        width: 100%;
        height: 80vh;
    }
`

export const Box = styled.div<IProps>`
    position: relative;
    width: 100%;
    row-gap: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Poppins';
    padding: 16px;
    animation: fadeInDown 0.8s ease-in-out;

    ${Media.Laptop} {
        border-bottom: 4px solid rgb(111, 183, 66);

        &:nth-child(4){
            border: none;
        }
    }

    &::before{
        content: '';
        position: absolute;
        right: 0;
        height: 125px;
        width: 3px;
        background-color: ${(props) => props.ColorBorder};
       
        ${Media.Laptop}{
            display: none;
           
        }
    }

    &:nth-child(4)::before{
        display: none;
    }   
`

export const Icon = styled.i<IProps>`
    font-size: 3rem;
    color: ${(props) => props.Color};
`

export const Name = styled.span`
    font-size: 1.5rem;
    font-weight: bolder;
    color: ${(props) => props.theme.color};

`

export const Description = styled.p`
    text-align: center;
    font-weight: 600;
    font-size: 1rem;    
    padding: 0 20px 0 20px;
    color: ${(props) => props.theme.description};

`