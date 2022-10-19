import { useContext} from 'react'
import { CarrouselContext } from 'Common/Carrousel.d'
import {AiFillStar} from 'react-icons/ai'
import Depoiment from 'Mock/Depoiments.json'
import * as C from './style'

import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

const Depoiments = () => {

    const SlideShow = useContext(CarrouselContext)

    return(
    
            <C.Container >
                <C.Box ref={SlideShow?.carrousel}>
                    {Depoiment.map((item) => (
                        <C.Card key={item.id}>
                            <C.Header>
                                <span>{item.name}</span>
                                <C.Star>
                                    <i> <AiFillStar/></i>
                                    <i> <AiFillStar/></i>
                                    <i> <AiFillStar/></i>
                                    <i> <AiFillStar/></i>
                                    <i> <AiFillStar/></i>
                                </C.Star>
                            </C.Header>
                            <C.Depoiment>
                                <p>{item.descriptin}</p>
                            </C.Depoiment>
                        </C.Card>
                    ))}
                </C.Box>
                <C.Buttons>
                    <button onClick={SlideShow?.handleLeftClick}>{<MdKeyboardArrowLeft/>}</button>
                    <button onClick={SlideShow?.handleRightClick}>{<MdKeyboardArrowRight/>}</button>
                </C.Buttons>
            </C.Container>
        )
}

export default Depoiments 