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

export default function Home() {

  return (
    <div>
      <Header id="Home"/>
      <HomeSlogan 
        img='Assets/img/VetorMadeibras1.svg'
        title="COMPRAR MADEIRA NUNCA FOI TÃO FACÍL"
        description="Atendimento online, com as melhores condições do mercado. Você ganha em qualidade, agilidade e maior eficiência para seus projetos."
        backgroundColorButton="#77B74D"
        backgroundColorHoverButton="#517c34"
      />

        <Title 
         id="About"
        name="NOSSO TRABALHO"/>

        <AboutWork />

        <Title 
         id="About"
        name="ENTREGAS"/>
        <Slide/>
        
        <Title name="PRODUTOS"/>

        <Product id="Product"/>

        <Title name=" AVALIAÇÕES"/>
        <Depoiments/>

        <Title 
          name="TIME DE VENDAS" 
        />
        <SalesCard/>

        <Contacts id="Contact" />

        <Title name="FALE CONOSCO" />

        <Form />

        <ButtonTopWidth/>
        <WhatsAppButton/>
        <Cookies/>
      <Footer/>
    </div>
  );
}

