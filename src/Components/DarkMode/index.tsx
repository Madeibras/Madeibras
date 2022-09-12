import { useState, useContext } from 'react'
import {RiMoonFill, RiSunFill} from 'react-icons/ri'
import { ThemeContext } from 'styled-components'
import * as C from './style'

export const DarkMode = () => {

    const [isOpen, setIsOpen] = useState(false)

    const {themeToggle} = useContext(ThemeContext)
    
    return (
    <C.BoxDarkMode onClick={() => themeToggle()}> 
        {isOpen ? <RiMoonFill/> : <RiSunFill/>} 
    </C.BoxDarkMode>
    )
} 

export default DarkMode