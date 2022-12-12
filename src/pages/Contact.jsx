import GITHUB from '../assets/Github-logo.svg'
import LINKEDIN from '../assets/Linkedin-logo.svg'
import MAIL from '../assets/Mail.svg'

const Contact = () => {
  return ( 
    <main>
      <h1>Contact me if you would like to work with me!</h1>
      <h3>
        <a href="mailto:chris.elliott6497@gmail.com">
          <img style={{width: '60px'}}src={MAIL} alt="linkedin logo"/>
          chris.elliott6497@gmail.com
        </a>
      </h3>
      <h3> 
        <a href="https://www.linkedin.com/in/chris-elliott97/">
          <img style={{width: '60px'}}src={LINKEDIN} alt="linkedin logo"/>
          LinkedIn
        </a>
      </h3>
      <h3> 
        <a href="https://github.com/chriselliott97">
          <img style={{width: '60px'}}src={GITHUB} alt="github logo" />
          GitHub
        </a>

      </h3>

    </main>
  );
}

export default Contact;