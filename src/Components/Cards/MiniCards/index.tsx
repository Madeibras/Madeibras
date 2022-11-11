import React from "react"
import * as C from './style'

import { IMiniCards } from "Types/MiniCards"

const MiniCard = ({icon, title, onClick}: IMiniCards) => {
    return (
        <C.Box onClick={onClick}>
           <C.Icon>
                {icon}
           </C.Icon>
           <C.Title>
                <span>{title}</span>
           </C.Title>
        </C.Box>
    )
}

export default MiniCard