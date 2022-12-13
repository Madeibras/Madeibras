import { type } from "os"
import { ReactNode } from "react"

export type Iprops = {
    type?: React.HTMLInputTypeAttribute
    backgroundColor?: string
    txtColor?: string
    backgroundHover?: string
    children: ReactNode 
    boxShadow?: string
    primary?: boolean
    backgroundGradient?: string
}& React.ButtonHTMLAttributes<HTMLButtonElement>