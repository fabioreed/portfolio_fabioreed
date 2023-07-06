import Header from '../../components/Header'
import { AnotherInfoCard, AsideCard, ContainerAboutMe, FigureContainer, Icons, MyTechnologies, SayHello, ContainerOfInfoCards } from './style'
import Me from '../../assets/Meme.jpg'
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiTypescript, SiCsswizardry, SiJavascript, SiStyledcomponents, SiMui, SiRedux, SiExpress, SiPostgresql } from 'react-icons/si'
import { BiLogoGmail, BiLogoWhatsapp } from 'react-icons/bi'
import { BsArrowRight, BsGit } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { DiDjango } from 'react-icons/di'

const AboutMe = () => {
  return (
    <ContainerAboutMe>
      <Header />
      <footer>
        <article>
          <h1>About Me</h1>
          <p>My name is Fabio, I'm 28 and I live in Brazil. I'm married to my beautiful English teacher Eden, who helped me to reach level C1. 
I'm passionate about programming and I am a frontend developer who is proficient in the languages React, Typescript, Css (Mobile First), Javascript, Node.</p>
          <SayHello to='https://wa.me/5583986391165' target="_blank"><BsArrowRight />Say Hello</SayHello>
        </article>
        <ContainerOfInfoCards>
          <AsideCard>
            <FigureContainer>
              <img src={Me} />
              <div>
                <h3>Fabio Luiz</h3>
                <span>Frontend Developer React | Typescript | CSS (Mobile First) | Node</span>
              </div>
            </FigureContainer>
            <MyTechnologies>
              <div></div>
              <h2>Technologies:</h2>
              <Icons>
                <FaReact />
                <SiTypescript />
                <SiJavascript />
                <SiStyledcomponents />
                <SiCsswizardry />
                <SiMui />
                <SiRedux />
                <BsGit />
                <FaNodeJs />
                <SiPostgresql />
                <FaPython />
                <SiExpress />
                <DiDjango />
              </Icons>
            </MyTechnologies>
          </AsideCard>
          
          <AnotherInfoCard>
            <li>
              <BiLogoWhatsapp />
              <span>83 9 8639-1165</span>
            </li>
            <li>
              <FaLinkedin />
              <span>My LinkedIn</span>
            </li>
            <li>
              <BiLogoGmail />
              <span>fabioeeereed@gmail.com</span>
            </li>
          </AnotherInfoCard>
        </ContainerOfInfoCards>
      </footer>
    </ContainerAboutMe>
  )
}

export default AboutMe