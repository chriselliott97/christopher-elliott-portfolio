import ProjectPreview from "../ProjectPreview/ProjectPreview.jsx";
import styles from "./ProjectsList.module.css"

const ProjectsList = (props) => {
  return ( 
    <>
    <div className={styles.container}>
        {props.projects.map((project, i) =>
        
          <ProjectPreview title={project.title} key={i} image={project.image}/>
        

        )}
      </div>
    </>
  );
}

export default ProjectsList;