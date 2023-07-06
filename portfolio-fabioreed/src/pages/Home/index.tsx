import { MainContainerHome, MediaSocial, PDFContainer, PictureHome, ResumeContainer, SectionnContainerHome, SocialMediaContainer, TechnologiesContainer } from './style'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
import { BsCloudArrowDownFill } from 'react-icons/bs'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Me from '../../assets/fabiomdl.png'
import Header from '../../components/Header'
import CurriculoEn from '../../assets/Fabio Resume En Frontend.pdf'
import CurriculoPt from '../../assets/Fabio Luiz - Curriculo.docx.pdf'

const Home = () => {
  return (
    <MainContainerHome>
      <Header />
      <SectionnContainerHome>
        <div>
          <h1>I'm a <span>&lt; Frontend /&gt; </span>Developer creating elegant and <span>functional</span> interfaces.</h1>
          <p>I'm a <b>frontend developer</b> passionate about creating elegant and functional interfaces that provide the best user experience.</p>
          <ResumeContainer>
            <PDFContainer>
              <a href={CurriculoEn} download>English CV<BsCloudArrowDownFill /></a>
              <a href={CurriculoPt} download>Currículo em português<BsCloudArrowDownFill /></a>
            </PDFContainer>
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
                <FaNodeJs />
              </div>
            </TechnologiesContainer>
          </ResumeContainer>
        </div>
        <PictureHome>
          <img src={Me} />
          <SocialMediaContainer>
            <MediaSocial to='https://www.linkedin.com/in/fabioreed/' target="_blank"><FaLinkedin /></MediaSocial>
            <MediaSocial to='https://github.com/fabioreed' target="_blank"><FaGithub /></MediaSocial>
          </SocialMediaContainer>
        </PictureHome>
      </SectionnContainerHome>
    </MainContainerHome>
  )
}

export default Home