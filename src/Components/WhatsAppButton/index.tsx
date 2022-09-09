import { AiOutlineWhatsApp } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import * as C from './style'

const WhatsAppButton = () => {

    const openWhatsApp = (url: string) =>{
        window.open(url, '_blank')
    }

    return(
        <C.Button>
                <C.Btn onClick={() => openWhatsApp('https://wa.me/5511947564437')}><AiOutlineWhatsApp/></C.Btn>
                <span>Orçamento</span>
        </C.Button>
    )
}


export default WhatsAppButton