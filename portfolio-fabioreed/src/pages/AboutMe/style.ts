import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"

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

export const ContainerAboutMe = styled.main`
  padding: 1rem;

  animation: ${fadeIn} 0.5s ease-in-out;

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
    border: thin solid var(--new-green);

    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    box-shadow: var(--new-green) 0px 0px 100px -20px;

    h1 {
      background: linear-gradient(90deg, var(--pink) 0%, var(--purple) 40%);
      color: transparent;
      font-weight: 700;
      -webkit-background-clip: text; /* Para aplicar o gradiente ao texto */
      background-clip: text; /* Para aplicar o gradiente ao texto */
    }

    p {
      color: var(--light-gray);
      
      line-height: 150%;
      font-size: .9rem;

      .different {
        background: linear-gradient(90deg, var(--gradient-1) 0%, var(--gradient-2) 100%);
        color: transparent;
        font-weight: 700;
        -webkit-background-clip: text; /* Para aplicar o gradiente ao texto */
        background-clip: text; /* Para aplicar o gradiente ao texto */
      }
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
  gap: .6rem;
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
  
  transition: .2s ease;
  box-shadow: .6px .7px 1px var(--yellow);
  cursor: pointer;

  svg {
    transform: rotate(90deg);
  }

  &:hover {
    color: var(--gradient-1);
    background: var(--gradient-2);
    background-color: var(--gradient-1);
    color: var(--black);
    box-shadow: .6px .7px 1px var(--primary-color);

    svg {
      transform: rotate(0deg);
      transition: transform .2s ease-in-out;
    }
  }
`

export const AsideCard = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: var(--white);
  
  padding: 1rem;

  border-radius: 1rem;
  border: thin solid var(--new-green);
  
  box-shadow: var(--new-green) 0px 0px 100px -20px;

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
  justify-content: space-between;

  background-color: inherit;
  
  font-size: 1.1rem;

  height: fit-content;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const LinkCardInfo = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  font-size: 1.1rem;
  
  padding: .7rem;
  width: 100%;

  color: var(--white);

  background: var(--blue);

  border-radius: .1rem;
  
  border: 1px solid var(--white);
  cursor: pointer;
  transition: .2s ease;
  
  > span {
    font-family: 'Quicksand', sans-serif;
  }

  &:nth-child(1){
    background: var(--whatsapp);
    border: 1px solid var(--whatsapp);
  }
  &:nth-child(2){
    background: var(--linkedin);
    border: 1px solid var(--linkedin);
  }
  &:nth-child(3) {
    background: var(--gmail);
    border: 1px solid var(--gmail);
  }
  &:nth-child(4) {
    background: var(--blue);
    border: 1px solid var(--blue);
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    
    font-size: 1.2rem;

    padding: .7rem;

    > span {
      font-size: .7rem;
    }

    &:hover:nth-child(1), 
    &:hover:nth-child(2), 
    &:hover:nth-child(3),
    &:hover:nth-child(4) {
      opacity: .8;
    }
  }
`

export const ThirdCard = styled.div`
  display: flex;
  flex-direction: column;
`