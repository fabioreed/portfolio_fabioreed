import { Link } from "react-router-dom"
import styled from "styled-components"

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalItSelf = styled.section`
  background-color: var(--white);
  width: 180px;
  padding: 1rem;
  border-radius: 4px;

  position: absolute;
  top: 22.5px;
  right: 7px;

  z-index: 7;

  animation: slideIn 0.5s forwards;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px); /* Ajuste o valor conforme desejado */
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 12px;

  @keyframes slideIn {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(30%);
    }
  }

  div {
    display: flex;
    justify-content: flex-end;

    span {
      cursor: pointer;

      font-size: 1rem;

      color: var(--gray);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const TagLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;

  color: var(--gray);
  font-weight: 600;

  font-size: .8rem;

  border-bottom: 1px solid var(--primary-color);

  cursor: pointer;

  &:hover {
    color: var(--gray);
  }
`