import Button from 'Components/Button'
import Input from 'Components/Input'
import Mensage from 'Components/Mensage'
import { useState } from 'react'
import * as C from './style'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [texterea, setTexterea] = useState('')
    const [error, setError] = useState(false)
    
    console.log(name, email)

    const HandleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(name.length <= 4 || email.length <= 4 || texterea.length <= 10){
            setError(true)
        }else{
            setError(false)
        }
    }

    return(
    <C.Container>
        <C.BoxImg>
            <img src='Assets/Slide/Canteiro.png' alt='' />
        </C.BoxImg>

        <C.Form onSubmit={HandleClick}>
            <Input 
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
                type='email'
                placeHolder='Seu nome'
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
                rows={10}
                placeHolder='Tire sua dúvida'
                backgroundColor='#FFFFFF'
                color='#555555'
                value={texterea}
                onChange={(e) => setTexterea(e.target.value)}
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
    )
}

export default Form 