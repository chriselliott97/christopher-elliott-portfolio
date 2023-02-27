import Headshot from '../../assets/Headshot.png'
import HTML from '../../assets/html-logo.svg'
import CSS from '../../assets/CSS-logo.svg'
import JS from '../../assets/JS-logo.svg'
import PYTHON from '../../assets/Python-logo.svg'
import REACT from '../../assets/React-logo.svg'
import DJANGO from '../../assets/Django-logo.svg'
import MONGO from '../../assets/MongoDB-logo.svg'
import DOCKER from '../../assets/Docker-logo.svg'
import styles from './About.module.css'

const About = () => {
  return ( 
    <main className={styles.aboutMain}>
      <img className={styles.headshot} src={Headshot} alt="Headshot on boat of chris" />
      <section className={styles.logos}>
        <img src={HTML} alt="html logo" />
        <img src={CSS} alt="css logo" />
        <img src={JS} alt="js logo" />
        <img src={PYTHON} alt="python logo" />
        <img src={REACT} alt="react logo" />
        <img src={DOCKER} alt="docker logo" />
        <img src={DJANGO} alt="django logo" />
        <img src={MONGO} alt="mongo logo" />

      </section>
      <div className={styles.description}>
        <p>I am an aspiring software engineer that comes equipped with a background in customer service. With a passion to constantly challenge myself and learn new things, my skills include JavaScript, Node JS, React, CSS, HTML and extensive knowledge of MongoDB, Google OAuth and PostgreSQL. I bring life, energy and a positive attitude to any working environment.</p>
      </div>
    </main>
  )
}

export default About;