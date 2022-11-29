import Button from 'Components/Button'
import axios from 'axios'
import { useState } from 'react'
import * as C from './styles'
import { AiOutlineFileAdd } from 'react-icons/ai'

export default function FormsAddImg() {
    const [status, setStatus] = useState({
        type: '',
        color: '',
        active: false
    })
    const [imagem, setImagem] = useState<any>('')
    const [active, setActive] = useState(false)

    const HandleClick = async (e: any) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('image', imagem);

        if (!imagem.length) {
            setStatus({
                type: 'Envie alguma imagem ',
                color: 'red',
                active: false
            })
        }

        await axios.post("http://localhost:8080/", formData)
            .then((response) => {
                console.log(response)
                setStatus({
                    type: 'Imagem upada com sucesso',
                    color: 'green',
                    active: false
                })
            }).catch((err) => {
                console.log(err)
                setStatus({
                    type: 'error',
                    color: 'red',
                    active: false
                })
            });
    }

    return (
        <>
            {active && <C.Box>
                <C.Container>
                    <C.Form onSubmit={HandleClick} encType="multipart/form-data">
                        <C.RenderImg htmlFor="file">
                            {imagem ? <img src={URL.createObjectURL(imagem)} alt="" /> : <AiOutlineFileAdd />}
                        </C.RenderImg>
                        <input
                            id='file'
                            name="imagem"
                            type="file"
                            placeholder='file'
                            onChange={(e: any) => setImagem(e.target.files[0])}
                        />
                        {status.type === 'sucess' ? (
                            <C.IsValid validation={status.color}>{status.type}</C.IsValid>
                        ) : <C.IsValid validation={status.color}>{status.type}</C.IsValid>}

                        <Button
                            type='submit'
                            primary
                            backgroundColor="#18A0FB"
                            txtColor='#FFF'
                            backgroundHover='#1983ca'
                        >Enviar</Button>
                    </C.Form>
                </C.Container>
            </C.Box>
            }
            <C.Btn onClick={() => setActive(!active)}>+</C.Btn>
        </>
    )
}
