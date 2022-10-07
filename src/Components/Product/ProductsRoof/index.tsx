import { Products } from 'Mock/ProductsRoof'
import * as C from './style'

const ProductsRoof = () => {
    return(
        <>
        <C.Container>
        {Products.map((item) => (
            <C.Box>
                <C.CardProducts>
                    <C.BoxImg>
                        <img src={item.img} alt={item.title} />
                    </C.BoxImg>
                    
                    <C.Title>
                        <h2>Madeira Cambará</h2>
                        <p>{item.description}</p>
                    </C.Title>
                </C.CardProducts>
            </C.Box>
        ))}
            </C.Container>
        </>
    )
}

export default ProductsRoof