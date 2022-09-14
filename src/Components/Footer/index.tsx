import * as C from './style'
import {AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Footer () {
    return(
        <C.Footer>  
            <C.Box>
                <C.Img src='Assets/img/LogoBranca.png' alt='Logo' />
                <C.Icons>
                    <Link to="">
                        <li><AiOutlineFacebook/></li>
                    </Link>
                    <Link to="">
                        <li><AiOutlineWhatsApp/></li>
                    </Link>
                    <Link to="">
                        <li><AiOutlineInstagram/></li>
                    </Link>
                </C.Icons>
                <p>© 2022 All rights reserved.</p>
            </C.Box>
        </C.Footer>
    )
}