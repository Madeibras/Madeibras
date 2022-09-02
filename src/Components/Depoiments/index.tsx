import {AiFillStar} from 'react-icons/ai'
import Depoiment from 'Mock/Depoiments.json'
import * as C from './style'

const Depoiments = () => {
    return(
        <C.Box>
            {Depoiment.map((item) => (
                <C.Card key={item.id}>
                    <C.Header>
                        <span>{item.name}</span>
                        <C.Star>
                            <i> <AiFillStar/></i>
                            <i> <AiFillStar/></i>
                            <i> <AiFillStar/></i>
                            <i> <AiFillStar/></i>
                            <i> <AiFillStar/></i>
                        </C.Star>
                    </C.Header>
                    <C.Depoiment>
                        <p>{item.descriptin}</p>
                    </C.Depoiment>
                </C.Card>
            ))}
          
        </C.Box>
        )
}

export default Depoiments 