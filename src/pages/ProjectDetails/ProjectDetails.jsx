import { projects } from "../../data/projects";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import findProject from "../../utilities/findProject";
import styles from './ProjectDetails.module.css'

const ProjectDetails = () => {
  const location = useLocation()
  const project = findProject(location.pathname)
  return ( 
    <>
    <main className={styles.detailsMain}>
      <h1 className={styles.title}> {project.title} </h1>
      <a href={project.deploymentLink}>
        <button className="btn btn-secondary">Launch App</button>
      </a>
      <img className={styles.screenshot} src={project.image} alt="proj screenshot" />
      <p className={styles.description}> {project.description} </p>
    </main>
    </>
  );
}

export default ProjectDetails;