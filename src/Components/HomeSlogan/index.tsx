import Button from 'Components/Button'
import SocialMidia from './SocialMidia/Index'
import * as C from './style'
import Vectors from './Vectors'

interface IProps {
    id: string
}

export default function HomeSlogan({id}: IProps) {
    return(
        <C.Container id={id}>
            <C.Box>           
                <C.H1>COMPRE ONLINE COM A MADEIBRÁS, SOLUÇÕES  E AGILIDADE PARA SUA OBRA</C.H1>
                <Button 
                    boxShadow='#ccc'
                    backgroundColor='#77B74D'
                    txtColor='#fff'
                    backgroundHover='#5d7320'
                >Orçamento agora!</Button> 
                <SocialMidia/>
            </C.Box>
            <Vectors/>
            <C.Vetor src='Assets/img/VetorMadeibras.png' alt=''/>
        </C.Container>
    )
}