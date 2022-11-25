import Button from 'Components/Button'
import Input from 'Components/Input'
import axios from 'axios'
import { useState } from 'react'
import * as C from './styles'

export default function FormsAddImg() {

    const [status, setStatus] = useState({
        type: '',
        active: false
    })
    const [imagem, setImagem] = useState('')

    const HandleClick = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('image', imagem);

            if(!imagem.length){
                setStatus({
                type: 'Envie alguma imagem ',
                active: false
            })
        }

        await axios.post("http://localhost:8080/", formData)
            .then((response) => {
                console.log(response)
                setStatus({
                    type: 'Imagem upada com sucesso',
                    active: false
                })
            }).catch((err) => {
                console.log(err)
                setStatus({
                    type: 'error',
                    active: false
                })
            });
    }

    return (
        <div>
            <C.Form onSubmit={() => HandleClick} encType="multipart/form-data">
                <Input
                    name="imagem"
                    type="file"
                    backgroundColor='#FFFFFF'
                    color='#555555'
                    onChange={(e: any) => setImagem(e.target.files[0])}
                />
                {status.type === 'sucess' ? (
                    <C.IsValid>Imagem upada com sucesso</C.IsValid>
                ) : (<p>{status.type}</p>)}

                <Button
                    type='submit'
                    primary
                    backgroundColor="#18A0FB"
                    txtColor='#FFF'
                    backgroundHover='#1983ca'
                >Enviar</Button>
            </C.Form>
        </div>
    )
}
