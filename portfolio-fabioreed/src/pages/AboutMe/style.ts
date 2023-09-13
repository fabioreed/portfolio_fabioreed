import { Link } from "react-router-dom"
import styled from "styled-components"

export const ContainerAboutMe = styled.main`
  padding: 1rem;

  footer {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;

    margin-top: 1rem;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      color: var(--gray);
    }

    p {
      color: var(--gray);
      line-height: 150%;
      font-size: .9rem;
    }

    
  }

  @media (min-width: 768px) {
    footer {
      padding: 3rem 7.8rem;
    }

    article {
      gap: 2rem;

      h1 {
        font-size: 2.7rem;
      }

      p {
        font-size: 1.1rem;
      }

      span {
        font-size: 1.1rem;
      }
    }
  }
`

export const SayHello = styled(Link)`
    display: flex;
    gap: .3rem;
    align-items: center;

    color: var(--white);
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    
    width: fit-content;
    padding: .9rem .7rem;
    
    border-radius: 8px 2px;
    
    color: var(--white);
    
    background-color: var(--primary-color);
    
    transition: .26s ease;
    box-shadow: .6px .7px 1px var(--yellow);
    cursor: pointer;
    
    &:hover {
      background-color: var(--yellow);
      color: var(--black);
      box-shadow: .6px .7px 1px var(--primary-color);
    }
`

export const AsideCard = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: var(--white);
  
  padding: 2rem;

  border-radius: 16px;
  /* border-bottom: 8px solid white; */
  
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  background: var(--black);
  
  @media (min-width: 960px) {
    gap: 1.8rem;
    /* width: 48%; */
    height: 400px;
  }
`

export const FigureContainer = styled.figure`
  display: flex;
  align-items: center;
  gap: .6rem;

  img {
    width: 60px;
    height: 60px;

    border-radius: 50%;

    transition: .4s ease;

    &:hover {
      border: 2px solid var(--yellow);
      opacity: 87%;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: .3rem;

    h3 {
      font-size: .9rem;
      color: var(--white);
    }

    span {
      font-size: .6rem;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: var(--white);
    }
  }

  @media (min-width: 768px) {
    div > h3 {
      font-size: 1.1rem;
    }

    div > span {
      font-size: .7rem;
    }

    img {
      border: 2px solid var(--white);
    }
  }
`

export const MyTechnologies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: var(--black);

  padding: 2rem;

  border-radius: 16px;

  div:nth-child(1) {
    border-bottom: 1px solid var(--gray);
  }

  h2 {
    color: var(--gray);
    font-size: .7rem;
  }

  div:nth-child(2) {
    display: flex;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    gap: 2.3rem;

    h2 {
      font-size: 1rem;
    }
  }
`

export const ContainerOfInfoCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 769px) {
    flex-direction: row;
    gap: 3rem;
  }
`

export const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;

  font-size: 1.3rem;

  color: var(--gray);

  @media (min-width: 768px) {
    font-size: 1.5rem;
    display: flex;
    flex-wrap: wrap;

    width: 450px;
  }
`

export const AnotherInfoCard = styled.ul`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  background-color: inherit;
  
  padding: 1rem;

  /* border-radius: 16px; */
  
  font-size: 1.1rem;

  width: 100%;
`

export const LinkCardInfo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 2rem;

    font-family: 'Roboto';

    padding: .7rem;

    color: var(--white);

    border-radius: 6px;
    
    border: 1px solid var(--white);
    cursor: pointer;
    transition: .4s ease;

    @media (min-width: 769px) {
      &:hover:nth-child(1) {
        color: var(--whatsapp);
        border: 1.4px solid var(--whatsapp);
      }

      &:hover:nth-child(2) {
        color: var(--linkedin);
        border: 1.4px solid var(--linkedin);
      }

      &:hover:nth-child(3) {
        color: var(--gmail);
        border: 1.4px solid var(--gmail);
      }
    }

    @media (min-width: 769) {
      padding: 2rem;
    }
  
  @media (min-width: 960px) {
    gap: 1.8rem;
    width: 100%;
  }
`

export const ThirdCard = styled.div`
  display: flex;
  flex-direction: column;
`