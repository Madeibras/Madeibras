import { Products } from 'Mock/ProductsRoof'
import * as C from './style'

const ProductsRoof = () => {
    return(
        <>
        <C.Container>
        {Products.map((item) => (
            <C.Box>
                <C.SubTitle>
                    <h2>Madeira Cambará</h2>
                </C.SubTitle>
                <C.CardProducts>
                    <C.BoxImg>
                        <img src={item.img} alt={item.title} />
                    </C.BoxImg>
                    <C.Title>
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