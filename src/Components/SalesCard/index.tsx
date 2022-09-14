import {AiOutlineWhatsApp, AiOutlineMail} from 'react-icons/ai'
import { SalesCards } from 'Mock/SalesCard'
import * as C from './styled'
import { useEffect, useState } from 'react'


const SalesCard = () => {

    const [active, setActive] = useState(false)


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 2900){
                setActive(true)
            }else{
                setActive(false)
            }

            console.log(window.scrollY)
        })
    })

    const open = (url: string) => {
        window.open(url, '_blank')
    }

    return(
    <>
    {active && (
          <C.Container>
          {SalesCards.map((item) => (
              <C.Box key={item.id}>
                  <C.Header>
                      <C.Perfil src='Assets/Slide/Estoque.png' alt='' />
                  </C.Header>
                  <C.Info>
                      <span>{item.name}</span>
                      <p>{item.Info}</p>
                  </C.Info>
                  <C.BoxButton>
                      <C.Btn onClick={() => open(item.WhatsApp)} > <AiOutlineWhatsApp/></C.Btn>
                      <C.Btn onClick={() => open(item.Email)}> <AiOutlineMail/> </C.Btn>
                  </C.BoxButton>
              </C.Box>
          ))} 
          </C.Container>
    )}
      
    </>
    )
}

export default SalesCard