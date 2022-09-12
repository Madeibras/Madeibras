import React, {createContext, ReactNode, useEffect, useState} from 'react'
import { ThemeProvider } from 'styled-components'
import {LightMode, DarkMode} from './Theme/Theme'

interface ContextApi {
    children: ReactNode
}

export const ThemeContext = createContext({})

export const DarkThemeProvider = ({children}: ContextApi) => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "light")
    //const [theme, setTheme] = useState("light"))

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme]);


    function themeToggle() {
        setTheme(theme === "light" ? "dark" : "light")
    }


    return(
        <ThemeContext.Provider value={{theme, setTheme, themeToggle}}>
            <ThemeProvider theme={theme === 'light' ? LightMode : DarkMode}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}