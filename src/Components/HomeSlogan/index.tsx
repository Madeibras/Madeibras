import Button from 'Components/Button'
import SocialMidia from './SocialMidia/Index'
import {IProps} from './Types/Props'
import { useContext } from 'react'
import { WhatsAppContext } from '../../Common/WhatsApp.d'
import * as C from './style'


export default function HomeSlogan({title, description, img, backgroundVetor,backgroundColorButton, backgroundColorHoverButton, ColorIcons} :IProps) {

    const open = useContext(WhatsAppContext)

    return(
        <C.Container>
            <C.Box>           
                <C.H1>{title}</C.H1>
                <C.Description>{description}</C.Description>
                <Button 
                    backgroundColor={backgroundColorButton}
                    txtColor='#fff'
                    backgroundHover={backgroundColorHoverButton}
                    onClick={() => open?.openWhatsApp()}
                >Orçamento agora!
                </Button> 
                <SocialMidia Color={ColorIcons} />
            </C.Box>
            <C.Vetor src={img} alt='Vetor Madeibras'/>
            <img src="Assets/img/PilhaMadeira.png" alt="Vetor Madeira" />
            <img src="Assets/img/troncos.png" alt="Vetor Madeira" />
            <img src={backgroundVetor} alt="Background Madeibras" />
        </C.Container>
    )
}