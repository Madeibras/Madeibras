import * as C from './style'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'
import { Midia } from '../../../Mock/SocialMidia'
import { useContext } from 'react'
import { WhatsAppContext } from 'Common/WhatsApp.d'

interface IProps {
    Color?: string
}

const SocialMidia = ({ Color }: IProps) => {
    const Open = useContext(WhatsAppContext)

    const Midia: Midia[] = [
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
            onClick: () => Open?.openWhatsApp()
        }
    ]

    return (
        <C.Icons Color={Color}>
            {Midia.map((item) => (
                <a key={item.id} href={item.url} onClick={item.onClick} ><span> {item.icon} </span></a>
            ))}
        </C.Icons>
    )
}

export default SocialMidia