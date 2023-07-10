// import { useContext } from 'react'
// import Header from '../../components/Header'
// import { Card, ContainerProjects, LinkOfTheProject, LinkToTheProject, List, TitleAndSpan, TypeSection } from './style'
// import { BsArrowUpLeftCircleFill } from 'react-icons/bs'
// import projects from '../../mock'
// import { CiCoffeeCup } from 'react-icons/ci'
// import FilterProjects from '../../components/FilterProjects'
// import { UserContext } from '../../providers/UserContext'

// const Projects = () => {
//   const { category } = useContext(UserContext)

//   const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category)

//   return (
//     <ContainerProjects>
//       <Header />
//       <TitleAndSpan>
//         <h2>Personal Projects</h2>
//         <p>Made with love, coffee ...and <span> code.</span><CiCoffeeCup /></p>
//       </TitleAndSpan>
//       <FilterProjects />
//       <List>
//         {filteredProjects.map((project) => (
//           <Card key={project.name} className={project.technologies.includes('Typescript') ? 'typescript' : 'javascript'}>
//             <h3>{project.name}</h3>
//             <img src={project.img} />
//             <TypeSection>
//               {project.technologies.map((tech, index) => (
//                 <span key={index}>{tech}</span>
//               ))}
//             </TypeSection>
//             <p>{project.description}</p>
//             <LinkOfTheProject>
//               <BsArrowUpLeftCircleFill />
//               <LinkToTheProject to={project.link} target="_blank">
//                 <b>Visit project</b>
//               </LinkToTheProject>
//             </LinkOfTheProject>
//           </Card>
//         ))}
//       </List>
//     </ContainerProjects>
//   )
// }

// export default Projects

import { useState, useContext } from 'react';
import Header from '../../components/Header';
import {
  Card,
  ContainerProjects,
  LinkOfTheProject,
  LinkToTheProject,
  List,
  ModalProject,
  ModalSection,
  ModalCloseBtn,
  TitleAndSpan,
  TypeSection,
} from './style';
import { BsArrowUpLeftCircleFill } from 'react-icons/bs';
import projects from '../../mock';
import { CiCoffeeCup } from 'react-icons/ci';
import FilterProjects from '../../components/FilterProjects';
import { UserContext } from '../../providers/UserContext';

const Projects = () => {
  const { category } = useContext(UserContext);

  const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category);

  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (project: any) => {
    setSelectedCard(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
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
        {filteredProjects.map((project) => (
          <Card
            key={project.name}
            className={project.technologies.includes('Typescript') ? 'typescript' : 'javascript'}
            onClick={() => openModal(project)}
          >
            <h3>{project.name}</h3>
            <img src={project.img} alt={project.name} />
            <TypeSection>
              {project.technologies.map((tech, index) => (
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
      </List>
      {showModal && (
        <Modal project={selectedCard} closeModal={closeModal} />
      )}
    </ContainerProjects>
  );
};

const Modal = ({ project, closeModal }) => {
  return (
    <ModalProject>
      <ModalSection>
        <h3>{project.name}</h3>
        <img src={project.img} alt={project.name} />
        <TypeSection>
          {project.technologies.map((tech, index) => (
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
        <ModalCloseBtn onClick={closeModal}>X</ModalCloseBtn>
      </ModalSection>
    </ModalProject>
  )
}

export default Projects