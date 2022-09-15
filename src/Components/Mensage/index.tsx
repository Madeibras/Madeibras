import {Iinputs} from 'Types/input'
import * as C from './style'

const Mensage = ({
    backgroundColor, 
    color, 
    placeHolder, 
    value, 
    rows,
    type,
    onChange}: Iinputs) => (
    <C.Text 
        type={type}
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