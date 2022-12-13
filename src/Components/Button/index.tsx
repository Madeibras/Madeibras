import React from 'react'
import * as C from './styled'
import { Iprops } from './Types/IProps'

const Button: React.FC <Iprops> = ({ backgroundColor, txtColor, backgroundHover, children, boxShadow , primary, type,...rest}) => {
    return(
        <C.Button 
            type={type}
            primary={primary}
            boxShadow={boxShadow}
            backgroundHover={backgroundHover}
            txtColor={txtColor}
            backgroundColor={backgroundColor}
            {...rest}
        > {children} </C.Button>
    )
}

export default Button