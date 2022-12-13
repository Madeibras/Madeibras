import Button from 'Components/Button'
import Input from 'Components/Input'
import Mensage from 'Components/Mensage'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import * as C from './style'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState<any>('')
    const [message, setmessage] = useState('')
    const [error, setError] = useState({
        errorEmail: false,
        email: '',
        errorNome: false,
        nome: '',
    })

    const form = useRef() as React.MutableRefObject<HTMLFormElement>;

    const CheckInputs = (e: any) => {
        setEmail(e.target.value)
        const emailRegex = /\S+@\S+\.\S+/
        if (!emailRegex.test(email)) setError({ ...error, errorEmail: true, email: 'Esse e-mail é inválido' })
        else if (emailRegex.test(email)) setError({ ...error, errorEmail: false })
    }

    const CheckInputName = (e: any) => {
        setName(e.target.value)
        const error = e.target.value
        error.length <= 3 ? setError({ ...error, errorNome: true, nome: 'Esse nome é inválido' }) : setError({ ...error, errorNome: false })
    }

    const HandleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (error.errorEmail == true) CheckInputs(e)

        if (error.errorNome == true) CheckInputName(e)

        else {
            emailjs.sendForm('gmailMensage', 'template_xa8omgd', form.current, '4UCQhegTUWSy_Ia7R')
                .then((result: any) => {
                    console.log("Mensagem enviada com sucesso", result);
                }, (error: any) => {
                    console.log(error.message);
                });
            setError({ ...error, errorEmail: false })
            setName('')
            setEmail('')
            setmessage('')
        }
    }

    const [active, setActive] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 5000) {
                setActive(true)
            } else {
                setActive(false)
            }
        })
    })

    return (
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
                            onChange={(CheckInputName)}
                        />
                        {error.errorNome && <C.IsValid>{error.nome}</C.IsValid>}

                        <Input
                            id='email'
                            name='email'
                            type='email'
                            placeHolder='Seu E-mail'
                            backgroundColor='#FFFFFF'
                            color='#555555'
                            value={email}
                            onChange={CheckInputs}
                        />
                        {error.errorEmail && <C.IsValid> {error.email}</C.IsValid>}

                        <Mensage
                            id='message'
                            name='message'
                            type='text'
                            rows={10}
                            placeHolder='Tire sua dúvida'
                            backgroundColor='#FFFFFF'
                            color='#555555'
                            value={message}
                            onChange={(e) => setmessage(e.target.value)}
                        />
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