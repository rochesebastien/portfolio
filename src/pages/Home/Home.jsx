import './Home.scss'
import React from 'react';

import Spline from '@splinetool/react-spline';

function Home() {
    const ScrollToProjects = (event) => {
        event.preventDefault();
        document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
      };
      const ScrollToAbout = (event) => {
        event.preventDefault();
        document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
      };
    return (
        <div id="home" className="home page_container">
        <Spline className="three" scene="https://prod.spline.design/cc6dfIlwTi790FJ0/scene.splinecode" />
        <div id="status">
            <span>Etudiant développeur web</span>
            <div className="btns">
                <a onClick={ScrollToProjects}>Voir mes projets</a>
                <a onClick={ScrollToAbout}>En savoir plus</a>
            </div>
            
        </div>
      </div>
    );
  }
  
  export default Home;