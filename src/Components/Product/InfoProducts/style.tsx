import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Box = styled.div`
    font-family: 'Poppins';
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxImg = styled.div`
    margin: 25px;

    img{
        width: 500px;
        height: 400px;
    }
`

export const Category = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;

    h1{
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 10%;
    }

    p{
        font-size: 1.4rem;
        font-weight: 400;
        margin-bottom: 25%;
    }
`

export const Table = styled.table`
    width: 100%;
    height: 100%;
    border-spacing: 30px 40px;

    thead{
        text-align: left; 
    }
`

export const Measure = styled.tr`   
    background-color: #384144;
    color: #F4F4F4;

    th:nth-child(1){
        background-color: #88CF5C;
    }

    th{
        position: relative;
        border-left-width: 0;
        min-width: 125px;
        height: 80px;
        
        &::before{
            position: absolute;
            content: 'X';
            font-size: 1rem;
            right: -20px;
            color: #121213;

           
        }

        &:nth-child(3)::before{
                display: none;
            }
    }
`