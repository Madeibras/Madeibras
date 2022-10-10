import Button from 'Components/Button'
import { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import * as C from './style'

type ICards = typeof Cards[0]

const Cards = [
    {
        id: 1,
        img: 'Assets/Slide/Canteiro.png'        
    },

    {
        id: 2,
        img: 'Assets/Slide/Canteiro.png'
    },

    {
        id: 3,
        img: 'Assets/Slide/Canteiro.png'
    },

    {
        id: 4,
        img: 'Assets/Slide/Canteiro.png'
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

    
]

const Gallery = () => {

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
            <C.Box>
                {Cards.map((item, i) => (
                    <img
                    onClick={() => FilteredIndex(item)} 
                    key={i} src='Assets/Slide/Canteiro.png' alt="" />
                ))}
            </C.Box>  

            {active ? (
                <C.PoupUp>
                  
                    <C.CardPoupUp >
                       
                        {filterSalles.map((item: any) => (
                            <C.BoxImg key={item.id}>
                                <img src={item.img} alt={item.title} />  
                            </C.BoxImg>
                        ))}
                    </C.CardPoupUp>
                    <C.Actions>
                        <span onClick={() => setActive(false)}><AiFillCloseCircle /></span>
                        <Button type='button' onClick={() => {}}><FaArrowAltCircleLeft/></Button>
                        <Button type='button' onClick={() => {}}><FaArrowAltCircleRight/></Button>
                    </C.Actions>
                </C.PoupUp>
            ) : <></>}
        </C.Container>
    )
}

export default Gallery