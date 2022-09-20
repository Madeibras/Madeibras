import * as C from './style'
import Salles from 'Mock/Salles.json'

type SallesCard = typeof Salles[0]

interface IProps {
    SallesMenu: SallesCard[]
}

const InfoProducts = ({SallesMenu}: IProps) => {

    return (
    <div>
        {SallesMenu.map((item: SallesCard) => (
            <C.Box>
                <C.BoxImg>
                   <img src={item.img} alt={item.alt}/>
                </C.BoxImg>
                <C.Measurements>
                    <C.Descriptions>
                        <span>{item.titulo}</span>
                        <p>{item.description}</p>
                    </C.Descriptions>
                    <C.Table>
                        <thead>
                            {item.thead?.map((item) => (
                                <>
                                    <th>{item.Largura}</th>
                                    <th>{item.Espessura}</th>
                                    <th>{item.Comprimento}</th>
                                </>
                            ))}
                        
                        </thead>
                        <tbody>
                            {item.tbody.map((item) => (
                                <C.Measure>
                                    <th>{item.largura}</th>
                                    <th>{item.Espessura}</th>
                                    <th>{item.comprimento}</th>
                                </C.Measure>
                            ))}
                        </tbody>
                    </C.Table>
                </C.Measurements>
            </C.Box>
        ))}
    </div>
    )
}

export default InfoProducts