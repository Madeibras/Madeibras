import styled from "styled-components";

export const Box = styled.div`
    position: relative;
    width: 280px;
    padding: 24px;
    background-color: #ffff;
    box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    font-family: 'Poppins';
`

export const Header = styled.div`
    position: absolute;
    top: -15%;
    left: 30%;
    border-radius: 10px 10px 0 10px;
`

export const Perfil = styled.img`
    width: 100px;
    height: 100px;
    border: 5px solid #A6CE39;
    border-radius: 50%;
    position: relative;
    object-fit: fill;
    cursor: pointer;
`

export const Info = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span{
        font-size: 24px;
        font-weight: 700;
    }

    p{
        padding-top: 16px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
    }

`

export const BoxButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-top: 22px;

    button{
        background-color: #A6CE39;
        color: #fff;
        padding: 12px 18px;
        border-radius: 12px;
        font-size: 2.2rem;
        display: flex;
        align-items: center;
        justify-items: center;
        cursor: pointer;
        

        &:hover{
            transition: all 0.3s ease-in-out;
            background-color: #589134;
        }
    }
`