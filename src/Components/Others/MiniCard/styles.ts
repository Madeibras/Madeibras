import styled from "styled-components";

const Media = {
    Laptop: "@media(max-width: 1750px)",
    MobileL: "@media(max-width: 425px)",
    MobileS: "@media(max-width: 320px)"
}

export const Box = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 90px;
    color: #F4F4F4;
    border-radius: 17px;
    background: linear-gradient(112.84deg, #3E484D 3.96%, #212B33 83.9%);
    box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    font-family: 'Poppins';
    margin: 20px;

    &:hover{
        transition: all 0.3s ease-in-out;
        background: linear-gradient(112.84deg, #4B5F69 3.96%, #21394B 83.9%);
    }

    ${Media.MobileL}{
        width: 70%;
        height: 90px;
    }
`

export const Icon = styled.div`
    background: #20292E;
    font-size: 1.5rem;
    padding: 12px 12px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${Media.MobileL}{
        font-size: 0.9rem;
    }
`

export const Title = styled.div`
    width:  50%;
    font-size: 1.1rem;
    text-align: center;
    font-weight: 600;

    ${Media.MobileL}{
        font-size: 0.9rem;
    }
`