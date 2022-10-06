import * as C from './style'
import CountUp from 'react-countup'
import { useEffect, useState } from 'react'
import { PinusCard } from 'Mock/About'

interface IProps {
    RenderCard?: any
}

const AboutWork = ({RenderCard}: IProps) => {

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
        <C.Container>
            {PinusCard.map((item: any) => (
                <C.Box>
                    <img src={item.img} alt='' /> 
                    <C.Description>
                        <h2> <CountUp start={item.start} end={item.end} duration={2} delay={0}/></h2>
                        <p>{item.subTitle}</p>
                    </C.Description>
                </C.Box>
            ))}
           
        </C.Container>
    )}
        
    </>
    )   
}

export default AboutWork