import React from 'react'
import * as C from './styled'
import { Iprops } from './Types/IProps'

const Button: React.FC <Iprops> = ({ backgroundColor, txtColor, backgroundHover, children, boxShadow , primary}) => {
    return(
        <C.Button 
            primary={primary}
            boxShadow={boxShadow} 
            backgroundHover={backgroundHover} 
            txtColor={txtColor} 
            backgroundColor={backgroundColor}
        > {children} </C.Button>
    )
}

export default Button