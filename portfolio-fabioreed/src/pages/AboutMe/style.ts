import { Link } from "react-router-dom"
import styled from "styled-components"

export const ContainerAboutMe = styled.main`
  padding: 1rem;

  footer {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      color: var(--black);
    }

    p {
      color: var(--gray);
      line-height: 150%;
      font-size: .9rem;
    }

    span {
      display: flex;
      align-items: center;
      gap: 1rem;

      font-size: 1.3rem;
      color: var(--primary-color);
      
      cursor: pointer;
      
      Link {
        text-decoration: none;
      }

      :hover {
        color: var(--yellow);
      }
    }
  }

  @media (min-width: 768px) {
    footer {
    padding: 3rem 7.8rem;

      flex-direction: row;
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
        font-size: 1.7rem;
      }
    }
  }
`

export const SayHello = styled(Link)`
    color: var(--primary-color);

    transition: .26s ease;

    :hover {
      color: var(--yellow);
    }
`

export const AsideCard = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: var(--white);

  padding: 2rem;

  border-radius: 16px;
  border-bottom: 8px solid white;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (min-width: 768px) {
    gap: 2.7rem;
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

    border: 2px solid var(--primary-color);

    transition: .4s ease;

    :hover {
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
      color: var(--black);
    }

    span {
      font-size: .6rem;

      color: var(--gray);
    }
  }

  @media (min-width: 768px) {
    div > h3 {
      font-size: 1.1rem;
    }

    div > span {
      font-size: .85rem;
    }

    img {
      border: 2.1px solid var(--primary-color);
    }
  }
`

export const MyTechnologies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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

export const Icons = styled.div`
  display: flex;
  gap: 1rem;

  font-size: 3rem;

  color: var(--gray);

  @media (min-width: 768px) {
    font-size: 1.5rem;
    flex-wrap: wrap;

    width: 450px;
  }
`