import * as C from './style'
import  Card  from 'Mock/Card.json'
import InfoProducts from './InfoProducts'
import Salles from 'Mock/Salles.json'
import { useState } from 'react'
import { IProps } from 'Types/Card'
import { NavHashLink } from 'react-router-hash-link';

type Categorys = typeof Card[0]

const Product = ({id}: IProps) => {

    const [activeCategory, setActiveCategory] = useState<any>(false)

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
            <C.Container id={id}>
                {Card.map((item) => (
                   <NavHashLink to={`/Construcao/${item.link}`} key={item.id}>
                    <C.Box
                    onClick={() => selectFilter(item)}
                    isActive={activeCategory === item.id ? true : false}>
                        <C.Title> {item.name} </C.Title>
                        <img src={item.img} alt={item.img} />
                        <C.Button onClick={() => selectFilter(item)}> Ver Mais </C.Button>
                    </C.Box>
                    </NavHashLink>
                    ))}
                </C.Container>
            <InfoProducts SallesMenu={FilterSalles}  />
        </>
    )
}

export default Product