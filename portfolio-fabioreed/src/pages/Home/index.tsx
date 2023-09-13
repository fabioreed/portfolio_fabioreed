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
              <RecentProjectsCard>
                  <img src='https://c0.wallpaperflare.com/preview/605/638/343/app-application-cellphone-cellular.jpg' />
                  <div>
                    <h4>Algum Titulo Aqui</h4>
                    <p>Something short to write</p>
                  </div>
                </RecentProjectsCard>
                <RecentProjectsCard>
                  <img src='https://c0.wallpaperflare.com/preview/605/638/343/app-application-cellphone-cellular.jpg' />
                  <div>
                    <h4>Algum Titulo Aqui</h4>
                    <p>Something short to write</p>
                  </div>
                </RecentProjectsCard>
                <RecentProjectsCard>
                  <img src='https://c0.wallpaperflare.com/preview/605/638/343/app-application-cellphone-cellular.jpg' />
                  <div>
                    <h4>Algum Titulo Aqui</h4>
                    <p>Something short to write</p>
                  </div>
                </RecentProjectsCard>
              </RecentProjectsContainer>
              <SeeMore to='/projects'>See More</SeeMore>
          </AsideContainerFooter>
        </FooterRecentProjects>
      </MainContainerHome>
      <Footer />
    </>
  )
}

export default Home