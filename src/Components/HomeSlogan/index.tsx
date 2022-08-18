import Button from 'Components/Button'
import SocialMidia from 'Components/SocialMidia/Index'
import * as C from './style'
import Vectors from './Vectors'

export default function HomeSlogan() {
    return(
        <C.Container>
            <C.Box>           
                <C.H1>COMPRE ONLINE COM A MADEIBRÁS, SOLUÇÕES  E AGILIDADE PARA A SUA OBRA</C.H1>
                <Button 
                    backgroundColor='#77B74D'
                    txtColor='#fff'
                    backgroundHover='#5d7320'
                >Orçamento agora!</Button> 
                <SocialMidia/>
            </C.Box>
            <C.Vetor src='Assets/img/VetorMadeibras.png' alt=''/>
            <Vectors/>
        </C.Container>
    )
}