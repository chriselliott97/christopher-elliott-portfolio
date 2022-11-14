import { projects } from "../data/projects";
import ProjectsList from "../components/ProjectsList/ProjectsList.jsx";

const Projects = () => {
  return ( 
    <>
    <ProjectsList projects={projects}/>
    </>
  );
}

export default Projects;