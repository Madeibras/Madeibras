import * as C from './style'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react'
import { ISlide } from 'Types/ISlide'
import token from '../../../http/Token'
import http from '../../../http'

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
            const res = await http.get("/newsGetAlls")
            setList(res.data.results)
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
            await http.delete(`/newsDelete/${id}`)
                .then(() => {
                    setList(list.filter((item) => item.id !== id))
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
<<<<<<< HEAD
                        <img src={item.image} alt='Foto Madeibras' />
=======
                        <img src={url + item.filename} alt='Foto Madeibras' />
>>>>>>> 7d1bc58 (upload images)
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