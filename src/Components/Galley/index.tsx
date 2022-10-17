import Button from 'Components/Button'
import { useRef, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import hexToRgba from 'hex-to-rgba'

import * as C from './style'

type ICards = typeof Cards[0]

const Cards = [
    {
        id: 1,
        img: 'Assets/Sallers/MadeiraCambara.jpg',
        title: "Vigamento Cambará"  
    },

    {
        id: 2,
        img: 'Assets/Sallers/TelhaOndulada.jpg',
        title: "Telha cerâmica"  
    },

    {
        id: 3,
        img: 'Assets/Sallers/TelhaFibrocimento.jpg',
        title: "Telha ondulada"  
    },

    {
        id: 4,
        img: 'Assets/Sallers/ForroSerrado.jpg',
        title: "Forro De Madeira"  
    }
]

const ImagensSlide = [
    {
        id: 1,
        title: "",
        img: 'Assets/Slide/Canteiro.png',     
        category: 1
    },

    {
        id: 2,
        title: "",
        img: 'Assets/Slide/Canteiro.png',
        category: 2
    },

    {
        id: 3,
        title: "",
        img: 'Assets/Slide/Canteiro.png',
        category: 3
    },

    {
        id: 4,
        title: "",
        img: 'Assets/Slide/Canteiro.png',
        category: 4
    },

    {
        id: 5,
        title: "dasdasdasd",
        img: 'Assets/Slide/Canteiro3.png',
        category: 4
    },

    {
        id: 6,
        title: "dasdasdasd",
        img: 'Assets/Slide/Canteiro3.png',
        category: 4
    },

    {
        id: 7,
        title: "dasdasdasd",
        img: 'Assets/Slide/Canteiro3.png',
        category: 2
    },

    
]

const Gallery = () => {

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

    const [active, setActive] = useState< number | boolean | null | ICards>(null)

    const FilteredIndex = (index: ICards) => {
        if(active !== index){
            setActive(index.id)
            return
        }else {
            setActive(null)
            return
        }
    }

    const filterSalles = active ? 
    ImagensSlide.filter((item: any) =>  item.category === active) : []


    return(
        <C.Container>
            <C.Box >
                {Cards.map((item, i) => (
                    <C.CardsInfo  >
                        <img 
                        onClick={() => FilteredIndex(item)} 
                        key={i} src={item.img} alt="" />
                        <p>{item.title}</p>
                    </C.CardsInfo>
                ))}
            </C.Box>  

            {active ? (
                <C.PoupUp>
                    <C.CardPoupUp ref={carrousel}>
                        {filterSalles.map((item: any) => (
                            <C.BoxImg key={item.id}>
                                <img src={item.img} alt={item.title} />  
                            </C.BoxImg>
                        ))}
                    </C.CardPoupUp>
                    <C.Actions>
                        <span onClick={() => setActive(false)}><AiFillCloseCircle /></span>
                        <Button type='button' onClick={handleLeftClick}><FaArrowAltCircleLeft/></Button>
                        <Button type='button' onClick={handleRightClick}><FaArrowAltCircleRight/></Button>
                    </C.Actions>
                </C.PoupUp>
            ) : <></>}
        </C.Container>
    )
}

export default Gallery