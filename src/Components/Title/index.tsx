import { IProps } from 'Types/NavBar'
import * as C from './style'

const Title: React.FC <IProps> = ({ id , name}) => (
    <C.Container>
            <C.Icon src='Assets/Favicon/favicon.ico' alt='Icone do Madeibrás'/>
            <C.Txt> {name} </C.Txt>
    </C.Container>
)

export default Title