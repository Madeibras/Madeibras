import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overflow-x: auto;
    margin-bottom: 10%;
`

export const CardImg = styled.div`
    width: 100%;
   scroll-snap-align: start;

   img{
    width: 100vw;
   }
`