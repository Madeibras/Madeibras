import * as C from './style'

import {Contact} from 'Mock/Contacts'

interface IProps {
    id: string
}

const Contacts = ({id}: IProps) => (
    <>
        <C.Container id={id}>
            {Contact.map((item) => (
                <C.Box key={item.id}>
                    <C.Icon> {item.icon} </C.Icon>
                    <C.Name> {item.name} </C.Name>
                    <C.Description> {item.description} </C.Description>
                </C.Box>
            ))}
           
        </C.Container>
        <C.Iframe>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14616.504228574675!2d-46.7124535!3d-23.6714496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed9466ea5678f56f!2sMadeibr%C3%A1s%20Madeira%20Brasileira!5e0!3m2!1spt-BR!2sbr!4v1661180882864!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
        </C.Iframe>
    </>
)


export default Contacts