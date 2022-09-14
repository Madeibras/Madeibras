import styled from "styled-components";

const Media = {
    MobileS: "@media(max-width: 1020px)"
}

export const Container = styled.div`
    min-width: 100%;
    min-height: auto;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap; 
    padding: 16px;
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

export const Box = styled.div`
    position: relative;
    max-width: 280px;
    row-gap: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Poppins';
    padding: 16px;

    animation: fadeInDown 0.8s ease-in-out;

    &::before{
        content: '';
        position: absolute;
        right: -25%;
        height: 125px;
        width: 3px;
        background-color: #6FB742;

        ${Media.MobileS}{
            display: none;
        }
    }

    &:nth-child(4)::before{
        display: none;
    }   
`

export const Icon = styled.i`
    font-size: 3rem;
    color: #6FB742;
`

export const Name = styled.span`
    font-size: 1.5rem;
    font-weight: bolder;
`

export const Description = styled.p`
    text-align: center;
    font-weight: 600;
    font-size: 1.1rem;    
    padding: 0 20px 0 20px;
`