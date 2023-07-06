import { useContext, useState } from 'react'
import { ContainerProjectsButton, ButtonProject } from './style'
import { UserContext } from '../../providers/UserContext'

const FilterProjects = () => {
  const { setCategory } = useContext(UserContext)
  const [selectedCategory, setSelectedCategory] = useState('all')
  
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
    </ContainerProjectsButton>
  )
}

export default FilterProjects