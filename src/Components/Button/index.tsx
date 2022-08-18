import React from 'react'
import * as C from './styled'
import { Iprops } from './Types/IProps'

const Button: React.FC <Iprops> = ({ backgroundColor, txtColor, backgroundHover, children}) => {
    return(
        <C.Button backgroundHover={backgroundHover} txtColor={txtColor} backgroundColor={backgroundColor}> {children} </C.Button>
    )
}

export default Button