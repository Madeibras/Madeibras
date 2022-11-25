import styled from "styled-components";
const Media = {
    Tablet:  "@media(max-width: 768px)",
    MobileL: "@media(min-width: 425px)",
    MobileM: "@media(min-width: 375px)",
    MobileS: "@media(min-width: 320px)"
}

interface IProps {
    Color?: string
}

export const Icons = styled.ul<IProps>`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;

    ${Media.Tablet}{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    a{
        color: ${(props) => props.Color};
        font-size: 3rem;
        cursor: pointer;
        

        ${Media.Tablet}{
            justify-content: center;
            margin-right: 0;
            font-size: 3rem;
        }

        ${Media.MobileS}{
            font-size: 2.5rem;
        }

        &:hover{
            transition: all 0.2s ease-in;
            opacity: 0.5;
        }
    }

`