import AboutWork from "Components/AboutWork";
import Footer from "Components/Footer";
import Header from "Components/Header";
import HomeSlogan from "Components/HomeSlogan";
import Product from "Components/Product";
import Slide from "Components/Slide";
import Title from "Components/Title";
import { useState } from "react";

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
        <Title 
          name="PRODUTOS"
        />
          <Product/>
        <Title 
          name="NOSSAS AVALIAÇÕES COMPROVAM"
        />

        <Title 
          name="TIME DE VENDAS" 
        />

        <Title 
          name="CONTATOS" 
        />

        <Title 
          name="FALE CONOSCO" 
        />
      <Footer/>
    </>
  );
}

