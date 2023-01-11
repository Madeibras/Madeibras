import { WhatsAppContext } from 'Common/WhatsApp.d';
import * as C from './styles'
import { useContext } from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
export default function ThankPageForm() {

  const navigate = useNavigate();
  const Open = useContext(WhatsAppContext)

  return (
    <C.Container>
      <img src="Assets/img/Sucess.svg" alt="Logo" />
      <h1>OBRIGADO!</h1>
      <span>Entraremos em contato com você em breve. </span>
      <C.Btns>
        <button onClick={() => navigate('/construcao')} type='button'>Voltar</button>
        <a href={'https://catalogo-4yp3pk98s-xfirex157.vercel.app'} ><button type='button'>Catálogo</button> </a>
      </C.Btns>
      <C.SocialMidia>
        <a title='link facebook' href='https://www.facebook.com/madeibras/' >  <AiFillFacebook/> </a>
        <a title='link instagram' href='https://www.instagram.com/madeibras/' > <AiFillInstagram/> </a>
        <a><AiOutlineWhatsApp onClick={() => Open?.openWhatsApp()}/></a>
      </C.SocialMidia>
    </C.Container>
  )
}
