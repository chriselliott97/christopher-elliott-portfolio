import hyphenateWords from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";


const ProjectPreview = (props) => {
  const path = hyphenateWords(props.title)
  return ( 
    <>
    <Link to={path}>
      <div>
        <img 
          src={props.image} 
          alt={props.title}
        />

        <section>
          <h3>
            {props.title}
          </h3>
          <button>
              Learn more
          </button>
        </section>
      </div>
    </Link>
    </>
  );
}

export default ProjectPreview;