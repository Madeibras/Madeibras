import * as C from './style'
import  Card  from 'Mock/Card.json'
import InfoProducts from './InfoProducts'
import Salles from 'Mock/Salles.json'
import { useEffect, useState } from 'react'

type Categorys = typeof Card[0]


const Product = () => {

    const [activeCategory, setActiveCategory] = useState<any>(undefined)
    const [active, setActive] = useState(false)


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 1500){
                setActive(true)
            }else{
                setActive(false)
            }

            console.log(window.scrollY)
        })
    })
    

    const selectFilter = (category: Categorys) => {
        if(activeCategory !== category){
            setActiveCategory(category.id)
            return;
        }else{
            setActiveCategory(null)
            return
        }
    }

    const FilterSalles = activeCategory ? 
    Salles.filter((item) => item.category === activeCategory) : []

    return(
        <>
            <C.Container >
                {Card.map((item) => (
                <C.Box
                onClick={() => selectFilter(item)}
                isActive={activeCategory === item.id ? true : false}
                key={item.id}>
                    <C.Title> {item.name} </C.Title>
                    <img src={item.img} alt={item.img} />
                    <C.Button onClick={() => selectFilter(item)}>Ver Mais</C.Button>
                </C.Box>
                ))}
                </C.Container>
            <InfoProducts SallesMenu={FilterSalles} />
        </>
    )
}

export default Product