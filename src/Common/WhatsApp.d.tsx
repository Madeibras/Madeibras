import React, {createContext} from "react";

type ContextProviderProps = {
    children: React.ReactNode
}

interface ContextWhatsAppProps {
    openWhatsApp: Function
}

export const WhatsAppContext = createContext<ContextWhatsAppProps | null>(null)

export const WhatsAppProvider = ({children}: ContextProviderProps) => {

    const Numbers = [
        //Romualdo
        'https://wa.me/5511958851545',
        //Gabriele
        'https://wa.me/5511940881707',
        //Joyce
        'https://wa.me/5511969760878',
        //Arthur
        'https://wa.me/5511934421941',
        //Rodrigo
        'https://wa.me/5511960189904',
    ]

    const getRandom = (min: number , max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const geRandom = Numbers[getRandom(0, Numbers.length - 1)]

    const openWhatsApp = () =>{
         window.open(geRandom, '_blank')  
    }


    return(
        <WhatsAppContext.Provider value={{openWhatsApp}}>
            {children}
        </WhatsAppContext.Provider>
    )
}