import './Projects.scss';
import { Link } from "react-router-dom";
import ProjectsData from "../../data/projects.json"
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
                    <div className='project-item' onClick={(e) => handleClick(index)} key={project.id}><Link to={`/projects/${project.id-1}`}/>
                      {/* <img src={`/assets/img/projet${project.id}.jpg`}/> */}
                      <div className="left">
                        <img src="/assets/img/noise.png" alt="" />
                        <span className="name">Projet 0</span>
                      </div>
                      <div className="right">
                        <span className="number">
                            01
                        </span>
                        <span className="lang">
                          PHP / JS / CSS
                        </span>
                      </div>
                    </div>
                ))}             
          {/* <span>{ProjectsData.length}</span> */}
      </div>           
  );
}

  
  export default Projects;