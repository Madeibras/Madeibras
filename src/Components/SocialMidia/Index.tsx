import * as C from './style'

import { Midia } from '../../Mock/SocialMidia'
import { Link } from 'react-router-dom'

const SocialMidia = () => {
    return(
        <C.Icons>
            {Midia.map((item) => (
                <Link to={item.url}><li key={item.id}> {item.icon} </li></Link>
            ))}
        </C.Icons>
    )
}


export default SocialMidia