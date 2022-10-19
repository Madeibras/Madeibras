import * as C from './style'
import  SlideImg  from 'Mock/Slide.json'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { useContext } from 'react'
import { CarrouselContext } from 'Common/Carrousel.d'

const Slide = () => {
      
    const slideShow = useContext(CarrouselContext)

    return(
        <C.Container>
            <C.Box ref={slideShow?.carrousel}>
                {SlideImg.map((item) => ( 
                    <C.CardImg key={item.id}>
                        <img src={item.img} alt='Foto Madeibras' />
                    </C.CardImg>
                ))}
            </C.Box>
            <C.Buttons>
                <C.BtnLeft onClick={slideShow?.handleLeftClick}><MdKeyboardArrowLeft/></C.BtnLeft>
                <C.BtnRight onClick={slideShow?.handleRightClick}><MdKeyboardArrowRight/> </C.BtnRight>
            </C.Buttons>
        </C.Container>
    )
}

export default Slide