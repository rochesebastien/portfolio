import { useParams } from 'react-router-dom';
import  './Project.scss';
import ProjectsData from "../../../data/projects.json"
import { Link } from "react-router-dom";

function Project(props){
  let {id}= useParams(); 
  console.log(id);
    // 
    const src = `/assets/img/projet${id}.jpg`;
    let project = ProjectsData[id]
    
    
    return (
      <div className="page_project">
        <div className="title_container">
          
            <h1>
                <span>PROJECTS {id}</span>
                <span><Link to={`/projects`} >retour</Link></span>
            </h1>
            </div>
            <img id="tg" className="project_banner" src={src} alt=""/>
            <div className="project_info">
              <h1 >{project.title}</h1>
              <div className="project_info_text">
                <p>
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. 
                </p>
                <div className="project_info_list">
                  <span>année</span>
                  <span>catégorie</span>
                  <span>contexte</span>
                </div>
                <div className="project_info_list">
                  <span>2022</span>
                  <span>WEB</span>
                  <span>Perso</span>
                </div>
              </div>
              <div className="project_actionarea">
                <a href="">Github</a>
                <a href="">Doc</a>
              </div>
            </div>
            

            
            <div className={styles.project_nav}>
              <span><Link to={`/projects`} >Project Précdent</Link></span>
              <span><Link to={`/projects`} >Project Suivant</Link></span>
            </div>
      </div>
      )
}

export default Project