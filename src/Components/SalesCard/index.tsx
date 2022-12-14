import {AiOutlineWhatsApp, AiOutlineMail} from 'react-icons/ai'
import { SalesCards } from 'Mock/SalesCard'
import * as C from './styled'

const SalesCard = () => {

    const open = (url: string) => {
        window.open(url, '_blank')
    }

    return(
        <C.Container >
          {SalesCards.map((item) => (
              <C.Box key={item.id}>
                  <C.Header>
                      <C.Perfil src={item.img} alt={item.name}/>
                  </C.Header>
                  <C.Info>
                      <span>{item.name}</span>
                      <p>{item.Info}</p>
                  </C.Info>
                  <C.BoxButton>
                      {/* <C.Btn onClick={() => open(item.WhatsApp)} > <AiOutlineWhatsApp/></C.Btn>
                      <C.Btn onClick={() => open(item.Email)}> <AiOutlineMail/> </C.Btn> */}
                  </C.BoxButton>
              </C.Box>
          ))} 
        </C.Container>
    )
      
   
}

export default SalesCard