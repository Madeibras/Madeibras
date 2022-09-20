import Button from 'Components/Button'
import SocialMidia from './SocialMidia/Index'
import * as C from './style'
import Vectors from './Vectors'


export default function HomeSlogan() {

    const openWhatsApp = (url: string) =>{
        window.open(url, '_blank')
        console.log(url)
    }

    return(
        <C.Container>
            <C.Box>           
                <C.H1>COMPRAR MADEIRAS NUNCA FOI TÃO FACÍL. </C.H1>
                <C.Description>Atendimento online, com as melhores condições do mercado. Você ganha em qualidade, agilidade e maior eficiência para seus projetos</C.Description>
                <Button 
                    boxShadow='#ccc'
                    backgroundColor='#77B74D'
                    txtColor='#fff'
                    backgroundHover='#5d7320'
                    onClick={() => openWhatsApp('https://wa.me/5511947564437')}
                >Orçamento agora!</Button> 
                <SocialMidia/>
            </C.Box>
            <Vectors/>
            <C.Vetor src='Assets/img/VetorMadeibras.png' alt=''/>
        </C.Container>
    )
}