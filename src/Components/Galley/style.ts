import styled from "styled-components";

const Media = {
    Laptop: "@media(max-width: 1024px)",
    Tablet: "@media(max-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileM: "@media(max-width: 375px)"
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Media.MobileM}{
        width: 90%;
        margin: auto;
    }

    &:nth-child(2){
       
        transform: scaleX(-1);
    }

    img{
        width: 60%;
        height: 450px;
        padding: 10px;
        object-fit: cover;
        border-radius: 15px;

      

        ${Media.Laptop}{
            height: 350px;
        }

        ${Media.Tablet}{
            width: 50%;
            height: 250px;
        }

        ${Media.MobileL}{
            padding: 5px;
            border-radius: 15px;
            height: 200px;
        }

        ${Media.MobileM}{
            height: 150px;
        }

        &:nth-child(1){
           
            width: 30%;
            height: 450px;
            
            ${Media.Laptop}{
                height: 350px;
            }

            ${Media.Tablet}{
                width: 40%;
                height: 250px;
            }

            ${Media.MobileL}{
                height: 200px;
            }

            ${Media.MobileM}{
                width: 50%;
                height: 150px;
            }
        }
    }
`