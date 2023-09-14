import styled from "styled-components"

export const ContainerLicensed = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > h3 {
    color: var(--primary-color);
    font-size: 1.4rem;

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
    padding: 1rem 8rem;
  }
`

export const CertificateCard = styled.li`
  display: flex;
  flex-direction: column;

  background: var(--white);
  
  border-radius: 6px;
  
  flex-shrink: 0;
  
  width: 290px;
  
  opacity: .7;
  
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  
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
    opacity: 1;
  }

  > figure {

    > img {
      object-fit: contain;
      width: 100%;
      height: 204px;
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