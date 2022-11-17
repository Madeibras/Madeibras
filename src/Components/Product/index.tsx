import * as C from './style'
import  Card  from 'Mock/Card.json'
import InfoProducts from './InfoProducts'
import Salles from 'Mock/Salles.json'
import { useState } from 'react'
import { IProps } from 'Types/Card'
import { NavHashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom'
import MiniCard from 'Components/Cards/MiniCards'
import {BsFillDoorClosedFill} from 'react-icons/bs'
import { MdRoofing } from 'react-icons/md'

type Categorys = typeof Card[0]

const Product = ({id}: IProps) => {

    const Cards = [
        {
            icon: <MdRoofing />,
            title: 'TELHADOS',
            rota: '/Telhado'
        },

        {
            icon: <BsFillDoorClosedFill />,
            title: 'PORTAS',
            rota: '/Porta'
        }
    ]

    const navigate = useNavigate()
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
                {/* <C.SubTitle>Outros Produtos</C.SubTitle>
                <C.Cards>
                    {Cards.map(item =>  
                    <MiniCard 
                    title={item.title}
                    icon={item.icon}
                    onClick={() => navigate(item.rota)} />)}
                </C.Cards> */}
                
            <InfoProducts SallesMenu={FilterSalles}  />
        </>
    )
}

export default Product