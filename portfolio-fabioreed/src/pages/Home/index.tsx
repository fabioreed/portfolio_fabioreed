import { useEffect } from 'react'
import {
  MainContainerHome,
  MediaSocial,
  PDFContainer,
  PictureHome,
  ResumeContainer,
  SectionnContainerHome,
  SocialMediaContainer,
  TechnologiesContainer,
  ContainerWhoIamWords,
  FooterRecentProjects,
  DivContainerRecentProjects,
  AsideContainerFooter,
  RecentProjectsContainer,
  RecentProjectsCard,
  SeeMore,
  Container
} from './style'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
import { BsCloudArrowDownFill, BsCaretRightFill } from 'react-icons/bs'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { userData } from '../../utils/userData'
import Header from '../../components/Header'
import CurriculoEn from '../../assets/Resume Fabio Silva En .pdf'
import CurriculoPt from '../../assets/Fabio Luiz - Curriculo PT .pdf'
import Footer from '../../components/Footer'
import { recent } from '../../mock'
import { Link } from 'react-router-dom'

const Home = (): JSX.Element => {

  useEffect(() => {
    // window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries?.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })

    const hiddenElements: any = document.querySelectorAll('.hidden')
    hiddenElements?.forEach((el: any) => observer.observe(el))

    return () => {
      hiddenElements?.forEach((el: any) => observer.unobserve(el))
    }
  }, [])

  return (
    <Container>
      <MainContainerHome>
        <Header />
        <SectionnContainerHome>
          <div>
            <ContainerWhoIamWords>
              <h1>I'm a <span className='frontend-text'>&lt; Frontend /&gt; </span>Developer creating elegant and <span className='frontend-text'>functional</span> interfaces.</h1>
              <p>I'm a <b>frontend developer</b> passionate about creating elegant and functional interfaces that provide the best user experience.</p>
              <TechnologiesContainer>
                <div>
                  <FaReact />
                </div>
                <div>
                  <TbBrandNextjs />
                </div>
                <div>
                  <SiTypescript />
                </div>
                <div>
                  <SiJavascript />
                </div>
                <div>
                  <DiCss3 />
                </div>
                <div>
                  <FaNodeJs />
                </div>
              </TechnologiesContainer>
            </ContainerWhoIamWords>
            <ResumeContainer>
              <PDFContainer>
                <a href={CurriculoEn} download>English CV<BsCloudArrowDownFill /></a>
                <a href={CurriculoPt} download>Currículo em português<BsCloudArrowDownFill /></a>
              </PDFContainer>
            </ResumeContainer>
          </div>
          <PictureHome>
            <img src={`https://github.com/${userData.githubUser}.png`} />
            <SocialMediaContainer>
              <MediaSocial to={`https://www.linkedin.com/in/${userData.linkedinUser}/`} target="_blank"><FaLinkedin /></MediaSocial>
              <MediaSocial to={`https://github.com/${userData.linkedinUser}`} target="_blank"><FaGithub /></MediaSocial>
            </SocialMediaContainer>
          </PictureHome>
        </SectionnContainerHome>

        <FooterRecentProjects>
          <DivContainerRecentProjects>
            <h3 className="">MY RECENT PROJECTS</h3> {/*hidden logo*/}
          </DivContainerRecentProjects>
          <AsideContainerFooter>
            <RecentProjectsContainer className='fade-in'>
              {recent.map((item, index) => (
                <Link to={item.link} target='_blank' key={index}>
                  <RecentProjectsCard key={index} className="hidden logo">
                    <span>{item.category}</span>
                    <img src={item.img} />
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                  </RecentProjectsCard>
                </Link>
              ))}
            </RecentProjectsContainer>
          </AsideContainerFooter>
        </FooterRecentProjects>
        <SeeMore to='/projects' className='desktop-btn'>
          See more projects <BsCaretRightFill />
        </SeeMore>
      </MainContainerHome>
      <Footer />
    </Container>
  )
}

export default Home