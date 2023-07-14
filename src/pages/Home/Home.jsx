import './Home.scss'
import About from '../About/About'
import Project from '../Projects/Projects';

// import Projects from "./pages/Projects/Projects";
import Skills from "../Skills/Skills";
import Formations from '../Formations/Formations';
import Contact from '../Contact/Contact';

function Home() {
    return (
      <div>
        <div className="home page-container">
          <img src="/assets/logo.svg" alt="" />
        </div>
      <About/>
      <Project/>
      <Skills />
      <Formations />
      <Contact />
    </div>
    );
  }
  
  export default Home;