import styled from "styled-components";

export const CenterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
`;

export const FormBox = styled.main`
    padding: 1.5rem;
    width: 95%;
    max-width: 1000px;
`;

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--cor6);
`;

export const TitleModule = styled.h2`
    text-align: left;
    margin-bottom: 1rem;
    color: var(--cor10);
`;

export const VideoLimit = styled.div`
    background-color: #4949;
    margin-bottom: 30px;
    padding: 20px;
    padding-bottom: 59%;
    position: relative;
`;

export const VideoRes = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Actions = styled.div`
    text-align: center;
    margin: 1rem 0rem;
`;

export const Button = styled.button`
    border-radius: 5px;
    border: none;
    background: var(--cor3);
    width: 75%;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--cor8);
    &:hover {
        background: var(--cor5);
    }
`;

export const ButtonSpace = styled.div`
    text-align: center;
    margin: 2rem 0rem;
    display: flex;
    justify-content: space-between;
`;

export const ButtonMini = styled.button`
    border-radius: 5px;
    border: none;
    background: var(--cor3);
    width: 25%;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--cor8);
    &:hover {
        background: var(--cor5);
    }
`;