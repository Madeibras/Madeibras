import * as C from './style'

import  Card  from 'Mock/Card.json'

const Product = () => {
    return(
        <C.Container>
            {Card.map((item) => (
            <C.Box key={item.id}>
                <C.Title> {item.name} </C.Title>
                <img src={item.img} alt={item.img} />
                <C.Button>Ver Mais</C.Button>
             </C.Box>
            ))}
        </C.Container>
    )
}

export default Product