import styled, {css} from "styled-components"

const Media = {
    Tablet:  "@media(min-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileM: "@media(max-width: 375px)",
    MobileS: "@media(min-width: 320px)"
}

interface BoxButtonProps {
    isActive?: boolean
}

export const BoxButton = styled.button<BoxButtonProps>`
    position: relative;
    width: 85px;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 70;

    ${Media.Tablet}{
        display: none;
    }

        span{
            position: absolute;
            width: 40px;
            height: 3px;
            border-radius: 40px;
            background-color: ${(props) => props.theme.color};
            transition: 0.25s;
            
            

        ${({isActive}) => isActive ? `
            &:nth-child(1){
                position: fixed;
                transform: translateY(0);
                transform: rotate(-45deg);
                background-color: #ffff;
            }

            &:nth-child(2){
                position: fixed;
                transform: rotate(45deg);
                background-color: #ffff;
            }

            &:nth-child(3){
                opacity: 0;
            }
        `: `
            &:nth-child(1){
                transform: translateY(-13px);
            }

            &:nth-child(3){
                transform: translateY(13px);
            }
        `}
    }
`