import hyphenateWords from "../../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import styles from './ProjectPreview.module.css'
import { projects } from "../../data/projects";


const ProjectPreview = (props) => {
  const path = hyphenateWords(props.title)
  return ( 
    <>

    <Link to={path}>
      <div className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>
        <img 
          className={styles.screenshot}
          src={props.image} 
          alt={props.title}
        />
      </div>

    </Link>

    </>
  );
}

export default ProjectPreview;