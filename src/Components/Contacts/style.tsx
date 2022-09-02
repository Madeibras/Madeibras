import styled from "styled-components";

export const Container = styled.div`
    min-width: 100%;
    min-height: auto;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    iframe{
        width: 100vw;
        height: 80vh;
    }
`

export const Box = styled.div`
    position: relative;
    max-width: 280px;
    row-gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Poppins';
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