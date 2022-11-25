import {BiTime} from 'react-icons/bi'
import {HiOutlineMail, HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlinePhone} from 'react-icons/ai'

export const Contact = [
    {
        id: 1,
        icon: <BiTime/>,
        name: "Funcionamento",
        description: "Seg a Sex - 8:00 - 18:00h",
        info: "Sábado - 8:00 - 13:00h",
        info2: "Domingo - FECHADO",
    },

    {
        id: 2,
        icon: <HiOutlineLocationMarker/>,
        name: "Localização",
        description: "Av. Atlântica, 660 - Socorro, São Paulo - SP, 04768-000",
    },
 
    {
        id: 3,
        icon: <HiOutlineMail/>,
        name: "E-mail",
        description: "contato@madeibras.com.br",
    },

    {
        id: 4,
        icon: <AiOutlinePhone/>,
        name: "Telefone",
        description: "(11) 5686-7244",
        info: "(11) 5547-7244",
        info2: "(11) 94756-4437",
    },

    
]