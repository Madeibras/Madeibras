import Button from 'Components/Button'
import SocialMidia from './SocialMidia/Index'
import * as C from './style'

const Numbers = [
    //Romualdo
    'https://wa.me/5511958851545',
    //Gabriele
    'https://wa.me/5511940881707',
    //Joyce
    'https://wa.me/5511969760878',
    //Arthur
    'https://wa.me/5511934421941',
    //Rodrigo
    'https://wa.me/5511960189904',
]


export default function HomeSlogan() {

    const getRandom = (min: number , max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const geRandom = Numbers[getRandom(0, Numbers.length - 1)]


    const openWhatsApp = () =>{
        window.open(geRandom, '_blank')
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
                    onClick={() => openWhatsApp()}
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