import React, {createContext, useRef} from "react";

type ContextProviderProps = {
    children: React.ReactNode
}

interface ContextCarrouselPorps {
    handleLeftClick: any
    handleRightClick: any
    carrousel: any
}

export const CarrouselContext = createContext<ContextCarrouselPorps | null>(null)

export const CarrouselProvider = ({children}: ContextProviderProps) => {

    const carrousel = useRef <any | null>(null)

    const  handleLeftClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        carrousel.current.scrollLeft -= carrousel.current.offsetWidth
    }

    const handleRightClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        carrousel.current.scrollLeft += carrousel.current.offsetWidth

        console.log(carrousel)
    }

    return(
        <CarrouselContext.Provider value={{handleLeftClick, handleRightClick, carrousel}}>
            {children}
        </CarrouselContext.Provider>
    )
}