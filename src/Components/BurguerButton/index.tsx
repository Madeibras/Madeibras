import {MouseEvent, useRef} from 'react'

import * as C from './style'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean
}

export const BurguerButton: React.FC <IButton> = ({isActive, ...rest}) => {
    const history = useRef(null)
    
    console.log(history)
    return(
        <C.BoxButton
            ref={history}
            {...rest}
            isActive={isActive} >
                <span></span>
                <span></span>
                <span></span>    
        </C.BoxButton>
    )
}