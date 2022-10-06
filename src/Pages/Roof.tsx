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


export default function Roof() {
    return (
        <div>
            <Header/>
            <HomeSlogan 
            img='Assets/img/telhaVetor.png'
            title="MADEIRA PARA TELHADO" 
            description="Atendimento online, com as melhores condições do mercado. Você ganha em qualidade, agilidade e maior eficiência para seus projeto"
            backgroundColorButton="#47c77c"
            backgroundColorHoverButton="#2b6461"
            />

            <Title name="NOSSO TRABALHO"/>
            <AboutWork/>

            <Title name="PRODUTOS"/>
            <ProductsRoof/>

            <Title name="GALERIA"/>
            <Gallery/>

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
    )
}