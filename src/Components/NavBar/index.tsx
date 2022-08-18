import { Lists } from 'Mock/List'
import { IProps } from 'Types/NavBar'
import * as C from './style'

const Nav: React.FC <IProps> =  ({id ,name, icon}) => (

    <C.Ul>
        {Lists.map((item) => (
        <C.Li key={item.id}>
            <C.Icon> {item.icon} </C.Icon>  
            <C.Span> {item.name} </C.Span>  
        </C.Li>  
        ))}
    </C.Ul>
    )
    

export default Nav