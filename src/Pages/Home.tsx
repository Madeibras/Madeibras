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
import FormsAddImg from "Components/FormsAddImg";
import { PinusCard } from "Mock/About";
import token from "../http/Token";
import { useState } from "react";
import { ISlide } from "Types/ISlide";
import { Sliders } from "../Mock/Sliders";

export default function Home() {
  const [editImg, setEditImg] = useState("");
  const [active, setActive] = useState(false);
  const [list, setList] = useState<ISlide[]>([]);

  return (
    <div>
      <Header img="Assets/img/background.svg" id="/Construcao" />

      <HomeSlogan
        img="Assets/img/VetorMadeibras1.svg"
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
        name="NOSSO TRABALHO"
      />

      <AboutWork id="About" boxShadowColor="#A6CE39" SallesCard={PinusCard} />

      <Title img="Assets/Favicon/favicon.ico" name="ENTREGAS" />

      <Slide
        setEditImg={setEditImg}
        editImg={editImg}
        setActive={setActive}
        list={list}
        setList={setList}
      />

      <Title img="Assets/Favicon/favicon.ico" name="PRODUTOS" />

      <Product id="Product" />

      <Title img="Assets/Favicon/favicon.ico" name=" AVALIAÇÕES" />

      <Depoiments />

      <Title img="Assets/Favicon/favicon.ico" name="TIME DE VENDAS" />

      <SalesCard />

      <Contacts Color="#77B74D" ColorBorder="#77B74D" id="Contact" />

      <Title img="Assets/Favicon/favicon.ico" name="FALE CONOSCO" />

      <Form />
      {token != null && (
        <FormsAddImg
          list={list}
          setList={setList}
          editImg={editImg}
          setEditImg={setEditImg}
          active={active}
          setActive={setActive}
        />
      )}
      <ButtonTopWidth />
      <WhatsAppButton />
      <Cookies />
      <Footer />
    </div>
  );
}
