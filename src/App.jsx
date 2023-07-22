import {
  Routes,
  Route,
} from "react-router-dom";



import Project from "./pages/Projects/Project/Project";

import Layer from "./pages/Layer/Layer";
import Loader from "./components/Loader/Loader";


function App() {

    return (
      <div className="App">
             <Routes> 
              <Route path="/projects/:id" element={<Project />} /> 
              <Route path="" element={<Layer />} /> 
            </Routes> 
      </div>
    )
}

export default App
