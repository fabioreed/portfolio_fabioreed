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
  
  @media (min-width: 769px) {
    font-size: 1.1rem;

    :hover {
      background-color: var(--black);
      color: red;
    }
  }
`

