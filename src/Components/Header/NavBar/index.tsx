import DarkMode from 'Components/DarkMode'
import * as C from './style'
import { Lists } from 'Mock/List'
import { HashLink } from 'react-router-hash-link'
import { IProps } from 'Types/Card'
import ReactGa from 'react-ga'

const Nav = ({ id }: IProps) => {

    const filterNav = (item: string) => {
        ReactGa.event({
            category: item,
            action: 'Botao da navbar'
        })
    }

    return (
        <>
            {Lists.map((item) => (
                <C.Li key={item.id}>
                    <C.Icon> {item.icon} </C.Icon>
                    <C.Span> <HashLink to={`${id}/${item.link}`} onClick={() => filterNav(item.link)}>{item.name} </HashLink> </C.Span>
                </C.Li>
            ))}
            <DarkMode />
        </>
    )
}

export default Nav