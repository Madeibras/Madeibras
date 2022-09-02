import {AiOutlineWhatsApp, AiOutlineMail} from 'react-icons/ai'
import { SalesCards } from 'Mock/SalesCard'
import * as C from './styled'


const SalesCard = () => (
    <C.Container>
     {SalesCards.map((item) => (
        <C.Box key={item.id}>
            <C.Header>
                <C.Perfil src='Assets/Slide/Estoque.png' alt='' />
            </C.Header>
            <C.Info>
                <span>{item.name}</span>
                <p>{item.Info}</p>
            </C.Info>
            <C.BoxButton>
                <button> <AiOutlineWhatsApp/> </button>
                <button> <AiOutlineMail/> </button>
            </C.BoxButton>
        </C.Box>
     ))} 
    </C.Container>
)

export default SalesCard