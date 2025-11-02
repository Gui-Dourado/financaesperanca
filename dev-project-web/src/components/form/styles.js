import styled from "styled-components"

import { Link } from "react-router-dom";

export const CenterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
`;

export const FormBox = styled.form`
    padding: 1.5rem;
    width: 95%;
    max-width: 500px;
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
    color: var(--cor6);
`;

export const InputSpace = styled.div`
    text-align: center;
    padding: 1rem 0;
`;

export const Label = styled.label`
    text-align: left;
    display: block;
    margin-bottom: 0.5rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    border-top: 0px none;
    border-right: 0px none;
    border-left: 0px none;
    border-bottom: 3px solid var(--cor7);
`;

export const Actions = styled.div`
    text-align: center;
    margin-top: 1rem;
`;

export const Button = styled.button`
    border-radius: 5px;
    border: none;
    background: var(--cor4);
    width: 45%;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--cor8);
    &:hover {
        background: var(--cor5);
    }
`;

export const DivLinks = styled.div`
    margin-top: 1.5rem;
`;

export const Links = styled(Link)`
    text-decoration: none;
    padding: 0.25rem;
    font-size: 0.9rem;
    color: var(--cor4);
    &:hover {
        color: var(--cor5);
    }
`;

export const DivLinksTerm = styled.div`
`;

export const LinksTerm = styled(Link)`
    text-decoration: none;
    font-size: 0.9rem;
    color: var(--cor4);
    &:hover {
        color: var(--cor5);
    }
`;

//CheckBox
export const CheckBoxSpace = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
`;

export const CheckBox = styled.input`
    cursor: pointer;
    width: 15px;
    height: 15px;
    margin-right: 0.5rem;
`;

export const CheckBoxLabel = styled.label`
    font-size: 0.9rem;
`;

//Seletor 

export const SelectSpace = styled.div`

`;

export const Selector = styled.select`
    width: 100%;
    padding: 0.5rem;
    border-top: 0px none;
    border-right: 0px none;
    border-left: 0px none;
    border-bottom: 3px solid var(--cor7);
`;

export const SelectOption = styled.option`

`;

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const ToggleBtn = styled.button`
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    line-height: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline-offset: 2px;

    svg { width: 20px; height: 20px; }
`;