import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import Home from '../../assets/home.svg'

const NavBar = () => {
  return ( 
    <div className='container-fluid' style={{ backgroundColor: '#BBCBCB' }}>
      <nav className="navbar navbar-expand-xl" >
        <Link to='/' className='navbar-brand home'>
          <img src={Home} alt='home logo' width='30' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target='#toggleMobileMenu' aria-controls="toggleMobileMenu" aria-expanded='false' aria-label="Toggle Navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="toggleMobileMenu">
          <ul className='navbar-nav ms-auto text-center' style={{fontSize: '25px'}}>
            <li className='nav-link'><Link to='/about'>About</Link></li>
            <li className='nav-link'><Link to='/projects'>Projects</Link></li>
            <li className='nav-link'><Link to='/resume'>Resume</Link></li>
            <li className='nav-link'><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;