import { useEffect, useState } from "react"
import { AiOutlineArrowUp } from "react-icons/ai"
import * as C from './style'

const ButtonTopWidth = () => {

    const [backTop, setBackTop] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                setBackTop(true)
            }else{
                setBackTop(false)
            }
        })
    })

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",   
        })
    }
 
    return(
        <>
            {backTop && (
                <C.Button 
                type="button"
                onClick={() => scrollUp()}
            >
                <AiOutlineArrowUp/>
            </C.Button>
            )}
        </>
    )
}

export default ButtonTopWidth