import * as C from './style'
import  SlideImg  from 'Mock/Slide.json'
import { useRef } from 'react'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'


const Slide = () => {

    const carrousel = useRef <any | null>(null)
    const  handleLeftClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        carrousel.current.scrollLeft -= carrousel.current.offsetWidth
    }

    const handleRightClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
  
        carrousel.current.scrollLeft += carrousel.current.offsetWidth

        console.log(carrousel)
    }
      

    return(
        <C.Container>
            <C.Box ref={carrousel}>
                {SlideImg.map((item) => ( 
                    <C.CardImg key={item.img}>
                        <img src={item.img} alt='Foto Madeibras' />
                    </C.CardImg>
                ))}
            </C.Box>
            <C.Buttons>
                <C.BtnLeft onClick={handleLeftClick}><MdKeyboardArrowLeft/></C.BtnLeft>
                <C.BtnRight onClick={handleRightClick}><MdKeyboardArrowRight/> </C.BtnRight>
            </C.Buttons>
        </C.Container>
    )
}

export default Slide