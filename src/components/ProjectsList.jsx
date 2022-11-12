

const ProjectsList = (props) => {
  return ( 
    <>
    <ul>
        {props.projects.map((project, i) =>
        <h3> {project.title} </h3>
        )}
      </ul>
    </>
  );
}

export default ProjectsList;