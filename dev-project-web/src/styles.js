import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: var(--cor8);
  }
  
  :root {
    --cor1: #F22E76;
    --cor2: #D904B5; 
    --cor3: #7503A6; 
    --cor4: #5204BF; 
    --cor5: #F25C05; 
    --cor6: #000000; 
    --cor7: #D9D9D9; 
    --cor8: #F5F5F5;
    --cor9: #FFFFFF;
    --cor10: #515151;
    --cor11: #3c3c3c;
  }

  h1 {
    font-size: 3rem;

    @media (max-width: 768px) {
        font-size: 2.4rem;
    }

    @media (max-width: 480px) {
        font-size: 1.8rem;
    }
  }

  h2 {
    font-size: 2.4rem;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
  } 

  h3 {
    font-size: 1.8rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }
  }

  h4 {
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }

    @media (max-width: 480px) {
        font-size: 1.1rem;
    }
  }

  p {
    font-size: 1.1rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
  }

`;

export const Limit = styled.main`
    max-width: 1000px;
    width: 97.5%;
    margin: auto;
`;