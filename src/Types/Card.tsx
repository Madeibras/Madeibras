import { ReactNode } from "react"

export type IProps = {
    id?: number
    name?: string
    icon?: ReactNode
    description?: string
    img?: string
    children?: ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement> 
}