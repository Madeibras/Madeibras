import styled from 'styled-components'

const Media = {
    Laptop: "@media(max-width: 1024px)",
    MobileL: "@media(max-width: 580px)",
    MobileS: "@media(max-width: 375px)"
}



export const Box = styled.div`
    font-family: 'Poppins';
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;

    ${Media.Laptop}{
        flex-direction: column;
        justify-content: center;
    }
`

export const BoxImg = styled.div`
    margin: 25px;

    img{
        width: 500px;
        height: 400px;

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
        font-size: 1.4rem;

        ${Media.Laptop}{
            text-align: center;
            width: 100%;
        }

        ${Media.MobileL}{
            font-size: 1.4rem;
        }

        ${Media.MobileS}{
            font-size: 1rem;
        }
    }    

    
`

export const Table = styled.table`
    width: 100%;
    height: 100%;
  
    border-spacing: 30px 40px;
    
    thead{
        text-align: left; 
        color: ${(props) => props.theme.color};

        th{
            font-size: 1.5rem;

            ${Media.MobileL}{
                font-size: 0.8rem;
            }

            ${Media.MobileS}{
                
                font-size: 0.7rem;
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
        font-size: 1.5rem;
        position: relative;
        width: 200px;
        height: 70px;
        
        ${Media.Laptop}{
            font-size: 1rem;
            width: 70px;
            height: 60px;   
        }

        ${Media.MobileL}{
            font-size: 1rem;
            width: 60px;
            height: 50px;
        }


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