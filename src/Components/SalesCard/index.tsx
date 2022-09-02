import {AiOutlineWhatsApp, AiOutlineMail} from 'react-icons/ai'
import * as C from './styled'

const SalesCard = () => (
    <C.Box>
        <C.Header>
            <C.Perfil src='Assets/Slide/Estoque.png' alt='' />
        </C.Header>
        <C.Info>
            <span>Gabriele</span>
            <p> Lorem Ipsum
            "Neque porro quisquam est qui dolorem ipsum quia
             dolor sit amet, consectetur, adipisci velit...</p>
        </C.Info>
        <C.BoxButton>
            <button> <AiOutlineWhatsApp/> </button>
            <button> <AiOutlineMail/> </button>
        </C.BoxButton>
    </C.Box>
)

export default SalesCard