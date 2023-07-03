import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'
import { ContactContainer, RedesSociaisContato } from './style'
// import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'
import { MediaSocial } from '../../pages/Home/style'
import { Link } from 'react-router-dom'

const ContactModal = () => {
  const { contact, setContact } = useContext(UserContext)
  
  return (
    <ContactContainer>
      <h2>My info!</h2>
      <div>
        <h3>Email:</h3>
        <span>fabioeeereed@gmail.com</span>
        <span className='xizinho' onClick={() => setContact(!contact)}>X</span>
      </div>
      <div>
        <h3>WhatsApp:</h3>
        <span>
          <Link to='https://wa.me/5583986391165' target="_blank">
            +55 83 98639-1165  - just click here!
          </Link>
        </span>
      </div>
      <RedesSociaisContato>
        <MediaSocial to='https://www.linkedin.com/in/fabioreed/' target="_blank"><FaLinkedin /></MediaSocial>
        {/* <MediaSocial to='https://github.com/fabioreed' target="_blank"><GoMarkGithub /></MediaSocial> */}
      </RedesSociaisContato>
    </ContactContainer>
  )
}

export default ContactModal