import { projects } from "../data/projects";
import ProjectsList from "../components/ProjectsList";

const Projects = () => {
  return ( 
    <>
    <ProjectsList projects={projects}/>
    </>
  );
}

export default Projects;