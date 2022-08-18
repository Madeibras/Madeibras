import {MouseEvent} from 'react'

import * as C from './style'

type IButton = {
    onClick(e: MouseEvent<HTMLElement>): void
}

export const BurguerButton: React.FC <IButton> = ({onClick}) => {

    return(
        <C.BoxButton onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </C.BoxButton>
    )
}

   

    
