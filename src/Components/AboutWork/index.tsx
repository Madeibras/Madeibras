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
    {counter && (
        <C.Container >
            <C.Box>
                <img src='./Assets/Card/Calendario.svg' alt='' /> 
                <C.Description>
                    <h2> <CountUp start={0} end={44} duration={2} delay={0}/> anos</h2>
                    <p>Oferecendo as melhores soluções em madeiras desde 1978</p>
                </C.Description>
            </C.Box>
            <C.Box>
                <img src='./Assets/Card/Atendimento.svg' alt='' /> 
                <C.Description>
                    <h2 ><CountUp start={0} end={2500} duration={2} delay={0}/> <strong><BsArrowUpShort/></strong></h2>
                    <p>Atendimento ao cliente </p>
                </C.Description>
            </C.Box>
            <C.Box>
                <img src='./Assets/Card/Caminhaoo.svg' alt='' /> 
                <C.Description>
                    <h2><CountUp start={0} end={700} duration={2} delay={0}/> <strong><BsArrowUpShort/></strong></h2>
                    <p>Entregas na Grande São Paulo</p>
                </C.Description>
            </C.Box>
        </C.Container>
    )}
        
    </>
    )   
}

export default AboutWork