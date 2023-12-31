import { useContext, useEffect } from 'react'
import { ModalContainer, ModalItSelf, TagLink } from './style'
import { HiOutlineHome } from 'react-icons/hi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FaMapSigns } from 'react-icons/fa'
import { UserContext } from '../../providers/UserContext'

const Modal = () => {
  const { modal, setModal } = useContext(UserContext)

  useEffect(() => {
    const handleBeforeUnload = () => {
      setModal(false)
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [setModal])

  const handleCloseModal = () => {
    setModal(false)
  }

  return (
    <ModalContainer>
      <ModalItSelf>
        <div>
          <span onClick={() => setModal(!modal)}>X</span>
        </div>
        <ul>
          <TagLink to='/' onClick={handleCloseModal}><HiOutlineHome />Home</TagLink>
          <TagLink to='/projects' onClick={handleCloseModal}><AiOutlineFundProjectionScreen />Projects</TagLink>
          <TagLink to='/about' onClick={handleCloseModal}><FaMapSigns />About Me</TagLink>
        </ul>
      </ModalItSelf>
    </ModalContainer>
  )
}

export default Modal