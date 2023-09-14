import { useEffect } from 'react'
import { MainContainerHome, MediaSocial, PDFContainer, PictureHome, ResumeContainer, SectionnContainerHome, SocialMediaContainer, TechnologiesContainer, ContainerWhoIamWords, FooterRecentProjects, DivContainerRecentProjects, AsideContainerFooter, RecentProjectsContainer, RecentProjectsCard, SeeMore } from './style'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
import { BsCloudArrowDownFill } from 'react-icons/bs'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaLinkedin, FaGithub, FaFigma } from 'react-icons/fa'
import { userData } from '../../utils/userData'
import Header from '../../components/Header'
import CurriculoEn from '../../assets/Fabio Resume En Frontend.pdf'
import CurriculoPt from '../../assets/Fabio Luiz - Curriculo.docx.pdf'
import Footer from '../../components/Footer'
import { recent } from '../../mock'
import { Link } from 'react-router-dom'

const Home = (): JSX.Element => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <MainContainerHome>
        <Header />
        <SectionnContainerHome>
          <div>
            <ContainerWhoIamWords>
              <h1>I'm a <span>&lt; Frontend /&gt; </span>Developer creating elegant and <span>functional</span> interfaces.</h1>
              <p>I'm a <b>frontend developer</b> passionate about creating elegant and functional interfaces that provide the best user experience.</p>
              <TechnologiesContainer>
                <div>
                  <FaReact />
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
                  <FaFigma />
                </div>
                <div>
                  <TbBrandNextjs />
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
            <h3>My <span>recent projects</span></h3>
          </DivContainerRecentProjects>
          <AsideContainerFooter>
            <RecentProjectsContainer>
              {recent.map((item, index) => (
                <Link to={item.link} target='_blank'>
                  <RecentProjectsCard key={index}>
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
              <SeeMore to='/projects'>See more projects</SeeMore>
          </AsideContainerFooter>
        </FooterRecentProjects>
      </MainContainerHome>
      <Footer />
    </>
  )
}

export default Home