import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'
import { AvatarApple, BackgroundModal, ContactContainer, RedesSociaisContato } from './style'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BiLogoGmail } from 'react-icons/bi'
import { MediaSocial } from '../../pages/Home/style'
import { userData } from '../../utils/userData'
import avatar1 from '../../assets/iphoneavatar.jpg'
import avatar2 from '../../assets/iphoneavatar2.jpg'
import avatar3 from '../../assets/iphoneavatar3.jpg'
import avatar4 from '../../assets/iphoneavatar4.jpg'
import avatar5 from '../../assets/iphoneavatar5.jpg'
import avatar6 from '../../assets/iphoneavatar6.jpg'

const ContactModal = () => {
  const { contact, setContact } = useContext(UserContext)
  
  return (
    <BackgroundModal>
      <ContactContainer>
        <h2>Get in touch</h2>
        <span className='xizinho' onClick={() => setContact(!contact)}>X</span>
        <AvatarApple>
          <img src={avatar1} />
          <img src={avatar3} />
          <img src={avatar2} />
          <img src={avatar4} />
          <img src={avatar5} />
          <img src={avatar6} />
        </AvatarApple>
        
        <p>Here is my social media</p>
        <RedesSociaisContato>
          <MediaSocial to={`https://www.linkedin.com/in/${userData.linkedinUser}/`} target="_blank"><FaLinkedin /></MediaSocial>
          <MediaSocial to={`https://github.com/${userData.githubUser}`} target="_blank"><FaGithub /></MediaSocial>
          <MediaSocial to={`https://wa.me/${userData.whatsappNumber}`} target="_blank"><IoLogoWhatsapp /></MediaSocial>
          <MediaSocial to={`mailto:${userData.emailUser}`} target="_blank"><BiLogoGmail /></MediaSocial>
        </RedesSociaisContato>
      </ContactContainer>
    </BackgroundModal>
  )
}

export default ContactModal