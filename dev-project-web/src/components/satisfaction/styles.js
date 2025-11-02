import styled from "styled-components";

export const Title = styled.h2`
    text-align: left;
    margin: 1.5rem 0 0.75rem;
    color: var(--cor6);
    font-weight: 800;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    margin: 0.75rem 0 1.25rem;
`;

export const SubTitle = styled.h3`
    text-align: left;
    margin: 0.5rem 0 0.75rem;
    color: var(--cor6);
    font-weight: 700;
`;

export const Textarea = styled.textarea`
    width: 100%;
    min-height: 110px;
    resize: vertical;
    padding: 0.75rem 0.25rem;
    background: transparent;
    border: none;
    border: 3px solid var(--cor7);
    color: inherit;
    font: inherit;

    &:focus {
        outline: none;
        border-bottom-color: var(--cor4);
    }

    &::placeholder {
        color: rgba(0,0,0,0.4);
    }
`;

export const Submit = styled.button`
     align-self: flex-end;
    border-radius: 5px;
    border: none;
    background: var(--cor4);
    padding: 0.5rem 1rem;
    cursor: pointer;
    color: var(--cor8);
    font-weight: 600;
    transition: transform 0.02s ease-in-out, background 0.15s ease-in-out;

    &:hover {
        background: var(--cor5);
    }

    &:active {
        transform: translateY(1px);
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;