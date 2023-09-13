import { useEffect, useState } from 'react'
import { ArrowUp, BackgroundFooter, FooterContainer, SocialMedia } from './style'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsArrowUpCircleFill } from 'react-icons/bs'

const Footer = () => {
  const [_showButton, setShowButton] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <BackgroundFooter>
      <FooterContainer>
        <SocialMedia>
          <FaLinkedin />
          <FaGithub />
        </SocialMedia>
        <span>© Fábio Luiz 2023</span>
        <ArrowUp onClick={scrollToTop}><BsArrowUpCircleFill /></ArrowUp>
      </FooterContainer>
    </BackgroundFooter>
  )
}

export default Footer