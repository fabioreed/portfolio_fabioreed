import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderFixed = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9;
  padding: .7rem;
  background: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(10px); /* Ajuste o valor conforme desejado */
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 12px;
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    cursor: pointer;

    h3 {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--light-gray);
    }

    span {
      background: linear-gradient(90deg, var(--gradient-1) 0%, var(--gradient-2) 40%);
      color: transparent;
      font-weight: 700;
      -webkit-background-clip: text; /* Para aplicar o gradiente ao texto */
      background-clip: text; /* Para aplicar o gradiente ao texto */
    } 
  }

  ul {
    display: none;
  }

  .buttonContact {
    padding: .4rem 1rem;

    display: none;

    background-color: var(--primary-color);

    color: var(--white);
    font-size: .8rem;
    font-weight: 700;

    transition: .2s ease;

    &:hover {
      background-color: var(--gradient-1);
      color: var(--black);
      box-shadow: .6px .7px 1px var(--primary-color);
    }
  }

  @media (min-width: 768px) {
    padding: .4rem 8rem;

    div {
      h3 {
        font-size: 1.4rem;
      }
    }

    ul {
      display: flex;
      gap: 2.4rem;
    }
    
  .buttonContact {
    padding: .7rem 2rem;

    display: block;
  }
}
`

export const LinkTag = styled(Link)`
  font-size: .9rem;
  color: var(--light-gray);
  font-weight: 500;

  list-style: none;
  text-decoration: none;

  transition: .1s ease;

  &.active {
    color: var(--gradient-1);
    font-weight: 600;
  }

  &:hover {
    color: var(--gradient-1);

    transform: scaleX(-10px, -20px);
  }
`

export const Burger = styled.aside`
  display: flex; 

  .buttonBurger {
    font-size: 1.7rem;
  
    cursor: pointer;

    background-color: transparent;

    color: var(--gray);

    &:hover {
      color: var(--primary-color);
    }

    @media (min-width: 768px) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const Img = styled.img`
  border-radius: 50%;
  width: 32px;
  
  @media (min-width: 768px) {
    display: none;
  }
`