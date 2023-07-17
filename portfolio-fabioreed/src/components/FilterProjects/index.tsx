import { useContext, useEffect } from 'react'
import { ContainerProjectsButton, ButtonProject } from './style'
import { UserContext } from '../../providers/UserContext'
import { userData } from '../../utils/userData'

// interface RepoType {
//   id: number
//   name: string
//   language: string
//   description: string
//   html_url: string
//   homepage: string
// }

const FilterProjects = () => {
  const { setCategory, setRepositoriesGitHub, selectedCategory, setSelectedCategory } = useContext(UserContext)
  // const [selectedCategory, setSelectedCategory] = useState('all')
  // const [repositoriesGitHub, setRepositoriesGitHub] = useState<RepoType[]>([])
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch(
  //       `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
  //     )

  //     const json = await data.json()

  //     setRepositoriesGitHub(json)

  //     return json
  //   }

  //   fetchData()
  // }, [])

  const handleFilter = (category: string) => {
    setCategory(category)
    setSelectedCategory(category)
  }
  
  return (
    <ContainerProjectsButton>
      <ButtonProject
        onClick={() => handleFilter('all')}
        className={selectedCategory === 'all' ? 'selected' : '' }
      >All Projects</ButtonProject>
      <ButtonProject
        onClick={() => handleFilter('frontend')}
        className={selectedCategory === 'frontend' ? 'selected' : '' }
      >Frontend</ButtonProject>
      <ButtonProject
        onClick={() => handleFilter('backend')}
        className={selectedCategory === 'backend' ? 'selected' : '' }
      >Backend</ButtonProject>
      <ButtonProject
        onClick={() => handleFilter('github')}
        className={selectedCategory === 'github' ? 'selected' : '' }
      >
        Github Repositories
      </ButtonProject>
    </ContainerProjectsButton>
  )
}

export default FilterProjects