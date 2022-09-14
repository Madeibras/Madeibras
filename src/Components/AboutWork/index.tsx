import * as C from './style'
import CountUp from 'react-countup'
import { useEffect, useState } from 'react'

    interface IProps {
        id: string
    }

const AboutWork = ({id}: IProps) => {

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
        <C.Container id={id}>
            <C.Box>
                <img src='./Assets/Card/Calendario.svg' alt='' /> 
                <C.Description>
            
                    <h2> <CountUp start={0} end={44} duration={2} delay={0}/></h2>
                    <p>Oferecendo as melhores soluções em madeiras desde 1978</p>
                </C.Description>
            </C.Box>
            <C.Box>
                <img src='./Assets/Card/Atendimento.svg' alt='' /> 
                <C.Description>
                    <h2 ><CountUp start={0} end={44} duration={2} delay={0}/></h2>
                    <p>Oferecendo as melhores soluções em madeiras desde 1978</p>
                </C.Description>
            </C.Box>
            <C.Box>
                <img src='./Assets/Card/Caminhaoo.svg' alt='' /> 
                <C.Description>
                    <h2><CountUp start={0} end={44} duration={2} delay={0}/></h2>
                    <p>Oferecendo as melhores soluções em madeiras desde 1978</p>
                </C.Description>
            </C.Box>
        </C.Container>
    )}
        
    </>
    )   
}

export default AboutWork