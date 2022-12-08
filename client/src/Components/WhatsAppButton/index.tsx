import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useContext } from 'react'
import { WhatsAppContext } from 'Common/WhatsApp.d'
import * as C from './style'

const WhatsAppButton = () => {

    const Open = useContext(WhatsAppContext)

    return(
        <C.Button>
                <C.Btn type='button' id='botao-flutuante' onClick={() => Open?.openWhatsApp()}><AiOutlineWhatsApp/></C.Btn>
                <span>Orçamento</span>
        </C.Button>
    )
}


export default WhatsAppButton