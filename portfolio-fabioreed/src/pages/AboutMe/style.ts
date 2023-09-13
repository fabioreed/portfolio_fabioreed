import { Link } from "react-router-dom"
import styled from "styled-components"

export const ContainerAboutMe = styled.main`
  padding: 1rem;

  footer {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;

    margin-top: 5rem;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background: rgba(16, 28, 46, 0.1);
    backdrop-filter: blur(8px);

    padding: 1rem;

    border-radius: 1rem;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

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
      flex-direction: row;
      margin-top: 7rem;
      padding: 3rem 7.8rem;
    }

    article {
      gap: 2rem;

      width: 70%;
      padding: 1.4rem;

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
  padding: .7rem 1rem;
  
  border-radius: 6px;
  
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
  
  padding: 1rem;

  border-radius: 1rem;
  
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  background: var(--blue);

  background: rgba(16, 28, 46, 0.1);
  backdrop-filter: blur(8px);
  
  @media (min-width: 960px) {
    gap: 1.8rem;

    padding: 1.4rem;
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
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;

  background-color: inherit;
  
  font-size: 1.1rem;

  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const LinkCardInfo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 2rem;

  font-size: .8rem;
  
  padding: .4rem;
  width: 100%;

  color: var(--white);

  border-radius: 2.2rem;
  
  border: 1px solid var(--white);
  cursor: pointer;
  transition: .4s ease;
  
  > span {
    font-family: 'Quicksand', sans-serif;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    
    font-size: 1.4rem;

    padding: .7rem;

    > span {
      font-size: .7rem;
    }

    &:hover:nth-child(1) {
      background: var(--whatsapp);
      border: 1px solid var(--whatsapp);
    }

    &:hover:nth-child(2) {
      background: var(--linkedin);
      border: 1px solid var(--linkedin);
    }

    &:hover:nth-child(3) {
      background: var(--gmail);
      border: 1px solid var(--gmail);
    }
  }
`

export const ThirdCard = styled.div`
  display: flex;
  flex-direction: column;
`