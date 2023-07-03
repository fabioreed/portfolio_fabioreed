import Header from "../../components/Header"
import { Card, ContainerProjects, LinkOfTheProject, LinkToTheProject, List, TitleAndSpan, TypeSection } from "./style"
import { BsArrowUpLeftCircleFill } from 'react-icons/bs'
import projects from '../../mock'
import { CiCoffeeCup } from 'react-icons/ci'

const Projects = () => {

  return (
    <ContainerProjects>
      <Header />
      <TitleAndSpan>
        <h2>Personal Projects</h2>
        <p>Made with love, coffee ...and <span> code.</span><CiCoffeeCup /></p>
      </TitleAndSpan>
      <List>
        {projects.map((project) => (
          <Card key={project.name} className={project.technologies.includes('Typescript') ? 'typescript' : 'javascript'}>
            <h3>{project.name}</h3>
            <img src={project.img} />
            <p>{project.description}</p>
            <TypeSection>
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </TypeSection>
            <LinkOfTheProject>
              <BsArrowUpLeftCircleFill />
              <LinkToTheProject to={project.link} target="_blank"><b>Visit project:</b> {project.link}</LinkToTheProject>
            </LinkOfTheProject>
          </Card>
        ))}
      </List>
    </ContainerProjects>
  )
}

export default Projects