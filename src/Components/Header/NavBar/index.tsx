import DarkMode from 'Components/DarkMode'
import { Lists } from 'Mock/List'
import * as C from './style'

const Nav =  () => (
        <>
            {Lists.map((item) => (
                <C.Li key={item.id}>
                    <C.Icon> {item.icon} </C.Icon>  
                    <C.Span> {item.name} </C.Span>  
                </C.Li>  
            ))}
            <DarkMode/>
        </>
    )
    

export default Nav