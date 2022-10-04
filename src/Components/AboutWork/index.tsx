import * as C from './style'
import CountUp from 'react-countup'
import { useEffect, useState } from 'react'
import {BsArrowUpShort} from 'react-icons/bs'

const AboutWork = () => {

    const [counter, setCounter] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 200){
                setCounter(true)
            }else{
                setCounter(false)
            }

            console.log(window.scrollY)
        })
    })

    return(
    <>
    <C.H1>
        Há 44 anos oferecendo as melhores soluções em madeiras. 
    </C.H1>
    {counter && (
        <C.Container >
            <C.Box>
                <img src='./Assets/Card/tronco.svg' alt='' /> 
                <C.Description>
                    <h2> <CountUp start={0} end={200} duration={2} delay={0}/> m3</h2>
                    <p>Estoque de madeira à pronta entrega.</p>
                </C.Description>
            </C.Box>
            <C.Box>
                <img src='./Assets/Card/Atendimento.png' alt='' /> 
                <C.Description>
                    <h2 ><CountUp start={0} end={2500} duration={2} delay={0}/> <strong><BsArrowUpShort/></strong></h2>
                    <p>Agilidade no seu atendimento via WhatsApp. </p>
                </C.Description>
            </C.Box>
            <C.Box>
                <img src='./Assets/Card/Caminhaoo.svg' alt='' /> 
                <C.Description>
                    <h2><CountUp start={0} end={700} duration={2} delay={0}/> <strong><BsArrowUpShort/></strong></h2>
                    <p>Sua entrega mais rápida, com maior eficiência</p>
                </C.Description>
            </C.Box>
        </C.Container>
    )}
        
    </>
    )   
}

export default AboutWork