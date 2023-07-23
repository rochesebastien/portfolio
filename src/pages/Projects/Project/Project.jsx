import { useParams } from 'react-router-dom';
import  './Project.scss';
import ProjectsData from "../../../data/projects.json"
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
        <p>{project.description}</p> 
        <hr />
        <div className="info">
          <span className='first'>Stack : </span>
          <span className='items'>{project.languages}</span>
        </div>
        <div className="info">
          <span className='first'>Quand : </span>
          <span className='items'>{project.year}</span>
        </div>
        <div className="info">
          <span className='first'>Catégorie : </span>
          <span className='items'>{project.category}</span>
        </div>
        <div className="info">
          <span className='first'>Contexte : </span>
          <span className='items'>{project.context}</span>
        </div>
        <div className="links">
          {project.website ? <a href={project.website} target="_blank">Site web</a> : ''}
          {project.github_link !="" ? <a href={project.github_link} target="_blank">Github du projet</a> : ''}
          {project.pdf_link !="" ? <a href={project.pdf_link} target="_blank">Documentation</a> : ''}
          {project.figma_link ? <a href={project.figma_link} target="_blank">Proto Figma</a> : ''}
          {project.behance_link ? <a href={project.behance_link} target="_blank">Behance</a> : ''}

        </div>
        <hr />
      </div>
      
      </div>
      )
}

export default Project