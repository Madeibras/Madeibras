import styled from 'styled-components'

const Media = {
    Laptop: "@media(max-width: 1024px)",
    MobileL: "@media(max-width: 580px)",
    MobileM: "@media(max-width: 375px)",
    MobileS: "@media(max-width: 320px)"
}

export const Box = styled.div`
    font-family: 'Poppins';
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    margin-top: 60px;

    ${Media.Laptop}{
        flex-direction: column;
        justify-content: center;
    }
`

export const BoxImg = styled.div`
    margin: 25px 0 25px 0;

    img{
        width: 450px;
        height: 350px;

        ${Media.Laptop}{
            width: 300px;
            height: 250px;
        }

        ${Media.MobileL}{
            width: 250px;
            height: 200px;
        }
    }
`

export const Category = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;

    h1{
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 5%;
    }

    p{
        font-size: 1.8rem;
        font-weight: 400;
    }
`

export const Measurements = styled.div`
    width: 100%;
    height: 100%;

`

export const Descriptions = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${(props) => props.theme.color};
 
    ${Media.Laptop}{
        align-items: center;
    }

    span{
        font-size: 2.2rem;
        font-weight: 500;        
    }

    p{
        width: 80%;
        font-size: 1.2rem;

        ${Media.Laptop}{
            text-align: left;
            width: 100%;
        }

        ${Media.MobileL}{
            font-size: 1.1rem;
        }

        ${Media.MobileM}{
            font-size: 0.8rem;
        }
    }
`

export const Table = styled.table`
    width: 100%;
    height: 100%;
  
    border-spacing: 25px 25px;

    ${Media.MobileM}{
        border-spacing: 20px 20px;
    }

    ${Media.MobileL}{
        border-spacing: 20px 15px;
    }
    
    thead{
        
        text-align: left; 
        color: ${(props) => props.theme.color};

        th{
            font-size: 1.2rem;

            ${Media.MobileL}{
                font-size: 0.6rem;
            }

            ${Media.MobileM}{
                font-size: 0.5rem;
            }
        }
    }

    ${Media.Laptop}{
        margin: 25px 0;
    }
`

export const Measure = styled.tr`   
    background-color: #384144;
    color: #F4F4F4;
   

    th:nth-child(1){
        background-color: #88CF5C;
    }

    th{
        font-size: 1.3rem;
        position: relative;
        width: 160px;
        height: 65px;
        
        ${Media.Laptop}{
            font-size: 1rem;
            width: 140px;
            height: 60px;   
        }

        ${Media.MobileL}{
            font-size: 0.8rem;
            width: 90px;
            height: 45px;
        }

        ${Media.MobileM}{
            width: 70px;
            font-size: 0.6rem;
            height: 45px;
        }


        &::before{
            position: absolute;
            content: 'X';
            font-size: 1rem;
            right: -20px;
            top: 20px;
            color: #121213;

            ${Media.MobileL}{
                font-size: 0.8rem;
                top: 12px;
                right: -15px;
            }

            ${Media.MobileM}{
                top: 10px;
                right: -15px;
            }

        }

        &:nth-child(3)::before{
                display: none;
        }
    }
`