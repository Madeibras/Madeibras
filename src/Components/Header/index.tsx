import { useRef, useState } from 'react'
import * as C from './style'

import Nav from 'Components/Header/NavBar'

import { BurguerButton } from 'Components/Header/BurguerButton'

export default function Header(){

    const [isOpen, setIsOpen] = useState(false)

    return (
    <>
   
        <C.Header>
            <C.BoxImg>
                <img src="Assets/img/background.svg" alt="Logo" />
                <img src="Assets/img/LogoBranca.png" alt="Logo" />
            </C.BoxImg>
            <C.Ul>
                <Nav/>  
            </C.Ul>
                
            <BurguerButton
                isActive={isOpen}
                onClick={() => setIsOpen(!isOpen)}/>

            {isOpen ? 
                <C.UlNav>
                    <Nav/>
                </C.UlNav>: <></>}
        </C.Header>
    </>
    )
}