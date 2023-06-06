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
            <span>12</span>
        </h1>
        <div className="project_container">
            <ul>
                {ProjectsData.map((project) => (
                  <li onMouseOver={(e) => ChangeImgProject(e,1)}><Link to={`/projects/${project.id}`} className="nav__link">{project.title}</Link></li>
              ))}
              {/* <hr></hr>
              <li onMouseOver={(e) => ChangeImgProject(e,1)"><Link to={`/projects/1`} className="nav__link">Project 1</Link></li>
              <hr></hr>
              <li onMouseOver={(e) => ChangeImgProject(e,2)"><Link to="/projects/2" className="nav__link">Project 2</Link></li>
              <hr></hr>
              <li onMouseOver={(e) => ChangeImgProject(e,3)"><Link to="" className="nav__link">Project 3</Link></li>
              <hr></hr>
              <li onMouseOver={(e) => ChangeImgProject(e,4)"><Link to="" className="nav__link">Project 4</Link></li>
              <hr></hr>
              <li onMouseOver={(e) => ChangeImgProject(e,5)"><Link to="" className="nav__link">Project 5</Link></li>
              <hr></hr>
              <li onMouseOver={(e) => ChangeImgProject(e,6)"><Link to="" className="nav__link">Project 6</Link></li>
              <hr></hr>
              <li onMouseOver={(e) => ChangeImgProject(e,7)"><Link to="" className="nav__link">Project 7</Link></li>
              <hr></hr>
              <li >Others</li>
              <hr></hr>
              <li >Others</li>
              <hr></hr>
              <li >Others</li>
              <hr></hr>
              <li >Others</li>
              <hr></hr> */}
          </ul>
          <img id="tg" src="/assets/img/projet0.jpg" alt=""/>
          {/* < ImageProjects src="/assets/img/projet0.jpg"/> */}
        </div> 
      </div>           
    </div>
  );
}

  
  export default Projects;