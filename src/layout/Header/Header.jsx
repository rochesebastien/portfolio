import { Link } from "react-router-dom";
import  "./Header.scss"

function Header() {
    return (
      <nav className="navbar">
    {/* <Link className="big_logo_nav" to="">
      <img src="img/logo/nav_logo.png" alt="Roche Sébastien" />
    </Link> */}
        <Link to="" className="nav__link">Accueil</Link>
        <Link to="/skills" className="nav__link">Compétences</Link>
        <Link to="/projects" className="nav__link">Projets</Link>
        <Link to="/formations" className="nav__link">Formations</Link>
        <Link to="/about" className="nav__link">A propos</Link>
        <Link to="/contact" className="nav__link">Contact</Link>
  </nav>  
    );
  }
  
  export default Header;
  