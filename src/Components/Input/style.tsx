import styled from "styled-components";

import { Iinputs } from "Types/input";

export const Input = styled.input<Iinputs>`
    width: 100%;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px 16px;
    border-radius: 5px;
    transition: 0.3s;
    margin: 20px 0 20px 0;

    &:focus{
        border-color: #A6CE39;
        box-shadow:0 0 8px 0 #A6CE39;
    }
`