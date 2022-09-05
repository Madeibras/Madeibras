import DarkMode from 'Components/DarkMode'
import { Lists } from 'Mock/List'
import {Link} from 'react-router-dom'
import * as C from './style'

const Nav =  () => (
        <>
            {Lists.map((item) => (
                <C.Li key={item.id}>
                    <C.Icon> {item.icon} </C.Icon>  
                    <C.Span> <a href={item.link}>{item.name}</a> </C.Span>  
                </C.Li>  
            ))}
            <DarkMode/>
        </>
    )
    

export default Nav