import { ReactNode } from "react"

export type IProps = {
    id?:  string
    name?: string | undefined
    icon?: ReactNode
    description?: string
    img?: string
    children?: ReactNode
    boxShadowColor?: string
    Color?: string
    ColorBorder?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement> 
}