import styled from "styled-components";
  
const Media = {
  Tablet: "@media(max-width: 768px)",
  MobileM: "@media(max-width: 375px)"
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Poppins";
  background-color: ${(props) => props.theme.body};

  img {
    width: 140px;
  }

  h1 {
    font-size: 3.7rem;
    font-weight: 700;

    ${Media.Tablet}{
      font-size: 3rem;
    }
  }

  span {
    font-size: 1.4rem;
    font-weight: 500;

    ${Media.Tablet}{
      text-align: center;
      font-size: 1.2rem
    }
  }

  ${Media.Tablet}{
    padding: 16px;
  }
`;

export const Btns = styled.div`
  a {
    color: ${(props) => props.theme.color};
  }

  button {
    width: 220px;
    border: 4px solid #8aab30;
    padding: 10px 6px;
    margin: 0px 30px;
    font-size: 1.3rem;
    border-radius: 16px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      transition: 0.2s all ease-in;
    }
  }

  ${Media.Tablet}{
    display: flex;
    flex-direction: column;

    button{
      width: 240px;
      margin: 12px;
    }
  }
`;

export const SocialMidia = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 2.2rem;
  color: #8aab30;

  a{
    color: #8aab30;
  }
`;
