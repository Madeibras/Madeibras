import * as C from './style'
import {AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const imgs = [
    {
        img: "Assets/Pagaments/Pix.png",
    },
    {
        img: "Assets/Pagaments/Visa.png",
    },
    {
        img: "Assets/Pagaments/MasterCard.png",
    },
    {
        img: "Assets/Pagaments/Elo.png",
    },
    {
        img: "Assets/Pagaments/Rede.png",
    },
]

export default function Footer () {
    return(
        <C.Footer>  
            <C.Box>

                <C.Icons>
                    <Link to="Facebook madeibrás">
                        <li><AiOutlineFacebook/></li>
                    </Link>
                    <Link to="WhatsApp madeibrás">
                        <li><AiOutlineWhatsApp/></li>
                    </Link>
                    <Link to="Instagram madeibrás">
                        <li><AiOutlineInstagram/></li>
                    </Link>
                </C.Icons>

                <C.Img src='Assets/img/LogoBranca.png' alt='Logo' />

                <C.Pagaments>
                    <div>
                        <p>Formas de pagamentos:</p>
                            {imgs.map((item) => (
                                <img src={item.img} alt="" />
                            ))}
                    </div>
                </C.Pagaments>
            </C.Box>

            <C.terms>
                <p>Madeibras Madeira Brasileira Ltda.</p>
                <p>CNPJ: 50.614.999/0001-37</p>
                <p>© 2022 All rights reserved.</p>
            </C.terms>
        </C.Footer>
    )
}