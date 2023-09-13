import { useEffect } from 'react'
import Header from '../../components/Header'
import {
  ContainerProjects,
  List,
  TitleAndSpan
} from './style'
import { CiCoffeeCup } from 'react-icons/ci'
import FilterProjects from '../../components/FilterProjects'
import { Carda } from '../../components/Card'
import Footer from '../../components/Footer'

const Projects = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ContainerProjects>
        <Header />
        <TitleAndSpan>
          <h2>Personal Projects</h2>
          <p>
            Made with love, coffee ...and <span> code.</span>
            <CiCoffeeCup />
          </p>
        </TitleAndSpan>
        <FilterProjects />
        <List>
          <Carda />
        </List>
      </ContainerProjects>
      <Footer />
    </>
  )
}

export default Projects