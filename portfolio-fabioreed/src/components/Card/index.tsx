import { useContext } from 'react'
import {
  Card,
  CardGitHub,
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

interface RepoType {
  id: number
  name: string
  language: string
  description: string
  html_url: string
  homepage: string
}

export const Carda = () => {
  const { filteredProjects, selectedCategory, repositoriesGitHub } = useContext(UserContext)

  return (
    <>
      {selectedCategory === 'github' ? (
        repositoriesGitHub.map((repo: RepoType) => (
          <Card key={repo.id}>
            <h3>{repo.name}</h3>
            <span>{repo.description}</span>
            <TypeSection>
                <span>{repo.language}</span>
            </TypeSection>
            <p>{repo.description}</p>
            <LinkOfTheProject>
              <BsArrowUpLeftCircleFill />
              <LinkToTheProject to={repo.html_url} target="_blank">
                <b>Visit repository</b>
              </LinkToTheProject>
            </LinkOfTheProject>
          </Card>

        ))) : (

        filteredProjects.map((project: ProjectType, index: number) => (
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
        ))
      )}
    </>
  )
}        
