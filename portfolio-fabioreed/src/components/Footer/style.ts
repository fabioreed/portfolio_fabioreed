import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackgroundFooter = styled.div`
  background: rgba(16, 28, 46, .7);
  backdrop-filter: blur(10px); /* Ajuste o valor conforme desejado */
  box-shadow: rgba(16, 28, 46, 1) 0px 4px 12px;
`

export const FooterContainer = styled.footer`
  display: flex;

  justify-content: space-between;

  padding: 3rem;


  > span {
    color: var(--gray);
  }

  @media (min-width: 768px) {
    padding: 5rem 9rem;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  gap: 1rem; 
`

export const LinkToSocialMedia = styled(Link)`
  font-size: 1.7rem;

  :nth-child(1), :nth-child(2) {
    cursor: pointer;
    
    color: var(--gray);

    transition: .2s ease;

    &:hover {
      color: var(--white);
    }
  }
`

export const ArrowUp = styled.button`
  background: none;

  color: var(--gray);

  font-size: 1.7rem;

  transition: .2s ease;

  &:hover {
    color: var(--white);
  }
`