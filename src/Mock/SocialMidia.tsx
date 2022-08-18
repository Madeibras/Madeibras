import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'

interface Midia {
    id: number
    icon: JSX.Element
    url: string
}


export const Midia: Midia[] = [
    {
        id: 1,
        icon: <AiOutlineFacebook/>,
        url: '/'
    },

    {
        id: 2,
        icon: <AiOutlineInstagram/>,
        url: '/'
    },

    {
        id: 3,
        icon: <AiOutlineWhatsApp/>,
        url: '/'
    }
]