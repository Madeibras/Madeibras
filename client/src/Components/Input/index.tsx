import React from "react"
import * as C from './style'
import { Iinputs } from 'Types/input'

const Input: React.FC <Iinputs> = ({
    type,
    backgroundColor, 
    color,
    placeHolder,
    value,     
    onChange,
    id,
    name,
    ...rest }) => (
            <C.Input 
                type={type}
                placeholder={placeHolder}
                backgroundColor={backgroundColor}
                color={color}
                value={value}
                onChange={onChange}
                id={id}
                name={name}
                {...rest}
            />
)

export default Input 