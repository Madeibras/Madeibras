import * as C from './style'
import  Card  from 'Mock/Card.json'
import InfoProducts from './InfoProducts'
import Salles from 'Mock/Salles.json'
import { useEffect, useState } from 'react'

type Categorys = typeof Card[0]

interface IProps {
    id: string
}

const Product = ({id}: IProps) => {

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

    const selectFilter = (category: any) => {
        if(activeCategory !== category){
            setActiveCategory(category.id)
            return;
        }else{
            setActiveCategory(null)
            return
        }
    }

    const FilterSalles = activeCategory ? 
    Salles.filter((item: any) => item.category === activeCategory) : []

    return(
        <>
        {active && (
            <>
            <C.Container id={id}>
                {Card.map((item) => (
                <C.Box
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
        )}
          
        </>
    )
}

export default Product