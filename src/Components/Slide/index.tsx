import * as C from './style'
import { SlideImg } from 'Mock/Slide'
import { useRef } from 'react'

const Slide = () => {

    const carrousel = useRef <HTMLInputElement | null>(null)

    const  handleLeftClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        console.log(carrousel.current)
    }

    const handleRightClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        
        //carrousel.current.scrollLeft = carrousel.current?.offsetLeft
    }

    return(
        <>
            <C.Container ref={carrousel}>
                {SlideImg.map((item) => (
                    <C.CardImg key={item.id}>
                        <img src={item.img} alt='asdasdasd' />
                    </C.CardImg>
                ))}
            </C.Container>

            <div className='Buttons'>
                <button onClick={handleLeftClick}>Left</button>
                <button onClick={handleRightClick}>Right</button>
            </div>
        </>
    )
}

export default Slide