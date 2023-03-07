
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Project from "./routes/Project";
import Detail from "./routes/Detail";
import {AnimatePresence} from 'framer-motion';


function Animatedroute() {
  const location = useLocation();

  return (
    
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project/detail/:url" element={<Detail />} />
        </Routes>
      </AnimatePresence>
    
  );
}

export default Animatedroute;