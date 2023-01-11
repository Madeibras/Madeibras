import styled from "styled-components";

interface IProps { 
    validation: string
}

export const Box = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgb(000, 005, 020, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
`

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 4px 4px 1px #d1d1d1;
    border-radius: 8px;
    padding: 20px;
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    input[type="file"]{
        display: none;
    }
`

export const RenderImg = styled.label`
    width: 240px;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
    border: 0.5px solid #000;
    border-radius: 6px;
    font-size: 1.8rem;

    &:hover {
        font-size: 1.5rem;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Btn = styled.button`
    position: fixed;
    right: 25px;
    bottom: 20%;
    background: #000;
    color: #fff;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 21;

    &:hover{
        font-size: 0.9rem
    }
`

export const IsValid = styled.p<IProps>`
    color: ${(props) => props.validation};
`