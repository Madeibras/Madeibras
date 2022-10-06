import Button from 'Components/Button'
import SocialMidia from './SocialMidia/Index'
import {IProps} from './Types/Props'
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


export default function HomeSlogan({title, description, img, backgroundColorButton, backgroundColorHoverButton} :IProps) {

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
                <C.H1>{title}</C.H1>
                <C.Description>{description}</C.Description>
                <Button 
                    backgroundColor={backgroundColorButton}
                    txtColor='#fff'
                    backgroundHover={backgroundColorHoverButton}
                    onClick={() => openWhatsApp()}
                >Orçamento agora!</Button> 
                <SocialMidia/>
            </C.Box>
            <C.Vetor src={img} alt=''/>
            <img src="Assets/img/Group 70.png" alt="Vetorização" />
            <img src="Assets/img/PilhaMadeira.png" alt="Vetor Madeira" />
            <img src="Assets/img/troncos.png" alt="Vetor Madeira" />
        </C.Container>
    )
}