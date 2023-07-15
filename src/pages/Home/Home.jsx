import './Home.scss'
import About from '../About/About'
import Projects from '../Projects/Projects';

import Title from '../../components/Title/Title';
import Skills from "../Skills/Skills";
import Career from '../Career/Career';
import Contact from '../Contact/Contact';

function Home() {
    return (
      <div>
        {/* <video src="/assets/bg.mp4" autoplay loop></video> */}
        <div className="home page-container">
          <img src="/assets/logo.svg" alt="" />
        </div>
      <Title section_name='Presentation' direction='left'/>
      <About/>
      <Title section_name='Projets' direction='right'/>
      <Projects/>
      <Title section_name='Talents' direction='left'/>
      <Skills />
      <Title section_name='Carrière' direction='right'/>
      <Career />
      <Title section_name='Contact' direction='left'/>
      <Contact />
    </div>
    );
  }
  
  export default Home;