import { useState, useContext } from 'react'
import {RiMoonFill, RiSunFill} from 'react-icons/ri'
import { ThemeContext } from '../../Common/darkModeContext.d'

import * as C from './style'

export const DarkMode = () => {

    const appText = useContext(ThemeContext)

    const [active, setActive] = useState(false)

    return (
    <C.BoxDarkMode onClick={() => {
        setActive(!active)
        appText?.themeToggle()
        }}> 
        {active ?  <RiSunFill/> : <RiMoonFill/>} 
    </C.BoxDarkMode>
    )
} 

export default DarkMode