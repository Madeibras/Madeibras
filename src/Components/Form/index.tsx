import Button from 'Components/Button'
import Input from 'Components/Input'
import Mensage from 'Components/Mensage'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import * as C from './style'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setmessage] = useState('')
    const [error, setError] = useState('')
    
    const form = useRef<any>();

    console.log(name, email)

    const HandleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9•-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g

       if(emailRegex.test(email)) {
        emailjs.sendForm('gmailMensage', 'template_xa8omgd', form.current, '4UCQhegTUWSy_Ia7R')
          .then((result: any) => {
              console.log("Mensagem enviada com sucesso", result);
          }, (error: any) => {
              console.log(error.message);
          });
          setError('')
          setName('')
          setEmail('')
          setmessage('')
       }else if(!emailRegex.test(email) && email !== ''){
        setError('E-mail não é invalido')
       }
    }

    const [active, setActive] = useState(false)


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 5000){
                setActive(true)
            }else{
                setActive(false)
            }

            console.log(window.scrollY)
        })
    })
    

    return(
    <>
    {active && (
         <C.Container>
         <C.BoxImg>
             <img src='Assets/Slide/Form.png' alt='' />
         </C.BoxImg>
 
         <C.Form ref={form} onSubmit={HandleClick}>
             <Input 
                 id='name'
                 name='name'
                 type='text'
                 placeHolder='Seu nome'
                 backgroundColor='#FFFFFF'
                 color='#555555'
                 value={name}
                 onChange={(e) => setName(e.target.value)}
             />
             {error ? (
                 <C.IsValid>campo invalido</C.IsValid>
             ): (<>
             </>)}
 
             <Input 
                 id='email'
                 name='email'
                 type='email'
                 placeHolder='Seu E-mail'
                 backgroundColor='#FFFFFF'
                 color='#555555'
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
             />
             {error ? (
                 <C.IsValid>campo invalido</C.IsValid>
             ): (<>
             </>)}
 
             <Mensage 
                 id='message'
                 name='message'
                 rows={10}
                 placeHolder='Tire sua dúvida'
                 backgroundColor='#FFFFFF'
                 color='#555555'
                 value={message}
                 onChange={(e) => setmessage(e.target.value)}
             />
             {error ? (
                 <C.IsValid>campo invalido</C.IsValid>
             ): (<>
             </>)}
 
             <Button  
                 primary
                 backgroundColor="#18A0FB"
                 txtColor='#FFF'
                 backgroundHover='#1983ca'
             >Enviar</Button>
         </C.Form>
     </C.Container>
    )}
   
    </>
    )
}

export default Form 