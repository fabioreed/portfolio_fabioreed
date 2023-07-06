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
    border-radius: 3px 3px 0 0;
    background-color: rgba(0, 0, 0, 0.03);
    color: var(--gray);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    color: var(--gray);
    border-radius: 6px 6px 0 0;
  }

  @media (min-width: 769px) {
    font-size: 1.1rem;
  }
`

