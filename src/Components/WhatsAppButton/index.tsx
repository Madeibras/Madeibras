import { AiOutlineWhatsApp } from 'react-icons/ai'
import * as C from './style'

const WhatsAppButton = () => {
    return(
        <C.Button>
                <a href="https://wa.me/5511947564437" target="_blank"><AiOutlineWhatsApp/></a>
                <span> Orçamento</span>
        </C.Button>
    )
}


export default WhatsAppButton