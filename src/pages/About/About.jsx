import Headshot from '../../assets/Headshot.png'
import styles from './About.module.css'

const About = () => {
  return ( 
    <main>
      <img className={styles.headshot} src={Headshot} alt="Headshot on boat of chris" />
      <div className={styles.description}>
        <p>I am an aspiring software engineer that comes equipped with a background in customer service and sales. I come equipped with a passion to constantly challenge myself and learn new things. My skills include JavaScript, Node JS, React, CSS, HTML and extensive knowledge of MongoDB, Google OAuth and PostgreSQL. With a positive attitude, I bring life and energy to any situation and lead to a positive working environment.</p>
      </div>
    </main>
  )
}

export default About;