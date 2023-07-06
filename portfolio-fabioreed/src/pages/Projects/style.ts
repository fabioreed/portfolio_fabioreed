import { Link } from "react-router-dom"
import styled from "styled-components"

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
  
  @media (min-width: 768px) {
    padding: 1rem 8rem;
    margin: 0 auto;

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: .4rem;
  flex-shrink: 0;

  padding: 1rem;
  width: 290px;
  height: max-content;

  border-radius: 1rem;

  position: relative;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  background-color: var(--white);

  .card.typescript {
    border-top: 1px solid blue;
  }

  .card.javascript {
    border-top: 1px solid yellow;
  }

  h3 {
    font-size: .9rem;
    color: var(--gray);
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
  }

  p {
    font-size: .6rem;
    color: var(--gray);
    line-height: 150%;
  }

  &:hover {
    background-color: #f2f2f2;
  }

  @media (min-width: 768px) {
    width: 462px;

    p {
      font-size: .7rem;
    }
  }
`

export const TypeSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;

  span {
    border-radius: 5px;
    padding: .3rem;

    font-size: .7rem;
    color: var(--black);

    background-color: var(--yellow);

    transition: .4s ease;

    &:hover {
      background-color: var(--primary-color);
      color: var(--white);
    }

    @media (min-width: 768px) {
      font-size: .8rem;
    }
  }
`

export const LinkOfTheProject = styled.div`
  display: flex;
  align-items: center;
  gap: .7rem;
  cursor: pointer;

  color: var(--primary-color);
  font-size: 1.2rem;

  transition: .5s ease;

  &:hover {
    color: var(--gray);
  }

  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
`

export const LinkToTheProject = styled(Link)`
    font-size: .7rem;
    color: var(--gray);
    line-height: 150%;
`