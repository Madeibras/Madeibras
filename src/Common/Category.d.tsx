import React, {createContext, useState} from "react";

type ContextProviderProps = {
    children: React.ReactNode
}

interface IOpcoes {
    id?: number,
    title?: string,
    img?: string
}

export interface ContextOpcoesPorps {
    active: IOpcoes |  null | boolean
    setActive:  React.Dispatch<React.SetStateAction<IOpcoes | boolean |null>>
    SelectFilter: (index: IOpcoes) => void
}

export const CategoryContext = createContext<ContextOpcoesPorps | null>(null)

export const CategoryProvider = ({children}: ContextProviderProps) => {

    const [active, setActive] = useState<IOpcoes | null | boolean>(null)

    const SelectFilter = (index: IOpcoes): void => {
        if(active !== index) {
            setActive(index)
        }else {
            setActive(null)
        }
    }

    
    return(
        <CategoryContext.Provider value={{active, setActive, SelectFilter}}>
            {children}
        </CategoryContext.Provider>
    )
}