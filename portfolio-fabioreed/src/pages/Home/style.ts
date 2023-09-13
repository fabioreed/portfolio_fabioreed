import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"

export const MainContainerHome = styled.main`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 0;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const SectionnContainerHome = styled.section`
  animation: ${fadeIn} 0.5s ease-in-out;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    /* h1 {
      font-size: 1.5rem;
      color: var(--black);

      span {
        color: var(--primary-color);
        font-weight: 700;
      }
    }
    
    p {
      color: var(--gray);
      font-size: 1rem;
    } */
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 1.7rem 8rem;

    div {
      /* width: 100%; */

      /* h1 {
        font-size: 2.4rem;
      }

      span {
        font-size: 2.8rem;
      }

      p {
        font-size: 1rem;
      } */
    }
  }
`

export const ContainerWhoIamWords = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: var(--black);

    span {
      color: var(--primary-color);
      font-weight: 700;
    }
  }
  
  p {
    color: var(--gray);
    font-size: 1rem;
  }

  @media (min-width: 769px) {
    width: 77%;

    h1 {
      font-size: 2.4rem;
    }

    span {
      font-size: 2.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`

export const TechnologiesContainer = styled.article`
  display: flex;
  gap: .7rem;

  div {
    color: var(--gray);
    font-size: 1.4rem;

    transition: .4s ease;

    &:hover {
      color: var(--primary-color);
      
    }
  }

  @media (min-width: 768px) {
    div {
      font-size: 1.9rem;
    }
  }
`

export const ResumeContainer = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    
    div {
      flex-direction: column;
      gap: 1rem;
      justify-content: flex-start;
      
      a:nth-child(1) {
        padding: .8rem 1.1rem;
      }
    }
  }
`

export const PDFContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a:nth-child(1) {
      display: flex;
      align-items: center;
      gap: .4rem;
  
      padding: .9rem .7rem;
      width: max-content;
  
      background-color: var(--primary-color);
  
      border-radius: 8px 2px;
      font-family: 'Quicksand', sans-serif;
      font-weight: 600;
  
      color: var(--white);
  
      transition: .2s ease;
      box-shadow: .6px .7px 1px var(--yellow);
  
      &:hover {
        background-color: var(--yellow);
        color: var(--black);
        box-shadow: .6px .7px 1px var(--primary-color);
      }
    }

    a:nth-child(2) {
      display: flex;
      align-items: center;
      gap: .4rem;

      border-bottom: 1.2px solid var(--gray);

      width: max-content;

      color: var(--gray);
      font-weight: 600;
      font-size: .8rem;

      transition: .2s ease;

      &:hover {
        color: var(--yellow);
        border-bottom: 1.2px solid var(--yellow);
      }
    }

    @media (min-width: 768px) {
      align-items: flex-start;
    }
`

export const PictureHome = styled.section`
  display: none;

  @media (min-width: 880px) {
    display: block;

    img {
      width: 300px;

      border: 3px solid var(--white);
      border-radius: 50%;

      opacity: 84%;

      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
  }
`

export const SocialMediaContainer = styled.aside`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
`

export const MediaSocial = styled(Link)`
  font-size: 1.7rem;
  color: var(--gray);

  &:hover {
    color: var(--primary-color);
  }
`

export const FooterRecentProjects = styled.footer`
  display: flex;
  flex-direction: column;

  @media(min-width: 768px) {
  }
`

export const DivContainerRecentProjects = styled.div`
  > h3 {
    color: var(--gray);
    font-size: .9rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 1rem;

  @media (min-width: 768px) {
    > h3 {
      font-size: 1.2rem;
    }

    flex-direction: row;
    padding: 1.7rem 8rem;

    margin-bottom: 0;
  }
`

export const AsideContainerFooter = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media(min-width: 768px) {
    padding: 0 8rem;

    gap: 1.7rem;
  }
`

export const RecentProjectsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 458px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const RecentProjectsCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: .4rem;
  border-radius: 6px;
  width: 100%;

  background: var(--white);

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  opacity: .7;

  transition: .2s ease;

  img {
    overflow: hidden; 
    object-fit: cover;
    max-width: 100%;

    border-radius: 6px 6px 0px 0px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: .4rem;
    padding: .7rem;
    /* align-items: center; */

    > h4, p {
      font-size: .7rem;
      color: var(--gray);
    }
  }

  &:hover {
    opacity: 1;
  }

  @media (min-width: 468px) {
    width: 100%;
    max-width: 260px;
  }

  @media (min-width: 768px) {
    max-width: 320px;
  }
`

export const SeeMore = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.9rem 0.7rem;
  width: max-content;
  background-color: var(--black);
  border-radius: 8px 2px;
  font-family: 'Quicksand',sans-serif;
  font-weight: 600;
  color: var(--white);
  transition: .2s ease;

  &:hover {
    color: var(--black);

    background: var(--yellow);
  }
`