import hyphenateWords from "../../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import styles from './ProjectPreview.module.css'


const ProjectPreview = (props) => {
  const path = hyphenateWords(props.title)
  return ( 
    <>
    
    <Link to={path}>
      <article className={styles.container}>
        <img 
          className={styles.screenshot}
          src={props.image} 
          alt={props.title}
        />

        <section className={styles.title}>
          <h3>
            {props.title}
          </h3>
          <button className='btn btn-primary'>
              Learn more
          </button>
        </section>
      
      </article>
    </Link>

    </>
  );
}

export default ProjectPreview;