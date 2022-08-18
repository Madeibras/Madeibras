import {MdHomeFilled, MdGroup, MdInventory, MdLocalPhone} from 'react-icons/md'


interface IList {
    id: number;
    name: string;
    icon: JSX.Element;
}

export const Lists: IList[] = [
    {
        id: 1,
        name: 'Inicio',
        icon: <MdHomeFilled/>
    },

    {
        id: 2,
        name: 'Sobre nós',
        icon: <MdGroup/>
    },
    {
        id: 3,
        name: 'Produto',
        icon: <MdInventory/>
    },

    {
        id: 4,
        name: 'Contato',
        icon: <MdLocalPhone/>
    }

]
