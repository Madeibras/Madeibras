import { AiOutlineWhatsApp } from 'react-icons/ai'
import { Link } from 'react-router-dom'
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

const WhatsAppButton = () => {

    const getRandom = (min: number , max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const geRandom =  Numbers[getRandom(0, Numbers.length - 1)]

    const openWhatsApp = () =>{
        window.open(geRandom, '_blank')
        console.log(geRandom)
    }

    return(
        <C.Button>
                <C.Btn onClick={() => openWhatsApp()}><AiOutlineWhatsApp/></C.Btn>
                <span>Orçamento</span>
        </C.Button>
    )
}


export default WhatsAppButton