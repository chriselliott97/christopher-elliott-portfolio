import Headshot from '../../assets/Headshot.png'
import styles from './Home.module.css'


const Home = () => {
  return ( 
    <main className={styles.homeMain}>
      <h1>Christopher Elliott</h1>
      <img className={styles.headshot} src={Headshot} alt="Headshot on boat of chris" />
      <h1>Software Engineer</h1>
    </main>
  );
}

export default Home;  <h1>Home</h1>