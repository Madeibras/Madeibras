export type Iinputs = {
    type?: React.HTMLInputTypeAttribute
    backgroundColor?: string
    color?: string
    placeHolder?: string
    value?: string
    rows?: number
    onChange?:(React.ChangeEventHandler<HTMLTextAreaElement> & ((e: React.ChangeEvent<HTMLInputElement>) => void))
}