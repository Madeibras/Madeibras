import * as C from './style'
import { Midia } from '../../../Mock/SocialMidia'

interface IProps {
    Color?: string
}

const SocialMidia = ({ Color }: IProps) => {
    return (
        <C.Icons Color={Color}>
            {Midia.map((item) => (
                <a key={item.id} href={item.url} ><span> {item.icon} </span></a>
            ))}
        </C.Icons>
    )
}

export default SocialMidia