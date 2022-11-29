import * as C from './style'
import SlideImg from 'Mock/Slide.json'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const Slide = () => {

    const [list, setList] = useState([])
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
        try{
            await axios.delete(`http://localhost:8080/${id}`)
            .then(() => {
                setList(list.filter((item: any) => item.id !== id))
              })
        }catch (erro){
            console.log(erro)
        }
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
                {SlideImg.map((item: any) => (
                    <C.CardImg key={item.id}>
                        <img src={item.img} alt='Foto Madeibras' />
                        <button type='button' onClick={() => HandleDelete(item.id)}>Deletar</button>
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