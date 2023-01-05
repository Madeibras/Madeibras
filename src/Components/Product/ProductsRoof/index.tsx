import { Products } from 'Mock/ProductsRoof'
import { IProps } from 'Types/Card'
import { HashLink } from 'react-router-hash-link'
import * as C from './style'



const ProductsRoof = ({ id }: IProps) => {
    return (
        <>
            <C.Container id={id}>
                {Products.map((item) => (
                    <C.Box>
                        <HashLink to={`${'#' + id}/${item.link}`}>
                            <C.CardProducts>
                                <C.BoxImg>
                                    <img src={item.img} alt={item.title} />
                                </C.BoxImg>
                                <C.Title>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </C.Title>
                            </C.CardProducts>
                        </HashLink>
                    </C.Box>
                ))}
            </C.Container>
        </>
    )
}

export default ProductsRoof