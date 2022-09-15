import {useEffect, useRef, useState} from 'react'
import {AiFillStar} from 'react-icons/ai'
import Depoiment from 'Mock/Depoiments.json'
import * as C from './style'

import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

const Depoiments = () => {

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
    
            <C.Container >
            <C.Box ref={carrousel}>
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
                    <button onClick={handleLeftClick}>{<MdKeyboardArrowLeft/>}</button>
                    <button onClick={handleRightClick}>{<MdKeyboardArrowRight/>}</button>
                </C.Buttons>
            </C.Container>
        )
}

export default Depoiments 