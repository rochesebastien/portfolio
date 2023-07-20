import {
  Routes,
  Route,
} from "react-router-dom";

// import { useState, useEffect } from 'react';


import Project from "./pages/Projects/Project/Project";

import Layer from "./pages/Layer/Layer";
import Loader from "./components/Loader/Loader";


function App() {
  // const [loading, setLoading] = useState(true);
  // const [progress, setProgress] = useState(0);

  // // Simulate the loading process
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress(prevProgress => {
  //       const newProgress = prevProgress + 5; // You can adjust the increment value as needed
  //       if (newProgress >= 100) {
  //         clearInterval(interval);
  //         setLoading(false);
  //       }
  //       return newProgress;
  //     });
  //   }, 500); // Adjust the interval to control the speed of loading

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

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
