import * as C from './styles'
import Button from 'Components/Button'
import axios from 'axios'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { useState } from 'react'
import { ISlide } from 'Types/ISlide'

interface IProps {
    editImg: any
    setEditImg: React.Dispatch<React.SetStateAction<string>>
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    active: boolean
    setList: React.Dispatch<React.SetStateAction<ISlide[]>>
    list: ISlide[]
}

export default function FormsAddImg({ editImg, setEditImg, setActive, active, list, setList }: IProps) {
    const [status, setStatus] = useState({
        type: '',
        color: '',
        active: false
    })
    const [imagem, setImagem] = useState<any>('')

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
        if (editImg) {
            await axios.put(`http://localhost:8080/${editImg.id}`, formData)
                .then((response) => {
                    console.log(response.data)
                    setStatus({
                        type: 'sucess',
                        color: 'green',
                        active: false
                    })
                    setList(list.map((item, index) => editImg.id === index ? response.data : item))
                }).catch((err) => console.log(err))
        } else {
            await axios.post("http://localhost:8080/", formData)
                .then((response) => {
                    console.log(response)
                    setStatus({
                        type: 'sucess',
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

    }

    return (
        <>
            {active && <C.Box>
                <C.Container>
                    <C.Form onSubmit={HandleClick} encType="multipart/form-data" method='POST'>
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
