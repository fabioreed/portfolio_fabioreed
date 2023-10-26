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
            <p>My name is Fabio, I'm 29 and I am from Brazil. I'm married to my beautiful English teacher Eden, who helped me to reach <b>level C1</b>. 
              I'm passionate about programming and I am recently graduated as a <b className='different'>Fullstack Developer</b>. <br />I have expertise in React, Next.js, Javascript, Typescript, Git Flow, and Github, with projects that interact with Backend APIs. On the backend, I work with Python, Node.js, Django, Express, Nest, Prisma, Swagger, and TypeORM.</p>
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
                <LinkCardInfo to={`mailto:${userData.emailUser}`}>
                  <BiLogoGmail />
                  <BsChevronRight />
                </LinkCardInfo>
                <LinkCardInfo to={`https://www.github.com/${userData.githubUser}/`}>
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