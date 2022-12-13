import { useState } from 'react'
import * as C from './styles'

export default function Login() {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState({
        errorEmail: false,
        errorPassword: false
    })

    const onChange = (e: any) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleClick = (e: any) => {
        e.preventDefault()
        
    }

  return (
    <>
    <C.Form onSubmit={handleClick}>
         <legend>Login</legend>
            <C.Inputs>
                <label>E-mail:</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder='E-mail'
                    onChange={onChange}
                    value={form.email}
                />
            </C.Inputs>
            {error.errorEmail && <p>Esse valor não pode ser vazio</p>}
            <C.Inputs>
                <label>password:</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="senha"
                    onChange={onChange}
                    value={form.password}
                />
            </C.Inputs>
            {error.errorPassword && <p>Esse valor não pode ser vazio</p>}
            <input type="submit" value="Entrar" />
    </C.Form>
    </>
  )
}
