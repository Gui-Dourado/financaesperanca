import styled, { css } from "styled-components";

export const ItemContainer = styled.div`

`;

export const ItemCard = styled.div`
    margin: 1.5rem 0rem;
    padding: 0.5rem 0rem;
    width: 100%;
`;

export const ItemTitle = styled.h4`
    margin-bottom: 1rem;
`;

export const ItemList = styled.ul`
`;

export const ItemOptionButton = styled.button`
    margin-bottom: 0.25rem;
    border: 1px solid #e5e7eb;
    padding: 14px 16px;
    border-radius: 8px;
    width: 100%;
    cursor: pointer;
    transition: all 180ms ease;
    background: #fff;
    outline: none;
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(16, 24, 40, 0.04);
    }

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:disabled {
        cursor: not-allowed;
        transform: none;
    }

    ${props =>
        props.$selected &&
        css`
            border-color: #2563eb;
            background: #eff6ff;
        `}

    ${props =>
        props.$correct &&
        css`
            border-color: #10b981;
            background: #ecfdf5;
        `}

    ${props =>
        props.$wrong &&
        css`
            border-color: #ef4444;
            background: #fef2f2;
        `}
`;