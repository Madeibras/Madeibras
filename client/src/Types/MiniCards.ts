import { ReactNode } from "react";

export interface IMiniCards {
    icon?: ReactNode
    title: string
    onClick: () => void
}