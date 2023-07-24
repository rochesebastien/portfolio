


import Home from '../Home/Home';
import Navbar from '../../components/Navbar/Navbar';
import About from '../About/About'
import Title from '../../components/Title/Title';
import Career from '../Career/Career';
import Projects from '../Projects/Projects';
import Skills from "../Skills/Skills";
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';

import { useState, useEffect } from 'react';

function Layer() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [progressNavbar, setProgressNavbar] = useState(0);

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const totalSteps = 20; // Nombre total d'étapes pour atteindre 100%
  
  // Simulate the loading process
  useEffect(() => {
    const increment = 100 / totalSteps;
    let currentStep = 0;

    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + increment;
        currentStep++;

        if (newProgress >= 100 || currentStep >= totalSteps) {
          clearInterval(interval);
          setLoading(false);
        }
        return newProgress;
      });
    }, 1); // Rafraîchissement toutes les 0.2 seconde

    return () => {
      clearInterval(interval);
    };
  }, []);


  const hauteurTotale = Math.max(
    document.documentElement.scrollHeight, 
  );

  window.onscroll = ()=>{
    if(window.scrollY > window.innerHeight){
      setShowNavbar(true)
      
    } else {
      setShowNavbar(false)
    }
    if((Math.round(window.scrollY / hauteurTotale * 100) >= 94)){
      setProgressNavbar(100)
    } else {
      setProgressNavbar(Math.round(window.scrollY / hauteurTotale * 100))
    }
  };

  if(loading){
    return (
      <Loader />
    )
  }

    return (
      <div>
        <Navbar toggled={showNavbar} progress={progressNavbar} />
         {/* <video src="/assets/bg.mp4" autoplay loop></video> */}
        <Home />
        <Title section_name='A propos' direction='left'/> 
        <About/>
        <Career />
        <Title section_name='Projets' direction='right'/>
        <Projects/>
        <Title section_name='Talents' direction='left'/>
        <Skills />
        <Title section_name='Contact' direction='right'/>
        <Contact />
        <Footer />
    </div>
    );
  }
  
  export default Layer;