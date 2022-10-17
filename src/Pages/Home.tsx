import AboutWork from "Components/AboutWork";
import Contacts from "Components/Contacts";
import Depoiments from "Components/Depoiments";
import Footer from "Components/Footer";
import Form from "Components/Form";
import Header from "Components/Header";
import HomeSlogan from "Components/HomeSlogan";
import Product from "Components/Product";
import SalesCard from "Components/SalesCard";
import Slide from "Components/AboutWork/Slide";
import Title from "Components/Title";
import ButtonTopWidth from "Components/ButtonTopWidth";
import WhatsAppButton from "Components/WhatsAppButton";
import Cookies from "Components/Cookies";
import { PinusCard } from "Mock/About";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div>
      <Header 
      img="Assets/img/background.svg"
      id="Home"/>
      <HomeSlogan 
        img='Assets/img/VetorMadeibras1.svg'
        title="MADEIRAS PARA CONSTRUÇÃO"
        description="Atendimento online, com as melhores condições do mercado. Comprar madeiras nunca foi tão fácil."
        backgroundColorButton="#77B74D"
        backgroundColorHoverButton="#517c34"
        backgroundVetor="Assets/img/VetorHome.png"
        ColorIcons="#77B74D"
      />

      <Title 
        img="Assets/Favicon/favicon.ico"
        id="About"
        name="NOSSO TRABALHO"/>

      <AboutWork 
        boxShadowColor="#A6CE39"
        SallesCard={PinusCard}
      />

      <Title 
        img="Assets/Favicon/favicon.ico"
         id="About"
        name="ENTREGAS"
      />

      <Slide/>
      
      <Title 
        img="Assets/Favicon/favicon.ico"
        name="PRODUTOS"
      />

      <Product id="Product"/>

      <Title 
        img="Assets/Favicon/favicon.ico"
        name=" AVALIAÇÕES"
      />

      <Depoiments/>

      <Title 
        img="Assets/Favicon/favicon.ico"
        name="TIME DE VENDAS" 
      />

      <SalesCard/>

      <Contacts 
        Color="#77B74D"
        ColorBorder="#77B74D"
        id="Contact" 
      />

      <Title 
        img="Assets/Favicon/favicon.ico"
        name="FALE CONOSCO" 
      />

      <Form />

      <ButtonTopWidth/>
      <WhatsAppButton/>
      <Cookies/>
      <Footer/>
    </div>
  );
}

