import * as C from './style'
import { SlideImg } from 'Mock/Slide'
import { useRef } from 'react'

import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

const Slide = () => {

    const carrousel = useRef <HTMLInputElement | null>(null)

    const  handleLeftClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        console.log(carrousel.current)
    }

    const handleRightClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        
        //carrousel.current?.scrollLeft = carrousel.current?.offsetLeft
    }

    return(
        <C.Container>
            <C.Box  >
                {SlideImg.map((item) => (
                    <C.CardImg key={item.id}>
                        <img src={item.img} alt='asdasdasd' />
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