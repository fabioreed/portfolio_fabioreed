import styled from "styled-components";

export const BackgroundFooter = styled.div`
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(2,0,36,1) 50%, rgba(0,0,0,1) 100%);
  backdrop-filter: blur(10px); /* Ajuste o valor conforme desejado */
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 12px;
`

export const FooterContainer = styled.footer`
  display: flex;

  justify-content: space-between;

  padding: 3rem;

  /* background: var(--black); */

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

  font-size: 1.7rem;

  color: var(--gray);

  cursor: pointer;
`

export const ArrowUp = styled.button`
  background: none;

  color: var(--gray);

  font-size: 1.7rem;
`