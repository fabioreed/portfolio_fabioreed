import styled from "styled-components"

export const BackgroundModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContactContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  z-index: 2;

  background: rgba(0, 0, 0, .7);
  backdrop-filter: blur(20px);

  padding: 2rem;
  width: 360px;

  border-radius: 12px;
  border: 2px solid var(--white);

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  animation: slideIn 0.5s forwards;

  h2, p {
    color: var(--primary-color);
    align-self: center;
  }

  .xizinho {
    position: absolute;
    top: 10px;
    right: 20px;

    cursor: pointer;

    font-size: 1.1rem;
    font-family: 'Quicksand', sans-serif;

    color: var(--gray);

    transition: .2s ease;
    
    &:hover {
      color: var(--light-gray);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`

export const AvatarApple = styled.div`
  display: flex;

  padding-left: .4rem;

  > img {
    display: flex;
    border-radius: 50%;
    width: 70px;
    margin-left: -32px;
  }
`

export const RedesSociaisContato = styled.section`
  display: flex;
  justify-content: space-evenly;

  transition: .5s ease;

  a:nth-child(1) {
    &:hover {
      color: var(--linkedin);
    }
  }
  a:nth-child(2) {
    &:hover {
      color: var(--blue);
    }
  }
  a:nth-child(3) {
    &:hover {
      color: var(--whatsapp);
    }
  }
  a:nth-child(4) {
    &:hover {
      color: var(--gmail);
    }
  }
`