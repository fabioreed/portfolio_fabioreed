import { useContext } from 'react'
import { ContainerProjectsButton, ButtonProject } from './style'
import { UserContext } from '../../providers/UserContext'

const FilterProjects = () => {
  const { category, setCategory } = useContext(UserContext)
  
  const handleFilter = (category: string) => {
    setCategory(category)
  }
  
  return (
    <ContainerProjectsButton>
      <ButtonProject onClick={() => handleFilter('all')}>Todos</ButtonProject>
      <ButtonProject onClick={() => handleFilter('frontend')}>Frontend</ButtonProject>
      <ButtonProject onClick={() => handleFilter('backend')}>Backend</ButtonProject>
    </ContainerProjectsButton>
  )
}

export default FilterProjects