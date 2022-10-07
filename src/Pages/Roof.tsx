import AboutWork from "Components/AboutWork";
import ButtonTopWidth from "Components/ButtonTopWidth";
import Contacts from "Components/Contacts";
import Cookies from "Components/Cookies";
import Depoiments from "Components/Depoiments";
import Footer from "Components/Footer";
import Form from "Components/Form";
import Gallery from "Components/Galley";
import Header from "Components/Header";
import HomeSlogan from "Components/HomeSlogan";
import ProductsRoof from "Components/Product/ProductsRoof";
import SalesCard from "Components/SalesCard";
import Title from "Components/Title";
import WhatsAppButton from "Components/WhatsAppButton";
import { RoofCard } from "Mock/About";


export default function Roof() {
    return (
        <div>
            <Header 
            img="Assets/img/backgroundRoof.svg"
            id="Home"/>

            <HomeSlogan 
                img='Assets/img/telhaVetor.png'
                title="MADEIRA PARA TELHADO" 
                description="Atendimento online, com as melhores condições do mercado. Você ganha em qualidade, agilidade e maior eficiência para seus projeto."
                backgroundColorButton="#69E087"
                backgroundColorHoverButton="#48ad61"
                backgroundVetor="Assets/img/BackRoof.png"
                ColorIcons="#69E087"
            />

            <Title 
            img="Assets/Favicon/brasaoRoof.png"
            name="NOSSO TRABALHO"/>

            <AboutWork primary 
            boxShadowColor="#8FD993"
            SallesCard={RoofCard}/>

            <Title
            img="Assets/Favicon/brasaoRoof.png"
            name="PRODUTOS"/>

            <ProductsRoof/>

            <Title 
            img="Assets/Favicon/brasaoRoof.png"
            name="GALERIA"/>
            <Gallery/>

            <Title 
            img="Assets/Favicon/brasaoRoof.png"
            name=" AVALIAÇÕES"/>
            <Depoiments/>

            <Title 
            img="Assets/Favicon/brasaoRoof.png"
            name="TIME DE VENDAS" 
            />
            <SalesCard/>

            <Contacts 
            Color="#69E087"
            ColorBorder="#69E087"
            id="Contact" />

            <Title 
            img="Assets/Favicon/brasaoRoof.png"
            name="FALE CONOSCO" />

            <Form />

            <ButtonTopWidth/>
            <WhatsAppButton/>
            <Cookies/>
            <Footer/>
        </div>
    )
}