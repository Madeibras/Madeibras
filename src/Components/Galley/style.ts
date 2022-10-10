import styled from "styled-components";

const Media = {
    Laptop: "@media(max-width: 1024px)",
    Tablet: "@media(max-width: 768px)",
    MobileL: "@media(max-width: 425px)",
    MobileM: "@media(max-width: 375px)"
}

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`
//Cards

export const Box = styled.div`
    position: relative;
    width: 85%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    align-items: center;
    justify-content: center;

    ${Media.MobileM}{
        width: 90%;
        margin: auto;
    }

    img{
        width: 100%;
        height: 350px;
        object-fit: cover;
        border-radius: 15px;
        cursor: pointer;

        &:hover{
            transition: all 0.2s ease-in;
            opacity: 0.8;
        }

        ${Media.Tablet}{
            height: 250px;
        }

        ${Media.MobileL}{
            height: 150px;
            border-radius: 10px;
        }

        ${Media.MobileM}{
            height: 120px;
            border-radius: 8px;
        }
    }
`

//Modal

export const PoupUp = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color:rgba(000, 000, 000, 0.4);
    z-index: 200;
    
  
`

export const CardPoupUp = styled.div`
    position: relative;
    width: 90%;
    display: flex;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overflow-x: auto;

    &::-webkit-scrollbar{
        height: 0px;
    }
    transform: translate(-50%, -50%);
    background-color: #F4F4F4;
    border-radius: 8px;
    top: 50%;
    left: 50%;
    transition: all 0.2 ease-in-out;


    ${Media.Tablet}{
        height: 500px;
    }

    ${Media.MobileL}{
        height: 350px;
    }

    ${Media.MobileM}{
        height: 250px;
    }
`

export const BoxImg = styled.div`
    width: 100%;
    height: 600px;
    padding: 10px; 

    ${Media.Tablet}{
        height: 500px;
    }

    ${Media.MobileL}{
        height: 350px;
    }

    ${Media.MobileM}{
        height: 250px;
    }

    img{
        width: 85vw;;
        height: 100%;
    }
`


export const Actions = styled.div`
    position: absolute;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    color: #F4F4F4;
    top: 45%;
    left: 2%;
    
    ${Media.Tablet}{
        display: none;
    }

    button{
        font-size: 4rem;
    }

    span{
        position: absolute;
        color: #FFFFFF;
        right: 26px;
        top: 32%;
        font-size: 1.6rem;
        z-index: 100;
        cursor: pointer;
    }
`