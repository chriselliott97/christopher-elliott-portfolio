import { projects } from "../data/projects";
import { useLocation } from "react-router-dom";
import findProject from "../utilities/findProject";

const ProjectDetails = () => {
  const location = useLocation()
  const project = findProject(location.pathname)
  return ( 
    <>
      <h1> {project.title} </h1>
      <p> {project.description} </p>
      <img src={project.image} alt="proj screenshot" />
    </>
  );
}

export default ProjectDetails;