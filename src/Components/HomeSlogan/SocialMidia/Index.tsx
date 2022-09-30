import * as C from './style'

import { Midia } from '../../../Mock/SocialMidia'
import { Link } from 'react-router-dom'

const SocialMidia = () => {
    return(
            <C.Icons>
                {Midia.map((item) => (
                    <a key={item.id} href={item.url} ><span> {item.icon} </span></a>
                ))}
            </C.Icons>
    )
}


export default SocialMidia