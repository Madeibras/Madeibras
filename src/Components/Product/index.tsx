import * as C from './style'
import  Card  from 'Mock/Card.json'
import InfoProducts from './InfoProducts'

interface IProps {
    id: string
}


const Product = ({id}: IProps) => {
    return(
        <>
            <C.Container id={id}>
                {Card.map((item) => (
                <C.Box key={item.id}>
                    <C.Title> {item.name} </C.Title>
                    <img src={item.img} alt={item.img} />
                    <C.Button>Ver Mais</C.Button>
                </C.Box>
                ))}
            </C.Container>
        </>
    )
}

export default Product