import * as C from './style'

import { Midia } from '../../../Mock/SocialMidia'
import { Link } from 'react-router-dom'

const SocialMidia = () => {
    return(
            <C.Icons>
                {Midia.map((item) => (
                    <Link key={item.id} to={item.url} ><li > {item.icon} </li></Link>
                ))}
            </C.Icons>
    )
}


export default SocialMidia