import {Iinputs} from 'Types/input'
import * as C from './style'

const Mensage = ({
    backgroundColor, 
    color, 
    placeHolder, 
    value, 
    rows,
    type,
    id,
    name,
    onChange, 
    ...rest }: Iinputs) => (
    <C.Text 
        type={type}
        rows={rows}
        backgroundColor={backgroundColor}
        color={color}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        id={id}
        name={name} 
        {...rest}
    >    

    </C.Text>
)

export default Mensage 