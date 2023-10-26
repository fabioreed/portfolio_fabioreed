import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"

export const ContainerProjects = styled.main`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TitleAndSpan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .7rem;

  h2 {
    color: var(--primary-color);
    font-size: 1.1rem;
  }

  p {
    color: var(--gray);
    font-size: .8rem;

    display: flex;
    align-items: center;
    gap: .4rem;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`

export const List = styled.ul`
  display: flex;
  gap: 1rem;
  
  overflow-x: auto;

  z-index: 0;
  
  @media (min-width: 768px) {
    padding: 1rem 8rem;
    margin: 0 auto;

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
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

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: .4rem;
  flex-shrink: 0;

  padding: 1rem;
  width: 290px;
  height: 290px;

  border-radius: 1rem;

  position: relative;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  animation: ${fadeIn} 0.5s ease-in-out;

  transition: .5s ease;

  .card.typescript {
    border-top: 1px solid blue;
  }

  .card.javascript {
    border-top: 1px solid yellow;
  }

  h3 {
    font-size: .9rem;
    color: var(--primary-color);
  }

  small {
    position: absolute;
    top: 10px;
    right: 10px;

    cursor: pointer;
  }

  /* Estilizando a barra de rolagem */
  /* Para navegadores baseados em Chromium (Google Chrome, Microsoft Edge, etc.) */
  ::-webkit-scrollbar {
    width: 3px; /* Largura da barra de rolagem vertical */
    height: 3px; /* Altura da barra de rolagem horizontal */
  }

  /* Para navegadores baseados em Chromium (Google Chrome, Microsoft Edge, etc.) */
  ::-webkit-scrollbar-thumb {
    background-color: #999; /* Cor do "polegar" da barra de rolagem (a parte que o usuário arrasta) */
    border-radius: 6px; /* Raio de borda para o "polegar" */
  }

  /* Para navegadores baseados em Chromium (Google Chrome, Microsoft Edge, etc.) */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #789; /* Cor do "polegar" da barra de rolagem ao passar o mouse */
  }

  /* Para navegadores baseados em Firefox */
  /* Apenas para personalização básica */
  scrollbar-color: #888 transparent; /* Cor da barra de rolagem vertical */

  img {
    width: 100%;
    border-radius: 8px;

    opacity: .9;

    /* max-width: 100%;
    height: auto;*/
    overflow: hidden; 
    object-fit: cover;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);

    > h3 {
      color: var(--light-gray);
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 400px;
    
    p {
      font-size: .7rem;
    }
  }

  @media (min-width: 1229px) {
    width: 48%;
  }

  @media (min-width: 1440px) {
    width: 48%;
  }
`

export const CardGitHub = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: .4rem;
  flex-shrink: 0;

  padding: 1rem;
  width: 200px;

  border-radius: 1rem;

  position: relative;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  box-shadow: rgba(100, 100, 111, 0.25) 0px 7px 29px 0px;

  cursor: pointer;

  animation: ${fadeIn} 0.5s ease-in-out;

  transition: .5s ease;

  .card.typescript {
    border-top: 1px solid blue;
  }

  .card.javascript {
    border-top: 1px solid yellow;
  }

  h3 {
    font-size: .9rem;
    color: var(--primary-color);
  }

  span {
    color: var(--white);
    font-size: .8rem;
  }

  small {
    position: absolute;
    top: 10px;
    right: 10px;

    cursor: pointer;
  }

  img {
    width: 100%;
    border-radius: 8px;

    overflow: hidden; 
    object-fit: cover;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);

    > h3 {
      color: var(--light-gray);
    }
  }

  @media (min-width: 768px) {
    gap: .8rem;
    width: 240px;
    height: max-content;

    p {
      font-size: .7rem;
    }
  }
`

export const TagCategory = styled.div`
  background: rgb(14,107,168);
  background: linear-gradient(90deg, rgba(14,107,168,1) 0%, rgba(73,109,219,1) 100%);

  border-radius: 20px;

  color: var(--white);
  font-size: .7rem;
  font-weight: 700;

  width: fit-content;
  padding: .4rem .7rem;

  position: absolute;
  top: -10px;
  right: 10px;

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  z-index: 1;
`

export const DescriptionWithOverFlow = styled.article`
  height: 80px;
  overflow-y: auto;

  p {
    font-size: .7rem;
    color: var(--light-gray);
    line-height: 150%;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 45px;
    left: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(transparent, transparent);
  }

@media(min-width: 769px) {
  font-size: .8rem;

  p {
    font-size: .76rem;
  }
}
`

export const DescriptionWithOverFlowGH = styled.article`
  height: 50px;
  overflow-y: auto;

  p {
    font-size: .7rem;
    color: var(--light-gray);
    line-height: 150%;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 45px;
    left: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(transparent, transparent);
  }

@media(min-width: 769px) {
  font-size: .8rem;

  p {
    font-size: .76rem;
  }
}
`

export const TypeSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;

  color: var(--gray);

  span {
    border-radius: 12px;
    padding: .2rem .6rem;
    
    font-size: .6rem;
    font-weight: 400;
    color: var(--white);
    font-family: 'Quicksand', sans-serif;
    
    background: var(--background-blue);
    
    transition: .4s ease;
    
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

    &:hover {
      background-color: var(--black);
    }

    @media (min-width: 768px) {
      font-size: .65rem;
    }
  }
`

export const LinkOfTheProject = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem;
  cursor: pointer;

  color: var(--white);
  font-size: .8rem;

  background-color: var(--primary-color);
  width: max-content;
  padding: .4rem .7rem;

  transition: .2s ease;

  border-radius: 6px;

  svg {
    transform: rotate(90deg);
  }

  &:hover {
    color: var(--gradient-1);
    background: var(--gradient-2);
    background-color: var(--black);
    color: var(--white);
    box-shadow: .6px .7px 1px var(--primary-color);

    svg {
      transform: rotate(136deg);
      transition: transform .2s ease-in-out;
    }
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

export const LinkToTheProject = styled(Link)`
  font-size: .7rem;
  color: var(--white);
  line-height: 150%;
`

export const ModalProject = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalSection = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--white);

  width: 96%;
  max-width: 760px;
  height: max-content;
  padding: 1rem;

  border-radius: 12px;

  position: relative;

  z-index: 0;

  animation: slideIn 0.4s forwards;

  @keyframes slideIn {
    from {
      transform: translateX(80%);
    } to {
      transform: translateX(0);
    }
  }
`

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;

  font-size: 1.2rem;

  padding: .3rem .7rem;
  border-radius: 50%;

  &:hover {
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.08);
  }
`