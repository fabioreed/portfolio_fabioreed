import { useContext } from 'react'
import {
  Card,
  LinkOfTheProject,
  LinkToTheProject,
  TypeSection,
} from './style'
import { UserContext } from '../../providers/UserContext'
import { BsArrowUpLeftCircleFill } from 'react-icons/bs'

interface ProjectType {
  name: string
  img: string
  technologies: string[]
  link: string
  description: string
}

export const Carda = () => {
  const { filteredProjects } = useContext(UserContext)

  return (
    <>
      {filteredProjects.map((project: ProjectType, index: number) => (
        <Card
          key={index}
          className={project.technologies.includes('Typescript') ? 'typescript' : 'javascript'}
        >
          <h3>{project.name}</h3>
          <img src={project.img} alt={project.name} />
          <TypeSection>
            {project.technologies.map((tech: string, index: number) => (
              <span key={index}>{tech}</span>
            ))}
          </TypeSection>
          <p>{project.description}</p>
          <LinkOfTheProject>
            <BsArrowUpLeftCircleFill />
            <LinkToTheProject to={project.link} target="_blank">
              <b>Visit project</b>
            </LinkToTheProject>
          </LinkOfTheProject>
        </Card>
      ))}
    </>
  )
}        
