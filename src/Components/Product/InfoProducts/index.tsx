import * as C from './style'
import Salless from 'Mock/Salless.json'

const InfoProducts = () => {
    return (
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
       
           {Salless.map((item) => (
            <C.Box>
                <C.BoxImg>
                    <img src={item.img} alt={item.alt} />
                </C.BoxImg>
                <C.Table>
                    <thead>
                        <th>largura</th>
                        <th>Expessura</th>
                        <th>Comprimento</th>
                    </thead>
                    <tbody>
                        <C.Measure>
                            <th>{item.th1.thL}</th>
                            <th>{item.th1.thE}</th>
                            <th>{item.th1.thC}</th>
                        </C.Measure>
                        <C.Measure>
                            <th>30cm</th>
                            <th>30cm</th>
                            <th>30cm</th>
                        </C.Measure>
                        <C.Measure>
                            <th>30cm</th>
                            <th>30cm</th>
                            <th>30cm</th>
                        </C.Measure>
                    </tbody>
                </C.Table>
            </C.Box>
           ))}
        </C.Container>
    )
}

export default InfoProducts