import './Projects.scss';
import { Link } from "react-router-dom";
import ProjectsData from "../../data/save_projects.json"
import { useState } from 'react';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  const handleClick = (index) => {
    console.log(index);
    setCurrentIndex(index);
  };

  return (
    <div className="projects">
            {ProjectsData.map((project,index) => (
                    <Link to={`/projects/${project.id-1}`} className='project-item' onClick={(e) => handleClick(index)} key={project.id}>
                      {/* <img src={`/assets/img/projet${project.id}.jpg`}/> */}
                      <div className="left">
                        <div className="hover">
                        </div>
                        <img src={project.image} alt=""/>
                        <span className="name">Feur</span>
                      </div>
                      <div className="right">
                        <span className="number">
                        {project.id}
                        </span>
                        <span className="lang">
                          {project.languages}
                        </span>
                      </div>
                    </Link>
                ))}             
          {/* <span>{ProjectsData.length}</span> */}
      </div>           
  );
}

  
  export default Projects;