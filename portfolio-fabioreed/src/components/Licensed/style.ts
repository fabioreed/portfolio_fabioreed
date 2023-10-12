import styled from "styled-components"

export const ContainerLicensed = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: 80vh;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > h3 {
    color: var(--primary-color);
    font-size: 1.4rem;
    background: linear-gradient(90deg, var(--purple) 0%, var(--gradient-2) 70%);
    color: transparent;
    font-weight: 700;
    -webkit-background-clip: text; /* Para aplicar o gradiente ao texto */
    background-clip: text; /* Para aplicar o gradiente ao texto */

    padding-top: 2rem;
  }

  @media (min-width: 768px) {
    > h3 {
      padding-top: 0;
      
      font-size: 2.2rem;
    }
  }
`

export const CertificateContainerList = styled.ul`
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 4rem 8rem;
  }
`

export const CertificateCard = styled.li`
  display: flex;
  flex-direction: column;

  background: var(--white);
  
  border-radius: 12px;
  border: thin var(--new-green) solid;
  
  flex-shrink: 0;
  
  width: 290px;
  
  box-shadow: var(--new-green) 0px 0px 80px -20px;
  
  transition: .2s ease;

  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #789;
  }
  scrollbar-color: #888 transparent;

  &:hover {
    opacity: .83;
  }

  > figure {
    > img {
      object-fit: cover;
      width: 100%;
      height: 204px;
      border-radius: 12px 12px 0 0;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: .4rem;

    padding: 0 .7rem;

    > h4 {
      color: var(--gray);
      font-size: .76rem;
    }

    > p {
      color: var(--gray);
      font-size: .7rem;
    }
  }
`