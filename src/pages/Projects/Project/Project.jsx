import { useParams } from 'react-router-dom';
import  './Project.scss';
import ProjectsData from "../../../data/save_projects.json"
import { Link } from "react-router-dom";
import Navbar from '../../../components/Navbar/Navbar';

function Project(props){
  let {id}= useParams(); 
  console.log(id);
  const src = `/assets/img/projet${id}.jpg`;
  let project = ProjectsData[id-1]
    console.log(project);

    const back = () => {
      window.history.back();
    }
    
    return (
      <div className="page_project">
        <Navbar/>
        <div className="title">
          <h1>PROJET {id}</h1>
          <span onClick={back}>retour</span>
        </div>
        <img className="project_img" src={project.image_large} alt=""/>
      <h2>{project.title}</h2>
      <div className="project_info">
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!</p> 
        <hr />
        <div className="lang_info">
          <span className='first'>Langages : </span>
          <span className='items'>{project.languages}</span>
        </div>
        <div className="links">
          {project.pdf_link !="" ? <a href="">Documentation</a> : ''}
          {project.github_link !="" ? <a href="">Github du projet</a> : ''}
          {project.figma_link ? <a href="">Proto Figma</a> : ''}
        </div>
        <hr />
      </div>
      
      </div>
      )
}

export default Project