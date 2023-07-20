import './Navbar.scss'
import { Link, useParams } from "react-router-dom";

function Navbar(props) {
    const bool = window.location.href.slice(-1) == "/" ? true : false;
    const ScrollToHome = (event) => {
        event.preventDefault();
        document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
      };

    const ScrollToAbout = (event) => {
        event.preventDefault();
        document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
      };

      const ScrollToProjects = (event) => {
        event.preventDefault();
        document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
      };

      const ScrollToSkills = (event) => {
        event.preventDefault();
        document.getElementById("skills").scrollIntoView({ behavior: 'smooth' });
      };

      const ScrollToCareer = (event) => {
        event.preventDefault();
        document.getElementById("career").scrollIntoView({ behavior: 'smooth' });
      };

      const ScrollToContact = (event) => {
        event.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
      };


    if(bool){
        if(props.toggled){
            return (
                <nav>
                    <img onClick={ScrollToHome} src="/assets/logo.svg" alt="Roche Sébastien" />
                    <div className="links">
                        <a onClick={ScrollToAbout}>A propos</a>
                        <a onClick={ScrollToProjects}>Projets</a>
                        <a onClick={ScrollToSkills}>Compétences</a>
                        <a onClick={ScrollToCareer}>Carrière</a>
                        <a onClick={ScrollToContact}>Contact</a>
                    </div>
                    <div className="bar" style={{ width: props.progress+"%" }}></div>
                </nav>
            );
        } else {
            return (
                <div>
                </div>
            );
        }
    } else {
        return (
            <div className='second_nav'>
              <Link to="">
                <img src="/assets/logo.svg" alt="" />
              </Link>
            </div>
        );
    }
    
    
  }
  
  export default Navbar;