import { Link } from "react-router-dom"
import styled from "styled-components"

export const MainContainerHome = styled.main`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 0;
  }
`

export const SectionnContainerHome = styled.section`
  div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

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
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 1.7rem 8rem;

    div {
      width: 50%;

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
  }
`

export const TechnologiesContainer = styled.article`
  display: flex;
  gap: .7rem;

  div {
    color: var(--gray);
    font-size: 1.4rem;

    transition: .4s ease;

    :hover {
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
  
      transition: .4s ease;
  
      :hover {
        background-color: var(--yellow);
        color: var(--black);
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

      transition: .4s ease;

      :hover {
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

  :hover {
    color: var(--primary-color);
  }
`