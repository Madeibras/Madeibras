import { ReactNode } from "react"


export type IProps = {
    id?: number
    name?: string
    icon?: ReactNode
    mapping?: ()=>void
}