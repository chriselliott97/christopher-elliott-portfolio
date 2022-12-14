import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume/Resume'
import Projects from './pages/Projects'
import NavBar from './components/NavBar/NavBar'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
        <Route path='projects' element={<Projects />} />
        <Route path='projects/:projectDetails' element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
