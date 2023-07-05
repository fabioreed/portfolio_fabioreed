import styled from "styled-components"

export const ContactContainer = styled.main`
  h2 {
    color: var(--primary-color);
  }

  div {
    .xizinho {
      position: absolute;
      top: 10px;
      right: 20px;

      cursor: pointer;

      font-size: 1.7rem;

      color: var(--black);

      transition: .2s ease;
      
      &:hover {
        color: var(--yellow);
      }
    }
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: fixed;
  top: 50px;
  right: 20px;

  z-index: 1;

  background-color: var(--white);

  padding: 2rem;
  width: 360px;

  border-radius: 6px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  animation: slideIn 0.5s forwards;

    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
`

export const RedesSociaisContato = styled.section`
  display: flex;
  gap: 3rem;
  /* justify-content: space-between; */
`