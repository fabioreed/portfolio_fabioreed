import { useEffect, useState } from 'react'
import { ArrowUp, BackgroundFooter, FooterContainer, LinkToSocialMedia, SocialMedia } from './style'
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
          <LinkToSocialMedia to='https://www.linkedin.com/in/fabioreed' target='_blank'>
            <FaLinkedin />
          </LinkToSocialMedia>
          <LinkToSocialMedia to='https://www.github.com/fabioreed' target='_blank'>
            <FaGithub />
          </LinkToSocialMedia>
        </SocialMedia>
        <span>© Fábio Luiz 2023</span>
        <ArrowUp onClick={scrollToTop}><BsArrowUpCircleFill /></ArrowUp>
      </FooterContainer>
    </BackgroundFooter>
  )
}

export default Footer