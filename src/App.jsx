import './App.css'
import About from './assets/about'
import Contact from './assets/contact'
import Navbar from './assets/navbar'
import Project from './assets/project'
import Skill from './assets/skill'
import Footer from './assets/footer'


function App() {
  return (
    <>
     <div id="about" className="about-section sec">
     <Navbar/>
        <About />
      </div>
      <div id="skill" className="skill-section sec" >
        <Skill />
      </div>
      <div id="project" className="project-section sec">
        <Project />
      </div>
      <div id="contact" className="contact-section sec">
        <Contact />
      </div>
      <Footer/>

    </>
  )
}
export default App