import styled from "styled-components";



export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    justify-content: center;
    align-items: center;
    padding: 30px;
`

export const Box = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFF;
    box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;

    img{
        width: 100%;
        height: 200px;
    }
`

export const Title = styled.h2`
    width: 100%;
    text-align: center;
    background-color: #384044;
    color: #FFFF;
    padding: 10px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`

export const Button = styled.button`
    border-radius: 22rem;
    width: 60%;
    height: 70px;
    font-size: 1.4rem;
    background-color: #6FB742;
    cursor: pointer;
    color: #fff;
    margin-top: 5%;
    margin-bottom: 5%;

    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: #589134;
    }
`