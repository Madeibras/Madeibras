import {MdHomeFilled, MdGroup, MdInventory, MdLocalPhone} from 'react-icons/md'


export interface IList {
    id: number;
    name: string;
    icon: JSX.Element;
    link?: any
}

export const Lists: IList[] = [
    {
        id: 1,
        name: 'Inicio',
        icon: <MdHomeFilled/>,
        link: "#Home"
    },

    {
        id: 2,
        name: 'Sobre nós',
        icon: <MdGroup/>,
        link: "#About"
    },
    {
        id: 3,
        name: 'Produto',
        icon: <MdInventory/>,
        link: "#Product"
    },

    {
        id: 4,
        name: 'Contato',
        icon: <MdLocalPhone/>,
        link: "#Contact"
    }

]
