import {Iinputs} from 'Types/input'
import * as C from './style'

const Mensage = ({
    backgroundColor, 
    color, 
    placeHolder, 
    value, 
    rows,
    onChange}: Iinputs) => (
    <C.Text 
        rows={rows}
        backgroundColor={backgroundColor}
        color={color}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
    >    

    </C.Text>
)

export default Mensage 