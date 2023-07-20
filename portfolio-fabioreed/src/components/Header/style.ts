import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;

    div {
      display: flex;
      gap: 1rem;

      h3 {
        font-size: 1.4rem;
        font-weight: bold;
      }

      img {
        border-radius: 50%;
        width: 42px;
      }

      span {
        color: var(--primary-color);
        font-weight: bold;
      } 
  }

  ul {
    display: none;
  }

  .buttonContact {
    padding: .4rem 1rem;

    display: none;

    background-color: var(--black);

    color: var(--white);
    font-size: .8rem;

    transition: .2s ease;
    box-shadow: .6px .7px 1px var(--yellow);

    &:hover {
      background-color: var(--yellow);
      color: var(--black);
      box-shadow: .6px .7px 1px var(--primary-color);
    }
  }
  

  @media (min-width: 768px) {
    padding: 1.7rem 8rem;

    div {
      h3 {
        font-size: 1.7rem;
      }

      img {
        display: none;
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
    color: var(--gray);
    font-weight: 500;

    list-style: none;
    text-decoration: none;

    transition: .2s ease;

    &:hover {
      font-weight: 600;
      font-size: .93rem;
      color: var(--yellow);

      transform: scaleX(-10px, -20px);
    }
`

export const Burger = styled.aside`
  display: flex; 

  .buttonBurger {
    font-size: 1.7rem;
  
    cursor: pointer;

    background-color: transparent;

    color: var(--black);

    @media (min-width: 768px) {
        display: none;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`