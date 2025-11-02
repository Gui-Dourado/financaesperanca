import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  margin: 0;
  padding: 20px 120px;
  background-color: var(--cor11);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 820px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

export const LeftSide = styled.div`
  h3 {
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h3 {
    margin-bottom: 8px;
  }

  div {
    display: flex;
    gap: 15px;
  }

  @media (max-width: 820px) {
    align-items: center;
  }
`;

export const SocialLink = styled.a`
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: var(--cor5);
  }
`;