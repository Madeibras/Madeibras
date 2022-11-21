import Button from 'Components/Button'
import { useContext, useState } from 'react'
import { CarrouselContext } from 'Common/Carrousel.d'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { ImagensSlide } from 'Mock/Galery'
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

const Gallery = () => {

    const slideShow = useContext(CarrouselContext)

    const [active, setActive] = useState<number | boolean | null | ICards>(null)

    const FilteredIndex = (index: ICards) => {
        if (active !== index) {
            setActive(index.id)
        } else {
            setActive(null)

        }
    }

    const filterSalles = active ?
        ImagensSlide.filter((item: any) => item.category === active) : []

    return (
        <C.Container>
            <C.Box >
                {Cards.map((item) =>
                    <C.CardsInfo  onClick={() => FilteredIndex(item)}>
                        <img
                            key={item.id}
                            src={item.img} alt="" />
                        <p>{item.title}</p>
                    </C.CardsInfo>
                )}
            </C.Box>

            {active ? (
                <C.PoupUp>
                    <C.CardPoupUp ref={slideShow?.carrousel}>
                        {filterSalles.map((item: IImagensSlide) => (
                            <C.BoxImg key={item.id}>
                                <img src={item.img} alt="" />
                            </C.BoxImg>
                        ))}
                    </C.CardPoupUp>
                    <C.Actions>
                        <span onClick={() => setActive(false)}><AiFillCloseCircle /></span>
                        <Button type='button' onClick={slideShow?.handleLeftClick}><FaArrowAltCircleLeft /></Button>
                        <Button type='button' onClick={slideShow?.handleRightClick}><FaArrowAltCircleRight /></Button>
                    </C.Actions>
                </C.PoupUp>
            ) : <></>}
        </C.Container>
    )
}

export default Gallery