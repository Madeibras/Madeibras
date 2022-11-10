import Button from 'Components/Button'
import { useContext, useState } from 'react'
import { CarrouselContext } from 'Common/Carrousel.d'
import { AiFillCloseCircle } from 'react-icons/ai'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
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

type IImagensSlide = typeof ImagensSlide[0]

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

     const slideShow = useContext(CarrouselContext)
    
    const [active, setActive] = useState< number | boolean | null | ICards>(null)

    const FilteredIndex = (index: ICards) => {
        if(active !== index){
            setActive(index.id)
        }else {
            setActive(null)
    
        }
    }

    const filterSalles = active ? 
    ImagensSlide.filter((item: any) =>  item.category === active) : []

    return(
        <C.Container>
            <C.Box >
                {Cards.map((item) => 
                    <C.CardsInfo  >
                        <img 
                        onClick={() => FilteredIndex(item)} 
                        key={item.id}
                        src={item.img} alt={item.title} />
                        <p>{item.title}</p>
                    </C.CardsInfo>
                )}
            </C.Box>  

            {active ? (
                <C.PoupUp>
                    <C.CardPoupUp ref={slideShow?.carrousel}>
                        {filterSalles.map((item: IImagensSlide) => (
                            <C.BoxImg key={item.id}>
                                <img src={item.img} alt={item.title} />  
                            </C.BoxImg>
                        ))}
                    </C.CardPoupUp>
                    <C.Actions>
                        <span onClick={() => setActive(false)}><AiFillCloseCircle /></span>
                        <Button type='button' onClick={slideShow?.handleLeftClick}><FaArrowAltCircleLeft/></Button>
                        <Button type='button' onClick={slideShow?.handleRightClick}><FaArrowAltCircleRight/></Button>
                    </C.Actions>
                </C.PoupUp>
            ) : <></>}
        </C.Container>
    )
}

export default Gallery