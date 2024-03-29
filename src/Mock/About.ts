import { ISallesCard } from "Types/ISallesCard"


export const PinusCard: ISallesCard[] = [
    {
        id: 1,
        img: './Assets/Card/Tronco.svg',
        start: 0, 
        end: 200,
        Measure: "M3",
        subTitle: "Estoque a pronta-entrega"
    },

    {
        id: 2,
        img: './Assets/Card/Atendimento.svg',
        start: 0, 
        end: (2500),
        subTitle: "Agilidade no seu atendimento via WhatsApp"
    },

    {
        id: 3,
        img: './Assets/Card/Caminhao.svg',
        start: 0, 
        end: 700,
        subTitle: "Compromisso com prazo de entrega"
    },
]

export const RoofCard: ISallesCard[] = [
    {
        id: 1,
        img: './Assets/Card/Vector.svg',
        title: "Resistência",
        subTitle: "Madeiras com qualidade e procedência"
    },

    {
        id: 2,
        img: './Assets/Card/TelhadoVetor.svg',
        title: "Durabilidade",
        subTitle: "Telhas certificadas pela ABNT"
    },

    {
        id: 3,
        img: './Assets/Card/Acabamento.svg',
        title: "Acabamento",
        subTitle: "Aparelhamento nas quatros faces"
    },
]