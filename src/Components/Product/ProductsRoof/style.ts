import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    font-family: 'Poppins';
`

export const Box = styled.div`
    width: 85%;
    height: 100%;
    margin: auto;

    h2{
        text-align: center;
        font-size: 2rem;
    }

    &:nth-child(2){
       transform: scaleX(-1);

       p{
        transform: scaleX(-1);
       }
       
       h2{
            transform: scaleX(-1);
       }
    }

    &:nth-child(4){
       transform: scaleX(-1);

       p{
        transform: scaleX(-1);
       }

       h2{
        transform: scaleX(-1);
       }
    }

    margin-bottom: 4rem;
`

export const SubTitle = styled.div`

`

export const CardProducts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxImg = styled.div`
    width: 50%;
    padding: 16px;

    img{
        width: 100%;
        height: 350px;
        border-radius: 14px;
    }
`

export const Title = styled.div`
    position: relative;
    width: 50%;   
    padding: 16px;

    p{
        font-size: 1.3rem;
    }
`
