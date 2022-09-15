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

export default function Home() {

  return (
    <div>
      <Header/>
      <HomeSlogan/>
        <Title 
          
          id="Home"
          name="NOSSO TRABALHO"
        />
        <AboutWork />
        <Slide/>
        
        <Title 
          id="about"
          name="PRODUTOS"
        />
        <Product />

        <Title 
           id="Product"
          name="AVALIAÇÕES"
        />
        <Depoiments/>

        <Title 
          name="TIME DE VENDAS" 
        />
        <SalesCard/>

        <Title 
          id="Contact"
          name="CONTATOS" 
        />
        <Contacts />

        <Title 
          
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

