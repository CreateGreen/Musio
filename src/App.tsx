import React, { useEffect, useState } from "react";
import { BrowserRouter , Route,Routes } from "react-router-dom";

import axios from "axios";
import Home from "./routes/Home";
import Login from "./routes/Login";


function App() {
 
  return (
    
    <div className="App">
      
      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
