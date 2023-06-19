import './Projects.scss';
import { Link } from "react-router-dom";
import ProjectsData from "../../data/projects.json"

let currentIndex = 0;

function updateCarousel(){
  const carouselContainer = document.querySelector(".carousel_project");
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  images.forEach(function(image) {
    image.classList.remove("dark");
  });

  images[currentIndex].classList.add("dark");
}

function listenerCarousel(e){
  const carouselContainer = document.querySelector(".carousel_project");
  console.log(carouselContainer);
  const images = Array.from(carouselContainer.children);
  const clickedImage = event.target;
  const clickedIndex = images.indexOf(clickedImage);

  if (clickedIndex !== -1) {
    currentIndex = clickedIndex;
    updateCarousel();
  }
}

function Projects() {

  return (
    <div className="projects page-container">
          <span>Page des projets</span>
          <div className="carousel">
            <div className="carousel_project">
            {ProjectsData.map((project) => (
                    <div  onClick={(e) => listenerCarousel(e)} className="carousel_item" key={project.id}><Link to={`/projects/${project.id-1}`}/>
                      <img src={`/assets/img/projet${project.id}.jpg`}/>
                    </div>
                ))}             
            </div>
          </div>        
          {/* <span>{ProjectsData.length}</span> */}
      </div>           
  );
}

  
  export default Projects;