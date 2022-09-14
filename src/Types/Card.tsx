import { ReactNode } from "react"

export type IProps = {
    id?:  string
    name?: string | undefined
    icon?: ReactNode
    description?: string
    img?: string
    children?: ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement> 
}