import { Link } from "react-router-dom"
import styled from "styled-components"

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalItSelf = styled.section`
    background-color: white;
    width: 96%;
    max-width: 600px;
    height: 40%;
    padding: 20px;
    border-radius: 6px;

    position: absolute;
    bottom: 0;
    right: 7px;

    z-index: 0;

    animation: slideIn 0.5s forwards;

    @keyframes slideIn {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }

    div {
      display: flex;
      justify-content: flex-end;

      span {
        cursor: pointer;

        font-size: 1.7rem;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        
      }
    }
`

export const TagLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;

    color: var(--primary-color);
    font-weight: 600;

    font-size: 1.1rem;

    border-bottom: 1px solid var(--yellow);

    cursor: pointer;

    font-family: 'Shadows Into Light', cursive;

    &:hover {
      color: var(--gray);
    }
`