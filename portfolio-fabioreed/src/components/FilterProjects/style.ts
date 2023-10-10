import styled from "styled-components"

export const ContainerProjectsButton = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .2rem;

  @media (min-width: 769px) {
    gap: 2rem;
  }
`

export const ButtonProject = styled.button`
  background-color: transparent;
  padding: .7rem .4rem;

  color: var(--gray);

  &.selected {
    border-bottom: 1.4px solid rgba(0, 0, 0, 0.08);
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.3);
    color: var(--primary-color);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    color: var(--primary-color);
    border-radius: 6px 6px 0 0;
  }

  @media (min-width: 769px) {
    font-size: 1.1rem;
  }
`

