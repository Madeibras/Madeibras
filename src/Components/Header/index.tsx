import { useState } from 'react'
import * as C from './style'

import Nav from 'Components/NavBar'

import { BurguerButton } from 'Components/BurguerButton'

export default function Header(){

    const [isOpen, setIsOpen] = useState(false)

    return (
    <>
   
        <C.Header>
            <C.BoxImg>
                <img src="Assets/img/background.svg" alt="Logo" />
                <img src="Assets/img/LogoBranca.png" alt="Logo" />
            </C.BoxImg>

            {isOpen && <Nav/>}
            
            <BurguerButton onClick={() => setIsOpen(!isOpen)}/>
        </C.Header>
    </>
    )
}