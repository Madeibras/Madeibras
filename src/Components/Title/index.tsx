import { IProps } from 'Types/Card'
import * as C from './style'

const Title: React.FC <IProps> = ({ id , name}) => (
    <C.Container key={id}>
            <C.Icon src='Assets/Favicon/favicon.ico' alt='Icone do Madeibrás'/>
            <C.Txt> {name} </C.Txt>
    </C.Container>
)

export default Title