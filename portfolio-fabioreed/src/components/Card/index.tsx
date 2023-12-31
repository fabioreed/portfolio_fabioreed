import { useContext } from 'react'
import {
  Card,
  LinkOfTheProject,
  LinkToTheProject,
  TypeSection,
  DescriptionWithOverFlow,
  TagCategory,
  CardGitHub,
  DescriptionWithOverFlowGH
} from './style'
import { UserContext } from '../../providers/UserContext'
import { BsArrowUpLeftCircleFill } from 'react-icons/bs'

interface ProjectType {
  name: string
  img: string
  technologies: string[]
  link: string
  description: string
  category: string
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
  const {
    filteredProjects,
    selectedCategory,
    repositoriesGitHub
  } = useContext(UserContext)

  console.log(repositoriesGitHub)

  return (
    <>
      {selectedCategory === 'github' ? (
        repositoriesGitHub.map((repo: RepoType) => (
          <CardGitHub key={repo.id} className="fade-in">
            <h3>{repo.name}</h3>
            <DescriptionWithOverFlowGH>
              <span>{repo.description || 'No description available'}</span>
            </DescriptionWithOverFlowGH>
            <TypeSection>
              <span>{repo.language || 'Language not specified'}</span>
            </TypeSection>
            <LinkOfTheProject>
              <BsArrowUpLeftCircleFill />
              <LinkToTheProject to={repo.html_url} target="_blank">
                <b>Visit repository</b>
              </LinkToTheProject>
            </LinkOfTheProject>
          </CardGitHub>
        ))) : (

        filteredProjects.map((project: ProjectType, index: number) => (
          <Card
            key={index}
            className={project.technologies.includes('Typescript') ? 'typescript fade-in' : 'javascript fade-in'}
          >
            <TagCategory>{project.category}</TagCategory>
            <h3>{project.name}</h3>
            <img src={project.img} alt={project.name} />
            <TypeSection>
              {project.technologies.map((tech: string, index: number) => (
                <span key={index}>{tech}</span>
              ))}
            </TypeSection>
            <DescriptionWithOverFlow>
              <p>{project.description}</p>
            </DescriptionWithOverFlow>
            <LinkToTheProject to={project.link} target="_blank">
              <LinkOfTheProject>
                  <b>Visit project</b>
                <BsArrowUpLeftCircleFill />
              </LinkOfTheProject>
            </LinkToTheProject>
          </Card>
        ))
      )}
    </>
  )
}        
