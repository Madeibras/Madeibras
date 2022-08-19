import { useState } from 'react'
import {RiMoonFill, RiSunFill} from 'react-icons/ri'
import * as C from './style'

export const DarkMode = () => {

    const [isOpen, setIsOpen] = useState(false)

    
    return (
    <C.BoxDarkMode onClick={() => setIsOpen(!isOpen)}> 
        {isOpen ? <RiMoonFill/> : <RiSunFill/>} 
    </C.BoxDarkMode>
    )
} 

export default DarkMode