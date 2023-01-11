import { useState } from 'react'
import * as C from './styles'
import http from '../../http'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(false)

    const onChange = (e: any) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleClick = async (e: any) => {
        e.preventDefault()

        if(!form.email.length || !form.password.length){
            setError(true)
        }else {
            await http.post('/login', {
                email: form.email,
                password: form.password
            }).then((response) => {
                console.log(response.data)
                sessionStorage.setItem('token', response.data.token)
                setForm({...form, email: '', password: ''})
                setError(false)
                setTimeout(() => {
                    navigate('/construcao')
                    window.location.reload()
                }, 500)
            }).catch((err) => {
                console.log(err)
                setError(true)
            })
        }
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
            {error && <p>Esse valor não pode ser vazio</p>}
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
            {error && <p>Esse valor não pode ser vazio</p>}
            <input type="submit" value="Entrar" />
    </C.Form>
    </>
  )
}
