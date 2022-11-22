import Headshot from '../../assets/Headshot.png'
import HTML from '../../assets/html-logo.svg'
import CSS from '../../assets/CSS-logo.svg'
import JS from '../../assets/JS-logo.svg'
import PYTHON from '../../assets/Python-logo.svg'
import REACT from '../../assets/React-logo.svg'
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
      </section>
      <div className={styles.description}>
        <p>I am an aspiring software engineer that comes equipped with a background in customer service and sales. I come equipped with a passion to constantly challenge myself and learn new things. My skills include JavaScript, Node JS, React, CSS, HTML and extensive knowledge of MongoDB, Google OAuth and PostgreSQL. With a positive attitude, I bring life and energy to any situation and lead to a positive working environment.</p>
      </div>
    </main>
  )
}

export default About;