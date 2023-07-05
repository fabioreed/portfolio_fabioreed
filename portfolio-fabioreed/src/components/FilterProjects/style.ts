import styled from "styled-components"

export const ContainerProjectsButton = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const ButtonProject = styled.button`
  background-color: transparent;
  padding: .7rem .4rem;

  color: var(--primary-color);

  transition: .4s ease;

  &:hover {
    background-color: var(--yellow);
    border-radius: 6px;
    color: var(--gray);
  }

  @media (min-width: 769px) {
    font-size: 1.1rem;

  }
`

