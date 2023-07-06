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

  &.selected {
    border-bottom: 1.4px solid var(--gray);
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0.03);

  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
    color: var(--gray);
  }

  @media (min-width: 769px) {
    font-size: 1.1rem;
  }
`

