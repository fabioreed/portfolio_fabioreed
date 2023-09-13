import { useContext } from 'react'
import { Burger, HeaderContainer, HeaderFixed, LinkTag } from './style'
import { FiMenu } from 'react-icons/fi'
import Modal from '../Modal'
import { UserContext } from '../../providers/UserContext'
import ContactModal from '../ContactModal'
import { userData } from '../../utils/userData'

const Header = () => {
  const { modal, setModal, contact, setContact } = useContext(UserContext)

  return (
    <HeaderFixed>
      <HeaderContainer>
        <div>
          <h3>
            Fabio<span>.dev</span>
          </h3>
          <img src={`https://github.com/${userData.githubUser}.png`} />
        </div>
        <ul>
          <li><LinkTag to='/'>Home</LinkTag></li>
          <li><LinkTag to='/projects'>Projects</LinkTag></li>
          <li><LinkTag to='/about'>About Me</LinkTag></li>
        </ul>
        <button className='buttonContact' onClick={() => setContact(!contact)}>Contact</button>
        <Burger>
          <button className='buttonBurger' onClick={() => setModal(!modal)}>
            <FiMenu />
          </button>
        </Burger>

        { modal && <Modal /> }
        { contact && <ContactModal /> }
      </HeaderContainer>
    </HeaderFixed>
  )
}

export default Header