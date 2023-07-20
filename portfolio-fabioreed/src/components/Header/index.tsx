import { useContext } from 'react'
import { Burger, HeaderContainer, LinkTag } from './style'
import { FiMenu } from 'react-icons/fi'
import Modal from '../Modal'
import { UserContext } from '../../providers/UserContext'
import ContactModal from '../ContactModal'
import { userData } from '../../utils/userData'
// import Switch from 'react-switch'
// import { ThemeContext } from 'styled-components'
// import { shade } from 'polished'

const Header = () => {
  const { modal, setModal, contact, setContact } = useContext(UserContext)
  
  // const { color, title } = useContext(ThemeContext) ?? {}

  // const offColor = color?.gray ? shade(0.1, color.gray) : '#000000';
  // const onColor = color?.gray ? color.gray : '#ffffff';


  return (
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
      {/* <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={offColor}
        onColor={onColor}
      /> */}
      <button className='buttonContact' onClick={() => setContact(!contact)}>Contact</button>
      <Burger>
        <button className='buttonBurger' onClick={() => setModal(!modal)}>
          <FiMenu />
        </button>
      </Burger>

      { modal && <Modal /> }
      { contact && <ContactModal /> }
    </HeaderContainer>
  )
}

export default Header