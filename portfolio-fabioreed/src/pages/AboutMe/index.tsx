import { useEffect } from 'react'
import Header from '../../components/Header'
import { AnotherInfoCard, AsideCard, ContainerAboutMe, FigureContainer, SayHello, ContainerOfInfoCards, LinkCardInfo } from './style'
import Me from '../../assets/iphoneavatar4.jpg'
import { BiLogoGmail, BiLogoWhatsapp } from 'react-icons/bi'
import { BsCaretRightFill, BsGithub, BsChevronRight } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { userData } from '../../utils/userData'
import Footer from '../../components/Footer'
import Licensed from '../../components/Licensed'

const AboutMe = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ContainerAboutMe>
        <Header />
        <footer>
          <article>
            <h1>About Me</h1>
            <p>My name is Fabio and I am a Frontend Software Engineer from Brazil.<b></b>. 
              I'm dedicated to crafting robust projects and recently graduated as a Fullstack Developer.<br /> My expertise lies in React, Next.js, JavaScript, TypeScript, Git Flow, and GitHub, specializing in projects that involve interaction with Backend APIs. <br/>On the backend, I work with Python, Node.js, Django, Express, Nest, Prisma, Swagger, and TypeORM.</p>
            <SayHello to={`https://wa.me/${userData.whatsappNumber}`} target="_blank">
              Say Hello
              <BsCaretRightFill />
            </SayHello>
          </article>
          <ContainerOfInfoCards>
            <AsideCard>
              <FigureContainer>
                <img src={Me} />
                <div>
                  <h3>{userData.nameUser}</h3>
                  <span>Frontend Developer React | Typescript | CSS (Mobile First)</span>
                </div>
              </FigureContainer>

              <AnotherInfoCard>
                <LinkCardInfo to={`https://wa.me/${userData.whatsappNumber}`} target="_blank">
                  <BiLogoWhatsapp />
                  <BsChevronRight />
                </LinkCardInfo>
                <LinkCardInfo to={`https://www.linkedin.com/in/${userData.linkedinUser}/`} target="_blank">
                  <FaLinkedin />
                  <BsChevronRight />
                </LinkCardInfo>
                <LinkCardInfo to={`mailto:${userData.emailUser}`} target="_blank">
                  <BiLogoGmail />
                  <BsChevronRight />
                </LinkCardInfo>
                <LinkCardInfo to={`https://www.github.com/${userData.githubUser}/`} target="_blank">
                  <BsGithub />
                  <BsChevronRight />
                </LinkCardInfo>
              </AnotherInfoCard>
            </AsideCard>
          </ContainerOfInfoCards>
        </footer>
        <Licensed />
      </ContainerAboutMe>
      <Footer />
    </>
  )
}

export default AboutMe