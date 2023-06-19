import {
  Routes,
  Route,
} from "react-router-dom";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg' Logo a changer


import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Projects/Project/Project";
import Skills from "./pages/Skills/Skills";
import Home from "./pages/Home/Home";
import Formations from "./pages/Formations/Formations";


function App() {

  return (
    <div className="App">
          {/* <Routes> */}
            {/* <Route path="/projects/:id" element={<Project />} /> */}
            {/* <Route path="" element={<Home />} /> */}
            {/* <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="formations" element={<Formations />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes> */}
          <Home/>
          <About/>
          <Projects/>
    </div>
  )
}

export default App
