import * as C from './style'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Cookies = () => {

    const [isActive, setActive] = useState<boolean>(false)

    useEffect(() => {   
        if(!localStorage.getItem('myCookies'))
        setTimeout(() => {
            setActive(true)
        }, 2000)

    }, [])

    const isCookies = () => {
        setActive(false)
        localStorage.setItem('myCookies', 'true')        
    }

    return(
       <>
        {isActive && (
             <C.Box>
             <C.Privacy>
                 <p>Ao clicar em "Aceitar todos os cookies", você concorda que a Stack Exchange pode guardar cookies no seu dispositivo e utilizar essas informações de acordo com a nossa <Link to="/" data-text="Política de Cookies">Política de Cookies.</Link></p>
             </C.Privacy>
             <C.BoxButton>
                 <C.Button primary>Configurações Cookies</C.Button>
                 <C.Button onClick={() => isCookies()}>Aceitar</C.Button>
             </C.BoxButton>
         </C.Box>
        )}
       </>
    )
}

export default Cookies