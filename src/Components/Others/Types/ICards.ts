import { ReactNode } from "react"

interface ICard {
    icon: ReactNode,
    title: string
    rota: string
}

export interface ICards {
    Cards: ICard[]
}
