import './Footer.scss'
import { Link } from "react-router-dom";

function Footer() {
    const ScrollToHome = (event) => {
        event.preventDefault();
        document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
      };

    return (
    <div className='footer'>
        <span>© Roche Sébastien - 2023 Tout droits réservés</span>
       <a onClick={ScrollToHome}>Haut de page </a>
    </div>
    );
  }
  
  export default Footer;