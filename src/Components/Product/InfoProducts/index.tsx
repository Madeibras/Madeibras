import * as C from './style'
import Salles from 'Mock/Salles.json'

const InfoProducts = () => {
    return (

        /*
        <C.Container>
            <C.Box>
                <C.BoxImg>
                    <img src="Assets/Sallers/Pinus.png" alt="" />
                </C.BoxImg>
                <C.Category>
                    <h1>PINUS VERDE</h1>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Não há ninguém que ame a dor por si só, que a busque e queira tê-la, simplesmente por ser dor..."</p>
                </C.Category>
            </C.Box>
        */
       <>
        {Salles.map((item) => (
            <C.Box>
                <C.BoxImg>
                   <img src={item.img} alt={item.alt}/>
                </C.BoxImg>
                <C.Table>
                    <thead>
                        {item.thead?.map((item) => (
                            <>
                                <th>{item.Largura}</th>
                                <th>{item.Expressura}</th>
                                <th>{item.Comprimento}</th>
                            </>
                        ))}
                      
                    </thead>
                    <tbody>
                        {item.tbody.map((item) => (
                            <C.Measure>
                                <th>{item.largura}</th>
                                <th>{item.expressura}</th>
                                <th>{item.comprimento}</th>
                            </C.Measure>
                        ))}
                    </tbody>
                </C.Table>
            </C.Box>
        ))}
    </>
    )
}

export default InfoProducts