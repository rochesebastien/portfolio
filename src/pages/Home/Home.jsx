import './Home.scss'
import About from '../About/About'
import Project from '../Projects/Projects';

// import Projects from "./pages/Projects/Projects";
import Skills from "../Skills/Skills";
import Career from '../Career/Career';
import Contact from '../Contact/Contact';

function Home() {
    return (
      <div>
        <video src="/assets/bg.mp4" autoplay loop></video>
        <div className="home page-container">
          <img src="/assets/logo.svg" alt="" />
        </div>
      <About/>
      <Project/>
      <Skills />
      <Career />
      <Contact />
    </div>
    );
  }
  
  export default Home;