import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Project from "./routes/Project";
import Detail from './routes/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project/detail/:url" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
