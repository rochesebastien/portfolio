import {
  Routes,
  Route,
} from "react-router-dom";


import { useState, useEffect } from 'react';

import Project from "./pages/Projects/Project/Project";

import Layout from "./pages/Layout/Layout";

function App() {

    return (
      <div className="App">
             <Routes> 
              <Route path="/projects/:id" element={<Project />} /> 
              <Route path="" element={<Layout />} /> 
              <Route path="/test" element={<Layout />} /> 
            </Routes> 
      </div>
    )
}

export default App
