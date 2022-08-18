import AboutWork from "Components/AboutWork";
import Footer from "Components/Footer";
import Header from "Components/Header";
import HomeSlogan from "Components/HomeSlogan";
import Slide from "Components/Slide";
import Title from "Components/Title";

export default function Home() {
  return (
    <>
      <Header/>
      <HomeSlogan/>
        <Title 
          name="NOSSO TRABALHO"
        />
        <AboutWork/>
        <Slide/>
      <Footer/>
      
    </>
  );
}

