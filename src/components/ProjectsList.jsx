import ProjectPreview from "./ProjectPreview";

const ProjectsList = (props) => {
  return ( 
    <>
    <ul>
        {props.projects.map((project, i) =>
        
          <ProjectPreview title={project.title} key={i} image={project.image}/>
        

        )}
      </ul>
    </>
  );
}

export default ProjectsList;