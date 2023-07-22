import {
  Routes,
  Route,
} from "react-router-dom";


import { useState, useEffect } from 'react';

import Project from "./pages/Projects/Project/Project";

import Layer from "./pages/Layer/Layer";


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
