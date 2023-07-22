import './Home.scss'
import {React, useEffect } from 'react';

import Spline from '@splinetool/react-spline';


import { gsap } from "gsap";

function Home() {
    useEffect(() => {
      var tl = gsap.timeline();

      tl.from('.btns', { y: +200, opacity:0, duration: 1, delay: 1 });
      tl.to('.btns', { y: 0, opacity:1, duration: 1, delay: 0 });
      tl.from('#what', { x: -200, opacity:0, duration: 0.5, delay: 0 });
      tl.to('#what', { x: 0, opacity:1, duration: 1, delay: 0 });
      tl.from('.three', { opacity:0, duration: 0.2, delay: 0 });
      tl.to('.three', { opacity:1, duration: 0.2, delay: 0 });

    }, []);

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
            <span id='what'>Etudiant développeur web</span>
            <div className="btns">
                <a onClick={ScrollToProjects}>Voir mes projets</a>
                <a onClick={ScrollToAbout}>En savoir plus</a>
            </div>
            
        </div>
      </div>
    );
  }
  
  export default Home;