import './Projects.scss';
import { Link } from "react-router-dom";
import ProjectsData from "../../data/projects.json"

 function ChangeImgProject(e,index) {
  let test = document.getElementById('tg');
  test.src = "/assets/img/projet"+index+".jpg";
  
}

function Projects() {
    return (
      <div className="projets page-container">
        <div className="title_banner">
            <div className="left">
              <span>Select the project</span>
            </div>
            <div className="right">
              <span>
                <input type="radio" name="project_type" id="project_radio_web" />
                <label htmlFor="project_radio_we">All</label>
              </span>
              <span>
                <input type="radio" name="project_type" id="project_radio_web" />
                <label htmlFor="project_radio_we">Web</label>
              </span>
              <span>
                <input type="radio" name="project_type" id="project_radio_web" />
                <label htmlFor="project_radio_we">Others</label>
              </span>
            </div>
        </div>
          <div className="project_container">
             <div className="left">
                <ul>
                  <li>Super test </li>
                  <li>Super test </li>
                  <li>Super test </li>
                  <li>Super test </li>
                  <li>Super test </li>
                  <li>Super test </li>
                </ul>
             </div>
             <div className="right">
                <img id="tg" src="/assets/img/projet0.jpg" alt=""/>
             </div>
            
 
        </div>           
      </div>
    );
  }
  
  export default Projects;