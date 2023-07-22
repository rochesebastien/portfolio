import './Contact.scss'
import React from 'react';



function Contact() {

    return (
      <div id="contact" className="contact page_container">
        <h1>ENVIE DE DISCUTER ?</h1>  
        <ul className='contact_list'>
          <li className="email">
            <img className="icons" src="/assets/icon/arobase.svg" alt="Email : " />
            <a target="_blank" href="mailto:nsebastienroche230@gmail.com">sebastienroche230@gmail.com</a>
          </li>
          <li className="location">
            <img className="icons" src="/assets/icon/location.svg" alt="Où ?" />
            <span>Limoges / Guéret, France</span>
          </li>
        </ul>    
        <div className="links_ctn">
          <p>Vous pouvez aussi me retrouver sur : </p>
          <div className="links">
            <a target="_blank" href="https://www.linkedin.com/in/sebasti1roche/"><img className="icons" src="/assets/icon/linkedin.svg" alt="Linkedin" /></a>
            <a target="_blank" href="https://github.com/rochesebastien"><img className="icons" src="/assets/icon/github.svg" alt="Github" /></a>
            <a target="_blank" href="https://www.behance.net/sebastienroche"><img className="icons" src="/assets/icon/behance.svg" alt="Behance" /></a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;