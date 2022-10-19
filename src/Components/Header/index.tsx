import { useRef, useState } from 'react'
import * as C from './style'

import Nav from 'Components/Header/NavBar'

import { BurguerButton } from 'Components/Header/BurguerButton'
import { IProps } from 'Types/Card'

export default function Header({id, img}: IProps){

    const [isOpen, setIsOpen] = useState(false)

    return (
    <>
   
        <C.Header id={id}>
            <C.BoxImg>
                <img src={img} alt="Logo" />
                <img src="Assets/img/LogoBranca.png" alt="Logo" />
            </C.BoxImg>
            <C.Ul>
                <Nav id={id}/>  
            </C.Ul>
                
            <BurguerButton
                isActive={isOpen}
                onClick={() => setIsOpen(!isOpen)}/>

            {isOpen ? 
                <C.UlNav>
                    <Nav id={id}/>
                </C.UlNav>: <></>}
        </C.Header>
    </>
    )
}