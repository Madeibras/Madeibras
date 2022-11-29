import DarkMode from 'Components/DarkMode'
import * as C from './style'
import { Lists } from 'Mock/List'
import { HashLink } from 'react-router-hash-link'
import { IProps } from 'Types/Card'

const Nav = ({id}: IProps) => (
        <>
            {Lists.map((item) => (
                <C.Li key={item.id}>
                    <C.Icon> {item.icon} </C.Icon>  
                    <C.Span> <HashLink to={`${id}/${item.link}`}>{item.name}</HashLink> </C.Span>  
                </C.Li>  
            ))}
            <DarkMode/>
        </>
    )
    

export default Nav