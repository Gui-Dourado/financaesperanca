import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    max-width: 800px;
    margin: 1.5rem auto 0;
`;

export const Header = styled.h3`
    text-align: left;
    margin-bottom: 1rem;
    color: var(--cor6);
    font-weight: 700;
`;

export const Empty = styled.form`
    border: 1px dashed rgba(0,0,0,0.1);
    border-radius: 8px;
    padding: 1.25rem;
    text-align: center;
    color: var(--cor6);
    font-size: 0.95rem;
    background: rgba(0,0,0,0.02);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    margin: 0.75rem 0 1.25rem;
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

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const Item = styled.li`
    list-style: none;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 10px;
    padding: 0.9rem 1rem;
    background: #fff;
    max-width: 100%;
`;

export const Body = styled.div`
    display: block;    
    width: 100%;
    max-width: 100%;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const Meta = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    font-size: 0.85rem;
    color: var(--cor6);

    a {
        color: var(--cor4);
        text-decoration: none;
    }

    a:hover {
        color: var(--cor5);
        text-decoration: underline;
    }

    .dot {
        width: 4px;
        height: 4px;
        border-radius: 999px;
        background: currentColor;
        display: inline-block;
        opacity: 0.6;
    }
`;

export const Content = styled.p`
    margin-top: 0.35rem;
    line-height: 1.5;
    color: #222;
    word-wrap: break-word;
`;

export const Pending = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.15rem 0.5rem;
    border-radius: 999px;
    font-size: 0.75rem;
    background: rgba(255, 193, 7, 0.15);
    color: #a06a00;

    &::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: currentColor;
        animation: blink 1.2s infinite ease-in-out;
    }

    @keyframes blink {
        0%, 100% { opacity: 0.35; }
        50% { opacity: 1; }
    }
`;