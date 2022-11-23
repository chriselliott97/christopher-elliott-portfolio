import Headshot from '../../assets/Headshot.png'
import GITHUB from '../../assets/Github-logo.svg'
import LINKEDIN from '../../assets/Linkedin-logo.svg'
import styles from './Home.module.css'


const Home = () => {
  return ( 
    <main className={styles.homeMain}>
      <h1>Christopher Elliott</h1>
      <img className={styles.headshot} src={Headshot} alt="Headshot on boat of chris" />
      <h1>Software Engineer</h1>
      <div className={styles.logos}> 
        <a href='https://www.linkedin.com/in/chris-elliott97/'>
          <img style={{width: '60px'}}src={LINKEDIN} alt="linkedin logo" />
        </a>
        <a href='https://github.com/chriselliott97'>
          <img style={{width: '60px'}}src={GITHUB} alt="github logo" />
        </a>  
      </div>
    </main>
  );
}

export default Home;  <h1>Home</h1>