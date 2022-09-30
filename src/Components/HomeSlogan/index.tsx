import Button from 'Components/Button'
import SocialMidia from './SocialMidia/Index'
import * as C from './style'



export default function HomeSlogan() {

    const openWhatsApp = (url: string) =>{
        window.open(url, '_blank')
        console.log(url)
    }

    return(
        <C.Container>
            <C.Box>           
                <C.H1>COMPRAR MADEIRA NUNCA FOI TÃO FACÍL</C.H1>
                <C.Description>Atendimento online, com as melhores condições do mercado. Você ganha em <span>qualidade</span>, <span>agilidade</span> e maior <span>eficiência</span> para seus projetos.</C.Description>
                <Button 
                    boxShadow='#ccc'
                    backgroundColor='#77B74D'
                    txtColor='#fff'
                    backgroundHover='#5d7320'
                    onClick={() => openWhatsApp('https://wa.me/5511947564437')}
                >Orçamento agora!</Button> 
                <SocialMidia/>
            </C.Box>
            <C.Vetor src='Assets/img/VetorMadeibras1.svg' alt=''/>
            <img src="Assets/img/Group 70.png" alt="Vetorização" />
            <img src="Assets/img/PilhaMadeira.png" alt="Vetor Madeira" />
            <img src="Assets/img/troncos.png" alt="Vetor Madeira" />
        </C.Container>
    )
}