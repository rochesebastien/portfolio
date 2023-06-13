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
      <div className="title_container">
        <h1>
            <span>PROJECTS</span>
            <span>{ProjectsData.length}</span>
        </h1>
        </div>
        <div className="project_container">
          <div className="left">
            <ul>
                {ProjectsData.map((project) => (
                  <li onMouseEnter={(e) => ChangeImgProject(e,project.id)} key={project.id}><Link to={`/projects/${project.id-1}`} className="nav__link" >{project.title}</Link></li>
              ))}
          </ul>
          </div>
          <div className="right">
          <img id="tg" src="/assets/img/projet0.jpg" alt=""/>
          {/* < ImageProjects src="/assets/img/projet0.jpg"/> */}
          </div> 
        </div>
      </div>           
  );
}

  
  export default Projects;