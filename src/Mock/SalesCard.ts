interface ISalesCards {
    id: number
    img: string
    name: string
    Info: string
    WhatsApp: string
    Email: string
}

export const SalesCards: ISalesCards[] = [
    {
        id: 1,
        img: "Assets/SallesCard/Arthur.jpg",
        name: 'Arthur Telles',
        Info: 'Vendedor',
        WhatsApp: 'https://wa.me/5511934421941',
        Email: "mailto:arthur@madeibras.com.br"
    },

    {
        id: 2,
        img: "Assets/SallesCard/Joyce.jpeg",
        name: 'Joyce Carvalho',
        Info: 'Vendedora',
        WhatsApp: 'https://wa.me/5511969760878',
        Email: "mailto:joyce@madeibras.com.br"
    },
    {
        id: 3,
        img: "Assets/SallesCard/Gabriele.jpg",
        name: 'Gabriele',
        Info: 'Vendedora',
        WhatsApp: 'https://wa.me/5511940881707',
        Email: "mailto:gabriele@madeibras.com.br"
    },
    {
        id: 4,
        img: "Assets/SallesCard/Rodrigo.jpg",
        name: 'Rodrigo Viana',
        Info: 'Vendedor',
        WhatsApp: 'https://wa.me/5511960189904',
        Email: "mailto:rodrigo@madeibras.com.br"
    },
    {
        id: 5,
        img: "Assets/SallesCard/Romualdo.jpg",
        name: 'Romualdo Cândido',
        Info: 'Vendedor',
        WhatsApp: 'https://wa.me/5511958851545',
        Email: "mailto:romualdo@madeibras.com.br"
    },
    {
        id: 6,
        img: "Assets/SallesCard/Betania.jpg",
        name: 'Betania Lemos',
        Info: 'Gerente',
        WhatsApp: 'https://wa.me/5511947564437',
        Email: "mailto:betanialemos@madeibras.com.br"
    }
]