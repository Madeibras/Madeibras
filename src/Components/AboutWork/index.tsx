import * as C from './style'

interface IProps {
    id: string
}

const AboutWork = ({id}: IProps) => (
    <C.Container id={id}>
        <C.Box>
            <img src='./Assets/Card/Calendario.svg' alt='' /> 
            <C.Description>
                <h2>44 anos</h2>
                <p>Oferecendo as melhores soluções em madeiras desde 1978</p>
            </C.Description>
        </C.Box>
        <C.Box>
            <img src='./Assets/Card/Atendimento.svg' alt='' /> 
            <C.Description>
                <h2>44 anos</h2>
                <p>Oferecendo as melhores soluções em madeiras desde 1978</p>
            </C.Description>
        </C.Box>
        <C.Box>
            <img src='./Assets/Card/Caminhaoo.svg' alt='' /> 
            <C.Description>
                <h2>44 anos</h2>
                <p>Oferecendo as melhores soluções em madeiras desde 1978</p>
            </C.Description>
        </C.Box>
    </C.Container>
)

export default AboutWork