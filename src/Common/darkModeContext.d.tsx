import React, {useContext, useEffect, useState} from 'react'
import { ThemeProvider } from "styled-components";
import {themes} from './Theme/darkMode'

interface IContext {
  themeToggle: () => void
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = React.createContext<IContext | null>(null);

export const DarkThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState("light")

    function themeToggle() {
      setTheme(theme === "light" ? "dark" : "light")
    }

  return (
    <ThemeContext.Provider value={{theme, setTheme, themeToggle}}>
      <ThemeProvider theme={theme === "light" ? themes.light : themes.dark}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};