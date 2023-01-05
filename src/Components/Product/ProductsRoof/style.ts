import styled from "styled-components";

const Media = {
    Laptop: "@media(max-width: 1024px)",
    Tablet: "@media(max-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileS: "@media(max-width: 375px)"
}

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
    color: ${(props) => props.theme.color};

    a{
        color: ${(props) => props.theme.color};
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

export const CardProducts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5px solid #69E087;
    border-radius: 15px;

    ${Media.Laptop}{
        flex-direction: column;
    }
`

export const BoxImg = styled.div`
    width: 50%;
    padding: 16px;

    ${Media.Laptop}{
        width: 100%;
    }

    img{
        width: 100%;
        height: 450px;
        border-radius: 14px;

        ${Media.MobileL}{
            height: 300px;
        }

        ${Media.MobileS}{
            height: 250px;
        }
    }
`

export const Title = styled.div`
    position: relative;
    width: 50%;   
    padding: 16px;
 

    ${Media.Laptop}{
        width: 100%;
    }

    h2{
        padding-bottom: 40px;
        font-size: 2rem;

        ${Media.MobileL}{
            font-size: 1.5rem;
            padding-bottom: 20px;
        }

        ${Media.MobileL}{
            font-size: 1.2rem;
        }
    }

    p{
        font-size: 1.1rem;

        ${Media.Tablet}{
            font-size: 1rem;
        }

        ${Media.MobileL}{
            font-size: 0.7rem;
        }
    }
`
