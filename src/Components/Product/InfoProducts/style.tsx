import styled from 'styled-components'

const Media = {
    Laptop: "@media(max-width: 1024px)",
    MobileL: "@media(max-width: 425px)",
    MobileS: "@media(max-width: 375px)"
}

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Box = styled.div`
    font-family: 'Poppins';
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

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
        margin-bottom: 10%;
    }

    p{
        font-size: 1.4rem;
        font-weight: 400;
        margin-bottom: 25%;
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
        position: relative;
        width: 125px;
        height: 80px;
        
        ${Media.Laptop}{
            width: 90px;
            height: 60px;   
        }

        ${Media.MobileL}{
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