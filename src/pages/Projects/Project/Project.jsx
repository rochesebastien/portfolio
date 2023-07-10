import { useParams } from 'react-router-dom';
import  './Project.scss';
import ProjectsData from "../../../data/projects.json"
import { Link } from "react-router-dom";
import Navbar from '../../../components/Navbar/Navbar';

function Project(props){
  let {id}= useParams(); 
  console.log(id);
  const src = `/assets/img/projet${id}.jpg`;
  let project = ProjectsData[id]
    
    
    return (
      <div className="page_project">
        <Navbar/>
      <div className="title">
        <h1>Projet 1</h1>
        <span>retour</span>
      </div>
      <img src="" alt="" />
      <h2></h2>
      <hr />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!
      <hr />
      </div>
      )
}

export default Project