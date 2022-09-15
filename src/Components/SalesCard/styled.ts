import styled from "styled-components";

const Media = {
    MobileL: "@media(max-width: 500px)",
    MobileS: "@media(max-width: 320px)"
}
export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    justify-items: center;
    align-items: center;
    margin: auto;
    row-gap: 150px;
    font-family: 'Poppins';
    background-image: url('Assets/Sallers/Background_Sallers.png');

        ${Media.MobileL}{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
`

export const Box = styled.div`
    position: relative;
    width: 300px;
    padding: 24px;
    background-color: ${(props) => props.theme.card};
    box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;

    animation: fadeInUp 1s ease-in-out;
`

export const Header = styled.div`
    position: absolute;
    top: -20%;
    left: 30%;
    border-radius: 10px 10px 0 10px;
`

export const Perfil = styled.img`
    width: 120px;
    height: 120px;
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
        color: ${(props) => props.theme.color};
    }

    p{
        padding-top: 16px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: ${(props) => props.theme.description};
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

export const Btn = styled.button`
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
`