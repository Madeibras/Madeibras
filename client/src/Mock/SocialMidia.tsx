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
        url: 'https://www.facebook.com/madeibras/'
    },

    {
        id: 2,
        icon: <AiOutlineInstagram/>,
        url: 'https://www.instagram.com/madeibras/'
    },

    {
        id: 3,
        icon: <AiOutlineWhatsApp/>,
        url: 'https://api.whatsapp.com/send/?phone=5511947564437&text&type=phone_number&app_absent=0'
    }
]