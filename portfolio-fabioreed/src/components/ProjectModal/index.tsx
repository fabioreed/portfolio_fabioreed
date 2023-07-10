import { Link } from "react-router-dom"
import projects from "../../mock"
import { useState } from "react"
import { UserContext } from "../../providers/UserContext"

const ProjectModal = () => {
  const { } = useState(UserContext)
  return (
    <></>
    // <div>
    //   <h3>{projects.name}</h3>
    //   <img src={projects.img} alt={projects.name} />
    //   <div>
    //     {project.technologies.map((tech, index) => (
    //       <span key={index}>{tech}</span>
    //     ))}
    //   </div>
    //   <p>{project.description}</p>
    //   <div>
    //     {/* <BsArrowUpLeftCircleFill /> */}
    //     <Link to={project.link} target="_blank">
    //       <b>Visit project</b>
    //     </Link>
    //   </div>
    //   {/* <button onClick={closeModal}>Close</button> */}
    // </div>
  )
}