
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Animatedroute from "./Animatedroute";

function App() {
  

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Animatedroute />
      </BrowserRouter>
    </div>
  );
}

export default App;
