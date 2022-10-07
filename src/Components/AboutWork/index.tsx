import * as C from './style'
import CountUp from 'react-countup'
import { useEffect, useState } from 'react'

interface IProps {
    SallesCard?: any
    primary?: boolean
    boxShadowColor?: string
}

const AboutWork = ({SallesCard, primary, boxShadowColor}: IProps) => {

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
            {SallesCard.map((item: any) => (
                <C.Box boxShadowColor={boxShadowColor}>
                    <C.BoxImg>
                        <img src={item.img} alt={item.title} /> 
                    </C.BoxImg>
                    <C.Description primary={primary}>
                        <h2> <CountUp start={item.start} end={item.end} duration={2} delay={0}/></h2>
                        <h3>{item.title}</h3>
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