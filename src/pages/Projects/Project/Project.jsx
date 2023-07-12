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
        <h1>Projet {id}</h1>
        <span onClick={back}>retour</span>
      </div>
      <img src="" alt="" />
      <h2>{project.title}</h2>
      <hr />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!
      <hr />
      </div>
      )
}

export default Project