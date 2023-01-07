import * as C from './style'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { ISlide } from 'Types/ISlide'
import token from '../../../http/Token'

interface IProps {
    editImg: string
    setEditImg: React.Dispatch<React.SetStateAction<string>>
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    setList: React.Dispatch<React.SetStateAction<ISlide[]>>
    list: ISlide[]
}

const Slide = ({ editImg, setEditImg, setActive, setList, list }: IProps) => {

    const [url, setUrl] = useState('')

    const getImagens = async () => {
        try {
            const res = await axios.get("http://localhost:8080")
            setList(res.data.imagens)
            setUrl(res.data.url)
        } catch (erro) {
            console.log(erro)
        }
    }

    useEffect(() => {
        getImagens()
    }, [])

    const HandleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8080/${id}`)
                .then(() => {
                    setList(list.filter((item: any) => item.id !== id))
                })
        } catch (erro) {
            console.log(erro)
        }
    }

    const HandleEdit = (item: any) => {
        setActive(true)
        setEditImg({ ...item })
    }

    const carrousel = useRef<any | null>(null)

    const handleLeftClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        carrousel.current.scrollLeft -= carrousel.current.offsetWidth
    }

    const handleRightClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        carrousel.current.scrollLeft += carrousel.current.offsetWidth

        console.log(carrousel)
    }

    return (
        <C.Container>
            <C.Box ref={carrousel}>
                {list.map((item: any) => (
                    <C.CardImg key={item.id}>
                        <img src={item.image} alt='Foto Madeibras' />
                        {token != null &&
                            <C.divBtns>
                                <button title='Button' type='button' onClick={() => HandleDelete(item.id!)}> <BsFillTrashFill /> </button>
                                <button title='Button' type='button' onClick={() => HandleEdit(item)}> <BsPencilSquare /> </button>
                            </C.divBtns>
                        }
                    </C.CardImg>
                ))}
            </C.Box>
            <C.Buttons>
                <C.BtnLeft onClick={handleLeftClick}><MdKeyboardArrowLeft /></C.BtnLeft>
                <C.BtnRight onClick={handleRightClick}><MdKeyboardArrowRight /> </C.BtnRight>
            </C.Buttons>
        </C.Container>
    )
}

export default Slide