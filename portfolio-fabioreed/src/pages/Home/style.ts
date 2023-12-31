import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MainContainerHome = styled.main`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  margin-top: 3.7rem;

  @media (min-width: 768px) {
    gap: 0;

    margin-top: 9rem;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
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

    > h1 {
      color: var(--light-gray);
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 1.7rem 8rem;
  }
`

export const ContainerWhoIamWords = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: var(--black);

    .frontend-text {
      background: linear-gradient(90deg, var(--gradient-1) 0%, var(--gradient-2) 60%);
      color: transparent;
      font-weight: 700;
      -webkit-background-clip: text; /* Para aplicar o gradiente ao texto */
      background-clip: text; /* Para aplicar o gradiente ao texto */
    }

    span {
      color: var(--primary-color);
      font-weight: 700;
    }
  }
  
  p {
    color: var(--light-gray);
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

    padding: .9rem 2rem;
    width: max-content;

    background-color: var(--primary-color);

    border-radius: 6px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;

    color: var(--white);

    transition: .2s ease;
    box-shadow: .6px .7px 1px var(--yellow);

    &:hover {
      background-color: var(--gradient-1);
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
    position: relative;

    img {
      width: 230px;
      height: 230px;

      border: thin solid var(--new-green);
      border-radius: 50%;

      object-fit: contain;

      opacity: 84%;

      box-shadow: var(--new-green) 0px 0px 100px -20px;

      transition: transform .3s ease-in-out;
    }

    &:hover::before {
      opacity: 1;
    }

    img:hover {
      opacity: 1;
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
    font-size: 1rem;
    background: linear-gradient(90deg, var(--gradient-1) 0%, var(--new-green) 60%);
    color: transparent;
    font-weight: 700;
    -webkit-background-clip: text; /* Para aplicar o gradiente ao texto */
    background-clip: text; /* Para aplicar o gradiente ao texto */
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 1rem;

  @media (min-width: 768px) {
    > h3 {
      font-size: 1.4rem;
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
  justify-content: space-between;
  gap: 1rem;

  overflow-x: auto;
  overflow-y: hidden;

  height: fit-content;

  padding: 2.8rem 0 2.8rem 0;

  .hidden {
    opacity: 0;
    transition: all .6s;
    filter: blur(5px);
    transform: translateY(45%);
    opacity: 0;
  }

  .show {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
    opacity: .7;

    &.logo:nth-child(1) {
      transition-delay: 200ms;
    }
    &.logo:nth-child(2) {
      transition-delay: 200ms;
    }
    &.logo:nth-child(3) {
      transition-delay: 300ms;
    }
  }

  @media (min-width: 768px) {
  }
`

export const RecentProjectsCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: .4rem;
  flex-shrink: 0;

  width: 320px;
  
  background: var(--white);
  
  border-radius: 6px;
  border: thin var(--new-green) solid;
  
  box-shadow: var(--new-green) 0px 0px 47px -20px;

  opacity: .7;

  transition: .2s ease;

  position: relative;

  .logo {
    display: flex;
  }

  &.logo:nth-child(1) {
    transition-delay: 1000ms;
  }
  &.logo:nth-child(2) {
    transition-delay: 4000ms;
  }
  &.logo:nth-child(3) {
    transition-delay: 7000ms;
  }

  > span {
    background: rgb(14,107,168);
    background: linear-gradient(90deg, rgba(14,107,168,1) 0%, rgba(73,109,219,1) 100%);

    border-radius: 20px;

    color: var(--white);
    font-size: .7rem;
    font-weight: 700;
    font-family: 'Quicksand', sans-serif;

    width: fit-content;
    padding: .4rem .7rem;

    position: absolute;
    top: -10px;
    right: 10px;

    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    z-index: 1;
  }

  img {
    overflow: hidden; 
    object-fit: cover;
    max-width: 100%;
    height: 150px;

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
    scrollbar-color: #888 transparent;

    > p {
    &:before {
      content: '';
      position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        height: 30px; /* Ajuste a altura do degradê conforme necessário */
        background: linear-gradient(transparent, rgba(246, 246, 246, 0.8)); /* Defina as cores do degradê aqui */
      }

      overflow-y: auto;

      height: 100px;
    }
  }

  &:hover {
    opacity: 1;
    box-shadow: var(--new-green) 0px 0px 56px -20px;
  }

  @media (min-width: 468px) {
    max-width: 480px;
  }
  
  @media (min-width: 768px) {
  }
`

export const SeeMore = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  padding: 0.9rem;
  width: max-content;

  margin: 1rem;

  background: rgb(14,107,168);
  background: linear-gradient(90deg, rgba(14,107,168,1) 0%, rgba(73,109,219,1) 100%);

  border-radius: 8px;
  border: 1px solid var(--blue);

  font-family: 'Quicksand',sans-serif;
  font-weight: 600;
  color: var(--white);
  
  transition: .3s ease;

  svg {
    transform: rotate(90deg);
  }

  &:hover {
    color: var(--gradient-1);
    background: var(--gradient-2);

    svg {
      transform: rotate(0deg);
      transition: transform .2s ease-in-out;
    }
  }

  @media (min-width: 768px) {
  
    margin: 0 8rem;
  }
`