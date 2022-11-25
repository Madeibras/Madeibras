import React, {createContext, useState} from "react";

type ContextProviderProps = {
    children: React.ReactNode
}

interface IOpcoes {
    id?: number,
    title?: string,
    img?: string
    category?: string
}

export interface ContextOpcoesPorps {
    active: number |  null | boolean | IOpcoes
    setActive:  React.Dispatch<React.SetStateAction<IOpcoes| number | boolean | null>>
    SelectFilter: (index: IOpcoes) => void
}

export const CategoryContext = createContext<ContextOpcoesPorps | null>(null)

export const CategoryProvider = ({children}: ContextProviderProps) => {

    const [active, setActive] = useState<number |  boolean | IOpcoes | null>(null)

    const SelectFilter = (index: IOpcoes): void => {
        if(active !== index) {
            setActive(index)
        }else {
            setActive(false)
        }
    }
    
    return(
        <CategoryContext.Provider value={{active, setActive, SelectFilter}}>
            {children}
        </CategoryContext.Provider>
    )
}