import { IProps } from 'Types/Card'
import * as C from './style'

const Title: React.FC <IProps> = ({ id ,name, img}) => (
    <C.Container id={id}>
            <C.Icon src={img} alt='Icone do Madeibrás'/>
            <C.Txt> {name} </C.Txt>
    </C.Container>
)

export default Title