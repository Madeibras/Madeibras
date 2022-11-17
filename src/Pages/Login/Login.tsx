import { useState } from 'react'
import * as C from './styles'

export default function Login() {

    const [form, setForm] = useState({
        email: '',
        senha: ''
    })

    const onChange = (e: any) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

  return (
    <>
    <img src="" alt="" />
    <C.Form>
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
            <C.Inputs>
                <label>Senha:</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Senha"
                    onChange={onChange}
                    value={form.senha}
                />
            </C.Inputs>
            <input type="submit" value="Entrar" />
    </C.Form>
    </>
  )
}
